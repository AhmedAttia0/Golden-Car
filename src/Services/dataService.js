import DataFactory from "../api/DataFactory";
const IS_LOCAL_MOCK = true;
export const carService = DataFactory.createCarService(IS_LOCAL_MOCK);
export const getCars = (pageNumber, limit) => {
  return carService.getCars(pageNumber, limit);
};

export const getCarById = (id) => {
  return carService.getCarById(id);
};
