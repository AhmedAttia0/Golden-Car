import { httpGet } from "./http";
import mockData from "../data/local/mockData.json";

class LocalCarService {
  constructor() {
    this.allCars = mockData.cars;
  }
  async getCars(pageNumber, limit = 10) {
    const start = (pageNumber - 1) * limit;
    const end = start + limit;

    const paginatedData = this.allCars.slice(start, end);

    return {
      data: paginatedData,
      totalCount: this.allCars.length,
    };
  }

  async getCarById(id) {
    return this.allCars.find((car) => car.id === id);
  }
}

class RemoteCarService {
  async getCars(pageParam = 1, filters = {}) {
    const limit = 10;

    // Build filter params manually
    const filterParamsArray = [];

    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          filterParamsArray.push(`${key}=${encodeURIComponent(item)}`);
        });
      } else {
        filterParamsArray.push(`${key}=${encodeURIComponent(value)}`);
      }
    });

    const filterQuery = filterParamsArray.join("&");

    const paginationParams = `_page=${pageParam}&_limit=${limit}`;

    const queryString = `cars?${paginationParams}${
      filterQuery ? `&${filterQuery}` : ""
    }`;

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
