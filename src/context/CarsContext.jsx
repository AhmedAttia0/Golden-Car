import { useContext, createContext } from "react";
import { carsList } from "../data/local/CarsData";
const CarsContext = createContext();
export const useCars = () => useContext(CarsContext);
export const CarsProvider = ({ children, carsData }) => {
  return (
    <CarsContext.Provider value={{ carsList }}>{children}</CarsContext.Provider>
  );
};
