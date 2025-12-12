import DataFactory from "../api/DataFactory";
const IS_LOCAL_MOCK = false;
const Service = DataFactory.createService(IS_LOCAL_MOCK);
export const getCars = ({ pageParam = 1 }, searchParams, limit) => {
  return Service.getCars(pageParam, searchParams, limit);
};

export const getCarById = (id) => {
  return Service.getCarById(id);
};

export const AddCar = (car) => {
  return Service.addCar(car);
};

export const UpdateCar = (id, car) => {
  return Service.updateCar(id, car);
};

export const DeleteCar = (id) => {
  return Service.deleteCar(id);
};

export const getSettings = () => {
  return Service.getSettings();
};

export const updateSettings = (settings) => {
  return Service.updateSettings(settings);
};

export const getBookings = () => {
  return Service.getBookings();
};

export const addBooking = (booking) => {
  return Service.addBooking(booking);
};

export const updateBooking = (id, booking) => {
  return Service.updateBooking(id, booking);
};
