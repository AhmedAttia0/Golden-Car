import DataFactory from "../api/DataFactory";
const IS_LOCAL_MOCK = false;
export const carService = DataFactory.createCarService(IS_LOCAL_MOCK);
export const getCars = ({ pageParam = 1 }, searchParams, limit) => {
  return carService.getCars(pageParam, searchParams, limit);
};

export const getCarById = (id) => {
  return carService.getCarById(id);
};

export const AddCar = (car) => {
  return carService.addCar(car);
};
