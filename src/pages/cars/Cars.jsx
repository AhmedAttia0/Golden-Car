import { Outlet, useMatch, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import Filteration from "./Filtertion";
import CarsList from "./CarsList";
import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return action.payload;
    case "NEXT":
      return state + 1;
    case "PREV":
      return state - 1;
    case "INIT_PAGE":
      return action.payload;
    default:
      return state;
  }
};

const Cars = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPageFromUrl = parseInt(searchParams.get("page")) || 1;
  const [currentPage, dispatch] = useReducer(reducer, currentPageFromUrl);
  const match = useMatch("/cars/:carId");
  const acitveCarId = match ? match.params.carId : null;
  useEffect(() => {
    if (!currentPage) setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams]);
  useEffect(() => {
    if (currentPage !== currentPageFromUrl) {
      dispatch({ type: "SET_ACTIVE", payload: currentPageFromUrl });
    }
  }, [currentPageFromUrl]);
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);
  return (
    <>
      <Outlet />
      <h2 className="font-bold text-4xl text-center mt-[4.5rem]">
        اختار سيارتك
      </h2>
      <Filteration />
      <main className="container mx-auto px-4 mb-10">
        <CarsList
          currentPage={currentPage}
          limit={6}
          acitveCarId={acitveCarId}
        />
      </main>
      <div className="flex justify-center my-10">
        <Pagination
          totalPages={9}
          currentPage={currentPage}
          dispatch={dispatch}
        />
      </div>
    </>
  );
};

export default Cars;
