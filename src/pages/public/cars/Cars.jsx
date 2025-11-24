import { Outlet, useMatch, useSearchParams } from "react-router-dom";
import Filteration from "./Filtertion";
import CarsList from "./CarsList";
import ScrollToTopBtn from "../../../components/ScrollToTopBtn/ScrollToTopBtn";

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // To make filters dynamic
  const allowedFilters = ["category", "transmission", "price_gte", "price_lte"];
  const filters = {};

  allowedFilters.forEach((key) => {
    const values = searchParams.getAll(key);
    if (values.length > 0) {
      filters[key] = values; // array of selected values
    }
  });
  // To highlight active car in the list
  const match = useMatch("/cars/:carId");
  const activeCarId = match ? match.params.carId : null;

  function handleFilterChange(key, value, { multiple = true } = {}) {
    if (key === "Reset") return setSearchParams({});

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);

      if (key === "price") {
        newParams.delete("price_gte");
        newParams.delete("price_lte");

        if (value.min) newParams.set("price_gte", value.min);
        if (value.max) newParams.set("price_lte", value.max);

        return newParams;
      }

      if (multiple) {
        const existing = newParams.getAll(key);
        if (existing.includes(value)) {
          const filtered = existing.filter((v) => v !== value);
          newParams.delete(key);
          filtered.forEach((v) => newParams.append(key, v));
        } else {
          newParams.append(key, value);
        }
      } else {
        newParams.delete(key);
        if (value !== "") newParams.set(key, value);
      }

      return newParams;
    });
  }

  return (
    <>
      <Outlet />
      <h2 className="font-bold text-4xl text-center mt-[4.5rem] text-[#Of3234]">
        اختار سيارتك
      </h2>

      <main className=" px-4 mb-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filteration (desktop sidebar + mobile dropdown button) */}
          <Filteration
            onFilter={handleFilterChange}
            searchParams={searchParams}
          />

          {/* content area */}
          <div className="flex-1">
            <CarsList activeCarId={activeCarId} filters={filters} />
          </div>
        </div>
      </main>
      <ScrollToTopBtn />
    </>
  );
};

export default Cars;
