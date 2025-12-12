import { FiSearch } from "react-icons/fi";
import Dropdown from "../../../components/Dropdown";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
const roles = ["كل المستخدمين", "admin", "user"];
export default function UserFilters() {
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

  function handleDropdownChange(option, menuKey) {
    const params = Object.fromEntries(searchParams.entries());
    delete params[menuKey];
    if (option !== "كل المستخدمين") {
      params[menuKey] = option;
    }
    setSearchParams(params);
  }
  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-8">
      <div className="w-[100%] lg:w-[75%] relative">
        <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="البحث عن المستخدمين بالاسم أو البريد الإلكتروني..."
          value={searchText}
          onChange={handleSearchChange}
          className="w-full bg-transparent text-white px-12 py-2 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
        />
      </div>
      <div className="relative w-[100%] lg:w-[25%]">
        <Dropdown
          options={roles}
          onChange={(option) => handleDropdownChange(option, "role")}
        />
      </div>
    </div>
  );
}
