import { useEffect, useReducer, useState } from "react";
import { Input } from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MIN":
      return { ...state, minPrice: action.payload };
    case "SET_MAX":
      return { ...state, maxPrice: action.payload };
    default:
      return state;
  }
};
const initialState = { minPrice: "", maxPrice: "" };
export default function PriceInputFilter({ onFilter, setOpen }) {
  const [searchParams] = useSearchParams();
  const [{ minPrice, maxPrice }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (!searchParams) return;
    const urlMin = searchParams.get("price_gte") || "";
    const urlMax = searchParams.get("price_lte") || "";

    if (urlMin !== minPrice) dispatch({ type: "SET_MIN", payload: urlMin });
    if (urlMax !== maxPrice) dispatch({ type: "SET_MAX", payload: urlMax });
  }, [searchParams?.get("price_gte"), searchParams?.get("price_lte")]);
  const triggerFilter = () => {
    const hasMin = minPrice !== "" && !isNaN(minPrice);
    const hasMax = maxPrice !== "" && !isNaN(maxPrice);

    if (!hasMin && !hasMax) {
      onFilter("price", { min: "", max: "" });
      return;
    }

    onFilter("price", { min: minPrice, max: maxPrice });
    setOpen(false);
  };

  const handleMinChange = (e) => {
    dispatch({ type: "SET_MIN", payload: e.target.value });
  };
  const handleMaxChange = (e) => {
    dispatch({ type: "SET_MAX", payload: e.target.value });
  };

  return (
    <div className="w-full">
      {/* wrapper allows inputs to wrap on small screens and prevents overflow */}
      <div className="flex flex-wrap gap-3 items-end">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            triggerFilter();
          }}
        >
          <div className="min-w-0 w-full sm:w-40 my-2">
            <Input
              type="number"
              label="حد أدنى"
              onChange={handleMinChange}
              value={minPrice}
              className="w-full"
            />
          </div>

          <div className="min-w-0 w-full sm:w-40">
            <Input
              type="number"
              label="حد اقصى"
              onChange={handleMaxChange}
              value={maxPrice}
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-auto mb-4 md:mb-0 flex justify-center">
            <button
              className="my-3 w-full bg-[#5937E0] text-white px-4 py-2 rounded"
              type="submit"
            >
              تصفية
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
