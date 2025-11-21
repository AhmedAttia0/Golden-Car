import {
  Outlet,
  useLoaderData,
  useMatch,
  useSearchParams,
} from "react-router-dom";
import Filteration from "./Filtertion";
import CarsList from "./CarsList";

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialData = useLoaderData();

  // To make filters dynamic
  const allowedFilters = ["category"];
  const filters = {};
  allowedFilters.forEach((key) => {
    const value = searchParams.get(key);

    if (value) filters[key] = value;
  });
  // To highlight active car in the list
  const match = useMatch("/cars/:carId");
  const activeCarId = match ? match.params.carId : null;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      const RESET_VALUE = "all";

      if (value === RESET_VALUE) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }

      return newParams;
    });
  }
  return (
    <>
      <Outlet />
      <h2 className="font-bold text-4xl text-center mt-[4.5rem]">
        اختار سيارتك
      </h2>
      <Filteration
        onFilter={handleFilterChange}
        activeFilter={filters["category"] || "all"}
      />
      <main className="container mx-auto px-4 mb-10">
        <CarsList
          initialData={initialData}
          activeCarId={activeCarId}
          filters={filters}
        />
      </main>
    </>
  );
};

export default Cars;
