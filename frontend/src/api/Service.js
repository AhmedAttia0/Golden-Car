import { httpGet } from "./http";
import mockData from "../data/local/mockData.json";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export class LocalService {
  constructor() {
    this.allCars = mockData.cars;
  }
  async getCars(pageParam = 1, searchParams, limit) {
    const params = Object.fromEntries(searchParams);
    const status = params.status ? params.status.split(",") : null;
    const categories = params.type ? params.type.split(",") : null;
    const transmissions = params.transmission
      ? params.transmission.split(",")
      : null;
    const priceGte = params.price_gte ? Number(params.price_gte) : null;
    const priceLte = params.price_lte ? Number(params.price_lte) : null;

    let filtered = this.allCars.filter((car) => {
      if (categories && !categories.includes(car.type)) return false;

      if (status && !status.includes(car.status)) return false;

      if (transmissions && !transmissions.includes(car.transmission))
        return false;

      if (priceGte !== null && car.price < priceGte) return false;

      if (priceLte !== null && car.price > priceLte) return false;

      return true;
    });

    const start = (pageParam - 1) * limit;
    const end = start + limit;

    const paginatedData = filtered.slice(start, end);

    return {
      data: paginatedData,
      totalCount: this.allCars.length,
      page: pageParam,
      hasMore: end < this.allCars.length,
    };
  }

  async getCarById(id) {
    return this.allCars.find((car) => car.id === id);
  }
}

export class RemoteService {
  async getCars(pageParam = 1, searchParams, limit) {
    let queryString = `cars?page=${pageParam}&limit=${limit}`;

    if (searchParams.toString()) queryString += `&${searchParams.toString()}`;

    const { data, total } = await httpGet(queryString);

    return {
      data,
      total,
      page: pageParam,
      hasMore: pageParam * limit < total,
    };
  }

  async getCarById(id) {
    const { data } = await httpGet(`cars/${id}`);
    return data;
  }

  async addCar(car) {
    const res = await fetch(`${BASE_URL}/cars`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to add car");
    }

    return res.json();
  }

  async updateCar(car) {
    const res = await fetch(`${BASE_URL}cars/${car.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to add car");
    }

    return res.json();
  }

  async deleteCar(id) {
    const res = await fetch(`${BASE_URL}cars/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to add car");
    }

    return res.json();
  }

  async getSettings() {
    const { data } = await httpGet("settings");
    return data;
  }

  async updateSettings(settings) {
    const res = await fetch(`${BASE_URL}settings`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to add car");
    }

    return res.json();
  }

  async getUsers() {
    const res = await fetch(`${BASE_URL}admin/users`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to get users");
    }
    const { data } = await res.json();
    return data;
  }

  async login(credentials) {
    const res = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (!res.ok) {
      const error = await res.json();
      console.log("Login error:", error);
      throw new Error(error.message || "Failed to login");
    }
    const { data } = await res.json();
    return data;
  }

  async signup(userInfo) {
    const res = await fetch(`${BASE_URL}/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to signup");
    }
    const { data } = await res.json();
    return data;
  }

  async logout() {
    const res = await fetch(`${BASE_URL}/user/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to logout");
    }
    return true;
  }
}
