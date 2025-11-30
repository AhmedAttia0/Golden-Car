import { httpGet } from "./http";
import mockData from "../data/local/mockData.json";
import { useSearchParams } from "react-router-dom";

class LocalCarService {
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

class RemoteCarService {
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
}

export { LocalCarService, RemoteCarService };
