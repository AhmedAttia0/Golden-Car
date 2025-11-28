// import React from "react";
// import { format } from "date-fns";
// import { ar } from "date-fns/locale";
// import { DayPicker } from "react-day-picker";
// import {
//   Input,
//   Popover,
//   PopoverHandler,
//   PopoverContent,
// } from "@material-tailwind/react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import "react-day-picker/dist/style.css";

// const arabicLocale = {
//   ...ar,
//   options: { ...ar.options, weekStartsOn: 6 },
// };

// const toArabicNumbers = (str) => str.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

// const StartDateHomeForm = () => {
//   const [date, setDate] = React.useState();

//   return (
//     <div className="bg-[#FAFAFA]">
//       <Popover placement="bottom">
//         <PopoverHandler>
//           <Input
//             containerProps={{
//               className:
//                 "border-0 outline-0 before:!border-0 after:!border-0 !border-none",
//             }}
//             label="تاريخ البداية"
//             labelProps={{
//               className:
//                 "!text-black !border-none before:!border-0 after:!border-0",
//             }}
//             className="border-0 outline-0 !border-none focus:!border-0 active:!border-0 before:!border-0 after:!border-0 !text-black"
//             readOnly
//             value={
//               date
//                 ? toArabicNumbers(format(date, "PPP", { locale: arabicLocale }))
//                 : ""
//             }
//           />
//         </PopoverHandler>
//         <PopoverContent className="z-50">
//           <DayPicker
//             classNames={{ day_today: "my-day-today" }}
//             dir="rtl"
//             mode="single"
//             selected={date}
//             onSelect={(selectedDate) => setDate(selectedDate)}
//             showOutsideDays
//             locale={arabicLocale}
//             components={{
//               IconLeft: () => <FaAngleLeft className="h-4 w-4 text-gray-700" />,
//               IconRight: () => (
//                 <FaAngleRight className="h-4 w-4 text-gray-700" />
//               ),
//             }}
//             styles={{
//               caption: { textAlign: "center", color: "#000" },
//               day: { color: "#000" },
//               head_cell: { color: "#000", fontWeight: "600" },
//               nav_button: { color: "#000" },
//               month_caption: { color: "#000" },
//             }}
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// };

// export default StartDateHomeForm;

import React from "react";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "react-day-picker/dist/style.css";

const arabicLocale = {
  ...ar,
  options: { ...ar.options, weekStartsOn: 6 },
};

const toArabicNumbers = (str) => str.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);

const StartDateHomeForm = ({ onDateSelect }) => {
  const [date, setDate] = React.useState();

  const handleSelect = (selected) => {
    setDate(selected);
    onDateSelect(selected);
  };

  return (
    <div className="bg-[#FAFAFA]">
      <Popover placement="bottom" className="z-50">
        <PopoverHandler>
          <Input
            containerProps={{
              className:
                "border-0 outline-0 before:!border-0 after:!border-0 !border-none",
            }}
            label="تاريخ البداية"
            labelProps={{
              className:
                "!text-black !border-none before:!border-0 after:!border-0",
            }}
            className="border-0 outline-0 !border-none focus:!border-0 active:!border-0 before:!border-0 after:!border-0 !text-black"
            readOnly
            value={
              date
                ? toArabicNumbers(format(date, "PPP", { locale: arabicLocale }))
                : ""
            }
          />
        </PopoverHandler>
        <PopoverContent className="!z-[9999]">
          <DayPicker
            classNames={{ day_today: "my-day-today" }}
            dir="rtl"
            mode="single"
            selected={date}
            onSelect={handleSelect}
            showOutsideDays
            locale={arabicLocale}
            components={{
              IconLeft: () => <FaAngleLeft className="h-4 w-4 text-gray-700" />,
              IconRight: () => (
                <FaAngleRight className="h-4 w-4 text-gray-700" />
              ),
            }}
            styles={{
              caption: { textAlign: "center", color: "#000" },
              day: { color: "#000" },
              head_cell: { color: "#000", fontWeight: "600" },
              nav_button: { color: "#000" },
              month_caption: { color: "#000" },
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default StartDateHomeForm;
