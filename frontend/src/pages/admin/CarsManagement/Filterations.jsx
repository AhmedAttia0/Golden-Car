import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CreateNewCarModal from "./CreateOrEditCarModal";
import { useSearchParams } from "react-router-dom";
const statusOptions = ["كل السيارات", "متاحة", "غير متاحة", "تحت الصيانة"];
const carTypeOptions = ["suv", "sedan", "cabriolet", "pickup", "minivan"];

export default function Filterations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // نحدث الـ URL بدون مسح باقي الـ query params
    const params = Object.fromEntries(searchParams.entries());
    if (value) {
      params["search"] = value;
    } else {
      delete params["search"]; // لو فضيت الحقل، نشيل الـ param
    }
    setSearchParams(params);
  };

  return (
    <div className="flex gap-4 flex-wrap w-full overflow-visible">
      <CreateNewCarModal />
      <div className="relative w-[98%] md:w-[48%] lg:w-[250px]">
        <input
          type="text"
          placeholder="بحث"
          value={searchText}
          onChange={handleSearchChange}
          className="w-full border bg-transparent placeholder:text-[#4e4e4e] border-[#4e4e4e] rounded-lg py-2 pr-3 pl-10 text-right focus:outline-none text-white"
        />
        <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
      </div>
      <div className="w-[98%] md:w-[48%] lg:w-[200px] relative">
        <CarDropdown menuKey={"status"} options={statusOptions} />
      </div>
      <div className="w-[98%] md:w-[48%] lg:w-[200px] relative">
        <CarDropdown menuKey={"type"} options={carTypeOptions} />
      </div>
    </div>
  );
}

export function CarDropdown({ options, menuKey, borderColor = "#4e4e4e" }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const toggleDropdown = () => setOpen(!open);
  const selectOption = (option) => {
    setSelected(option);
    setOpen(false);
    const params = Object.fromEntries(searchParams.entries());
    delete params[menuKey];
    if (option !== "كل السيارات") {
      params[menuKey] = option;
    }
    setSearchParams(params);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className={`w-full border border-[${borderColor}] rounded-lg px-3 py-2 flex justify-between items-center bg-transparent text-right focus:outline-none text-white`}
      >
        {selected}
        <IoIosArrowDown
          className={`h-5 w-5 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Options */}
      {open && (
        <ul className="absolute mt-1 w-full bg-[#14151a] text-white font-bold border-gray-300 rounded-md shadow-lg z-50">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => selectOption(option)}
              className="px-3 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
