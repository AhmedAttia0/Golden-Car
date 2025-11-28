import { Typography, Input } from "@material-tailwind/react";
import FilterationCatogory from "./FilterationCatogory";
import PriceInputFilter from "./PriceFilter";
const type = {
  title: "الفئة",
  key: "type",
  options: [
    {
      optionValue: "sedan",
      optionCount: "23",
    },
    {
      optionValue: "cabriolet",
      optionCount: "15",
    },
    {
      optionValue: "pickup",
      optionCount: "8",
    },
    {
      optionValue: "suv",
      optionCount: "19",
    },
    {
      optionValue: "minivan",
      optionCount: "19",
    },
  ],
};
const transmissionOptions = {
  title: "ناقل الحركة",
  key: "transmission",
  options: [
    {
      optionValue: "اوتوماتيكي",
      optionCount: "12",
    },
    {
      optionValue: "يدوي",
      optionCount: "8",
    },
  ],
};

export function Filter({ onFilter, setOpen }) {
  return (
    <div className="w-full md:w-72  shadow-md border border-gray-300">
      <div className="bg-white rounded-lg shadow p-5 ">
        <div className="p-2 mb-2">
          <div className="outline-none mb-4 flex gap-10 justify-between">
            <span className="font-medium text-gray-600">تصفية</span>
            <button
              onClick={() => onFilter("Reset")}
              className="text-gray-900 font-medium"
            >
              مسح الكل
            </button>
          </div>
          <Input
            label="ابحث عن سيارة"
            icon={<i className="fa fa-search text-gray-400" />}
            onClick={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
          />
        </div>

        <div className="px-4 pb-3">
          <FilterationCatogory onFilter={onFilter} filtertype={type} />
        </div>

        <div className="px-4 pb-3 border-t pt-3 border-t-blue-gray-50">
          <FilterationCatogory
            onFilter={onFilter}
            filtertype={transmissionOptions}
          />
        </div>

        <div className="px-4 pb-3 border-t pt-3 border-t-blue-gray-50">
          <Typography
            variant="small"
            className="font-medium text-gray-600 mb-2"
          >
            السعر :
          </Typography>
          <div>
            <div className="flex flex-col !justify-between items-center">
              <PriceInputFilter setOpen={setOpen} onFilter={onFilter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
