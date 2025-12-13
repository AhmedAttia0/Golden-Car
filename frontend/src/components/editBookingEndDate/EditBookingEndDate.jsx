

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

// const EditBookingEndDate = ({ endDate, onChange }) => {
//   const [date, setDate] = React.useState(endDate || null);

//   React.useEffect(() => {
//     setDate(endDate);
//   }, [endDate]);

//   return (
//     <div>
//       <Popover placement="bottom">
//         <PopoverHandler>
//           <Input
//             className=" !text-black"
//             label="تاريخ الانتهاء"
//             readOnly
//             value={
//               date
//                 ? toArabicNumbers(format(date, "PPP", { locale: arabicLocale }))
//                 : ""
//             }
//           />
//         </PopoverHandler>

//         <PopoverContent className="z-[99999999999999]">
//           <DayPicker
//             classNames={{ day_today: "my-day-today" }}
//             dir="rtl"
//             mode="single"
//             selected={date}
//             onSelect={(selectedDate) => {
//               setDate(selectedDate);
//               onChange(selectedDate); // ✔️ يرجع للـ Modal
//             }}
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

// export default EditBookingEndDate;



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

const EditBookingEndDate = ({ endDate, onChange }) => {
  const [date, setDate] = React.useState(endDate || null);

  React.useEffect(() => {
    setDate(endDate);
  }, [endDate]);

  return (
    <div>
      <Popover placement="bottom">
        <PopoverHandler>
          <Input
            className=" !text-black"
            label="تاريخ الانتهاء"
            readOnly
            value={
              date
                ? toArabicNumbers(format(date, "PPP", { locale: arabicLocale }))
                : ""
            }
          />
        </PopoverHandler>

        <PopoverContent className="z-[99999999999999]">
          <DayPicker
            classNames={{ day_today: "my-day-today" }}
            dir="rtl"
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              onChange(selectedDate); // ✔️ يرجع للـ Modal
            }}
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

export default EditBookingEndDate;
