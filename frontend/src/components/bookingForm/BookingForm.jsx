import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { HomeForm } from "../homeForm/HomeForm";
import { Typography } from "@material-tailwind/react";
import { HiMiniXMark } from "react-icons/hi2";
export default function BookingForm({
  id,
  status,
  model,
  brand,
  year,
  price,
  type,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        disabled={status !== "متاحة"}
        className={`${
          status !== "متاحة"
            ? "bg-gray-700 cursor-not-allowed"
            : "bg-[#5937E0] hover:bg-[#452cb8] transition-all"
        }  text-white rounded-md w-[80%] lg:w-[50%] h-10 `}
      >
        احجز الان
      </Button>
      <Dialog open={open} className="z-40" handler={handleOpen} size="sm">
        <DialogHeader>
          <button onClick={handleOpen}>
            <HiMiniXMark className="text-2xl " />
          </button>
        </DialogHeader>
        <DialogBody>
          <Typography variant="h4" color="blue-gray" className=" text-center">
            احجز سيارتك
          </Typography>

          <HomeForm
            carId={id}
            price={price}
            brand={brand}
            model={model}
            year={year}
            type={type}
          />
        </DialogBody>
      </Dialog>
    </>
  );
}
// {/* <div className="flex flex-col  mt-4">
//             <span className="text-xl font-bold mb-0 text-black">
//               {brand} {model}
//             </span>
//             <span className="text-md font-semibold mb-0 text-black">
//               {year}-{capitalize(type)}
//             </span>
//             <span className="text-xl font-bold mb-0 text-black mt-5">
//               اختار تاريخ الحجز
//             </span>
//             {/* Start Date */}
//             <div className=" text-right mt-6">
//               {errors.startDate && (
//                 <p className="text-red-600 text-sm">{errors.startDate}</p>
//               )}
//               <StartDateHomeForm onDateSelect={handleStartDate} />
//             </div>

//             {/* Finish Date */}
//             <div className=" text-right mt-3">
//               {errors.finishDate && (
//                 <p className="text-red-600 text-sm">{errors.finishDate}</p>
//               )}
//               <FinishDateHomeForm onDateSelect={handleFinishDate} />
//             </div>
//           </div> */}
