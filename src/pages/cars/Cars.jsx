import { Outlet, useLocation, useMatch } from "react-router-dom";
import { useCars } from "../../context/CarsContext";
import Pagination from "./Pagination";
import CarsList from "./CarsList";
import Filteration from "./Filtertion";

const Cars = () => {
  const { carsList } = useCars();
  const match = useMatch("/cars/:carId");
  const acitveCarId = match ? match.params.carId : null;

  return (
    <>
      <Outlet />
      <h2 className="font-bold text-4xl text-center mt-[4.5rem]">
        اختار سيارتك
      </h2>
      <Filteration />
      <main className="container mx-auto px-4 mb-10">
        <CarsList carsList={carsList} acitveCarId={acitveCarId} />
      </main>
      <div className="flex justify-center my-10">
        <Pagination currentPage={1} totalPages={9} onPageChange={() => {}} />
      </div>
    </>
  );
};

export default Cars;
