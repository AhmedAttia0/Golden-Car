// import React, { useState } from "react";
// import { Select, Option } from "@material-tailwind/react";

// import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   IconButton,
// } from "@material-tailwind/react";
// import { FaPen } from "react-icons/fa";

// import { HomeForm } from "../homeForm/HomeForm";
// import EditBookingStartDate from "../EditBookingStartDate/EditBookingStartDate";
// import EditBookingEndDate from "../editBookingEndDate/EditBookingEndDate";
// const EditBookingModal = ({ book }) => {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => setOpen(!open);
//   const {
//     bookNO,
//     customerName,
//     Car,
//     startDate,
//     duration,
//     endDate,
//     price,
//     status,
//   } = book;
//   const [selectedCar, setSelectedCar] = useState("old");
//   const [selectedPrice, setSelectedPrice] = useState(price);
//   return (
//     <>
//       <FaPen onClick={handleOpen} className="cursor-pointer" />
//       <Dialog className="w-full" open={open} handler={handleOpen}>
//         <DialogHeader>تعديل الحجز</DialogHeader>
//         <DialogBody className="w-[100%]">
//           <div className="w-full">
//             <Card className="w-full" color="transparent" shadow={false}>
//               <p className="text-lg font-bold">رقم الحجز {bookNO}</p>
//               <p className="text-lg font-bold">اسم العيمل {customerName}</p>
//               <form className="mt-8 mb-2 w-full">
//                 <div className="mb-1 flex flex-col gap-6">
//                   <Typography
//                     variant="h6"
//                     color="blue-gray"
//                     className="-mb-3 w-[45%]"
//                   >
//                     <Select
//                       onChange={(value) => setSelectedCar(value)}
//                       value={selectedCar}
//                       label="تحديد السيارة"
//                     >
//                       <Option value="old">{Car}</Option>
//                       <Option value="1">Material Tailwind HTML</Option>
//                     </Select>
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     color="blue-gray"
//                     className="-mb-3 w-[45%]"
//                   >
//                     <div className="">
//                       <Input
//                         label="السعر"
//                         onChange={(e) => setSelectedPrice(e.target.value)}
//                         value={selectedPrice}
//                       />
//                     </div>
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     color="blue-gray"
//                     className="-mb-3 w-[45%]"
//                   >
//                     <EditBookingStartDate startDate={startDate} />
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     color="blue-gray"
//                     className="-mb-3 w-[45%]"
//                   >
//                     <EditBookingEndDate endDate={endDate} />
//                   </Typography>
//                 </div>
//                 <div className="mt-8 w-full text-end">
//                   <Button variant="gradient" color="green" onClick={handleOpen}>
//                     <span>تأكيد</span>
//                   </Button>
//                   <Button
//                     variant="text"
//                     color="red"
//                     onClick={handleOpen}
//                     className="mr-1"
//                   >
//                     <span>الغاء</span>
//                   </Button>
//                 </div>
//               </form>
//             </Card>
//           </div>
//         </DialogBody>
//       </Dialog>
//     </>
//   );
// };

// export default EditBookingModal;

import React, { useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import {
  Card,
  Input,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { FaPen } from "react-icons/fa";

import EditBookingStartDate from "../editBookingStartDate/EditBookingStartDate";
import EditBookingEndDate from "../editBookingEndDate/EditBookingEndDate";

const EditBookingModal = ({ book }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const { bookNO, customerName, Car, startDate, endDate, price } = book;

  // Form States
  const [selectedCar, setSelectedCar] = useState("old");
  const [selectedPrice, setSelectedPrice] = useState(price);

  // Dates to receive new values
  const [newStart, setNewStart] = useState(
    startDate ? new Date(startDate) : null
  );
  const [newEnd, setNewEnd] = useState(endDate ? new Date(endDate) : null);

  // Errors
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!selectedCar) temp.car = "يجب اختيار سيارة";
    if (!selectedPrice) temp.price = "السعر مطلوب";
    if (!newStart) temp.start = "تاريخ البداية مطلوب";
    if (!newEnd) temp.end = "تاريخ الانتهاء مطلوب";

    if (newStart && newEnd && newEnd <= newStart)
      temp.dateCompare = "تاريخ الانتهاء يجب أن يكون بعد تاريخ البداية";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    // لو كله تمام اقفل المودال
    handleOpen();
  };

  return (
    <>
      <FaPen onClick={handleOpen} className="cursor-pointer" />

      <Dialog className="w-full" open={open} handler={handleOpen}>
        <DialogHeader>تعديل الحجز</DialogHeader>

        <DialogBody className="w-[100%]">
          <div className="w-full">
            <Card className="w-full" color="transparent" shadow={false}>
              <p className="text-lg font-bold">رقم الحجز {bookNO}</p>
              <p className="text-lg font-bold">اسم العميل {customerName}</p>

              <form className="mt-8 mb-2 w-full">
                <div className="mb-1 flex flex-col gap-6">
                  {/* Select Car */}
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3 w-[45%]"
                  >
                    <Select
                      onChange={(value) => setSelectedCar(value)}
                      value={selectedCar}
                      label="تحديد السيارة"
                    >
                      <Option value="old">{Car}</Option>
                      <Option value="1">Material Tailwind HTML</Option>
                    </Select>
                    {errors.car && (
                      <p className="text-red-500 text-sm">{errors.car}</p>
                    )}
                  </Typography>

                  {/* Price */}
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3 w-[45%]"
                  >
                    <Input
                      label="السعر"
                      onChange={(e) => setSelectedPrice(e.target.value)}
                      value={selectedPrice}
                    />
                    {errors.price && (
                      <p className="text-red-500 text-sm">{errors.price}</p>
                    )}
                  </Typography>

                  {/* Start Date */}
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3 w-[45%]"
                  >
                    <EditBookingStartDate
                      startDate={newStart}
                      onChange={setNewStart}
                    />
                    {errors.start && (
                      <p className="text-red-500 text-sm">{errors.start}</p>
                    )}
                  </Typography>

                  {/* End Date */}
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3 w-[45%]"
                  >
                    <EditBookingEndDate endDate={newEnd} onChange={setNewEnd} />
                    {errors.end && (
                      <p className="text-red-500 text-sm">{errors.end}</p>
                    )}
                  </Typography>

                  {/* Date Compare Error */}
                  {errors.dateCompare && (
                    <p className="text-red-500 text-sm">{errors.dateCompare}</p>
                  )}
                </div>

                <div className="mt-8 w-full text-end">
                  <Button
                    variant="gradient"
                    color="green"
                    onClick={handleSubmit}
                  >
                    <span>تأكيد</span>
                  </Button>

                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>الغاء</span>
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default EditBookingModal;
