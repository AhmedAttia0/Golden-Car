import { httpGet } from "./http";
import mockData from "../data/local/mockData.json";

class LocalCarService {
  constructor() {
    this.allCars = mockData.cars;
  }
  async getCars(pageNumber, limit) {
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
  async getCars(pageNumber, limit) {
    const start = (pageNumber - 1) * limit;
    return httpGet(`cars?_start=_${start}&_limit=${limit}`);
  }

  async getCarById(id) {
    return httpGet(`cars/${id}`);
  }
}

export { LocalCarService, RemoteCarService };
