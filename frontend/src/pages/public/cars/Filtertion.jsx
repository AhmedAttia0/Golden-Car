import { Button } from "@material-tailwind/react";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import { TbCarSuv } from "react-icons/tb";
import Filter from "../../../components/Filter/Filter";

import { useEffect, useState } from "react";
const carCategories = [
  {
    key: "all",
    label: "كل السيارات",
    icon: null,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "sedan",
    label: "Sedan",
    icon: IoCarSportOutline,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "cabriolet",
    label: "Cabriolet",
    icon: IoCarSportOutline,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "pickup",
    label: "Pickup",
    icon: LiaTruckPickupSolid,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "suv",
    label: "Suv",
    icon: TbCarSuv,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "minivan",
    label: "Minivan",
    icon: IoCarSportOutline,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
];

export default function Filteration({ onFilter, activeFilter }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      {/* Desktop sidebar (right side) — show only on large screens and up (tablet uses mobile UI) */}
      <aside className="hidden lg:block lg:shrink-0 lg:w-72 xl:w-80">
        <div className="sticky top-24 p-4 bg-white rounded-md shadow-sm">
          <Filter onFilter={onFilter} activeFilter={activeFilter} />
        </div>
      </aside>

      {/* Mobile & tablet: filter button + slide panel (visible until lg breakpoint) */}
      <div className="lg:hidden px-4 mt-10">
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 bg-div-purple text-white rounded-lg shadow-sm"
          onClick={() => setOpen(true)}
          aria-expanded={open}
        >
          <span className="font-medium">تصفية</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 01.8 1.6L12 11.5V16a1 1 0 01-1.447.894L7 15.118V11.5L2.2 5.6A1 1 0 013 5z" />
          </svg>
        </button>

        {/* slide panel */}
        <div
          className={`fixed inset-0 z-50 flex ${
            open ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!open}
        >
          {/* backdrop */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div
            className={`relative ml-auto w-full max-w-xs h-full bg-white shadow-xl transform transition-transform
              ${open ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex items-center justify-between border-b">
              <h3 className="font-semibold text-lg">تصفية</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-600 px-2 py-1 rounded hover:bg-gray-100"
                aria-label="إغلاق الفلتر"
              >
                ✕
              </button>
            </div>

            <div className="p-4 overflow-auto h-full">
              <Filter
                onFilter={onFilter}
                setOpen={setOpen}
                activeFilter={activeFilter}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
