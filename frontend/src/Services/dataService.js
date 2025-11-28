import DataFactory from "../api/DataFactory";
const IS_LOCAL_MOCK = true;
export const carService = DataFactory.createCarService(IS_LOCAL_MOCK);
export const getCars = ({ pageParam = 1 }, searchParams) => {
  return carService.getCars(pageParam, searchParams);
};

export const getCarById = (id) => {
  return carService.getCarById(id);
};
