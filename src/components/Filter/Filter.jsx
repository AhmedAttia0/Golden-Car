import React from "react";
import { Slider } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
  Input,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="#9E9E9E"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function DefaultSlider() {
  return (
    <div className="w-96">
      <Slider className="text-[#5937E0]" defaultValue={0} />
    </div>
  );
}

function List({ options, color, check }) {
  return (
    <div className="flex !justify-between items-center">
      <Checkbox
        className="hover:before:opacity-0 "
        ripple={false}
        defaultChecked={check}
        label={
          <Typography
            variant="small"
            color={color}
            className="font-medium ms-2"
          >
            {options[0]}
          </Typography>
        }
        containerProps={{
          className: "-ml-3 py-2",
        }}
      />
      <Typography variant="small" color={color} className="font-medium">
        {options[1]}
      </Typography>
    </div>
  );
}

const DATA = [
  {
    options: ["فاخرة", "23"],
    color: "blue-gray",
    check: false,
  },
  {
    options: ["رياضية", "15"],
    color: "blue-gray",
    check: false,
  },
  {
    options: ["دفع رباعي", "8"],
    color: "blue-gray",
    check: false,
  },
  {
    options: ["اقتصادية", "19"],
    color: "blue-gray",
    check: false,
  },
];

export function Filter() {
  return (
    <div className="w-full md:w-72  shadow-md border border-gray-300">
      <div className="bg-white rounded-lg shadow p-5 ">
        <div className="p-2 mb-2">
          <div className="outline-none mb-4 flex gap-10 justify-between">
            <span className="font-medium text-gray-600">تصفية</span>
            <button className="text-gray-900 font-medium">مسح الكل</button>
          </div>
          <Input
            label="ابحث عن سيارة"
            icon={<i className="fa fa-search text-gray-400" />}
            onClick={(e) => e.stopPropagation()}
            onFocus={(e) => e.stopPropagation()}
          />
        </div>

        <div className="px-4 pb-3">
          <Typography
            variant="small"
            className="font-medium text-gray-600 mb-2"
          >
            الفئة
          </Typography>
          <div className="space-y-1">
            {DATA.map((props, key) => (
              <List key={key} {...props} />
            ))}
          </div>
        </div>

        <div className="px-4 pb-3 border-t border-t-blue-gray-50">
          <Typography
            variant="small"
            className="font-medium text-gray-600 mb-2"
          >
            ناقل الحركة
          </Typography>
          <div className="space-y-1">
            {[
              {
                options: ["اوتوماتيكي", "12"],
                color: "blue-gray",
                check: false,
              },
              { options: ["يدوي", "8"], color: "blue-gray", check: false },
            ].map((props, idx) => (
              <List key={idx} {...props} />
            ))}
          </div>
        </div>

        <div className="px-4 pb-3 border-t border-t-blue-gray-50">
          <Typography
            variant="small"
            className="font-medium text-gray-600 mb-2"
          >
            السعر : 0 -1000$
          </Typography>
          <div>
            <div className="flex !justify-between items-center">
              <DefaultSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
