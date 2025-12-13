// import React, { useState } from "react";
// import { Select, Option } from "@material-tailwind/react";
// import {
//   Card,
//   Input,
//   Typography,
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import { FaPen } from "react-icons/fa";

// import EditBookingStartDate from "../editBookingStartDate/EditBookingStartDate";
// import EditBookingEndDate from "../editBookingEndDate/EditBookingEndDate";

// const EditBookingModal = ({ book }) => {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(!open);

//   const { bookNO, customerName, Car, startDate, endDate, price } = book;

//   // Form States
//   const [selectedCar, setSelectedCar] = useState("old");
//   const [selectedPrice, setSelectedPrice] = useState(price);

//   // Dates to receive new values
//   const [newStart, setNewStart] = useState(
//     startDate ? new Date(startDate) : null
//   );
//   const [newEnd, setNewEnd] = useState(endDate ? new Date(endDate) : null);

//   // Errors
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let temp = {};

//     if (!selectedCar) temp.car = "يجب اختيار سيارة";
//     if (!selectedPrice) temp.price = "السعر مطلوب";
//     if (!newStart) temp.start = "تاريخ البداية مطلوب";
//     if (!newEnd) temp.end = "تاريخ الانتهاء مطلوب";

//     if (newStart && newEnd && newEnd <= newStart)
//       temp.dateCompare = "تاريخ الانتهاء يجب أن يكون بعد تاريخ البداية";

//     setErrors(temp);
//     return Object.keys(temp).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validate()) return;

//     // لو كله تمام اقفل المودال
//     handleOpen();
//   };

//   return (
//     <>
//       <FaPen onClick={handleOpen} className="cursor-pointer" />

//       <Dialog className="w-full" open={open} handler={handleOpen}>
//         <DialogHeader>تعديل الحجز</DialogHeader>

//         <DialogBody className="w-[100%]">
//           <div className="w-full">
//             <Card className="w-full" color="transparent" shadow={false}>
//               <p className="text-lg font-bold">رقم الحجز {bookNO}</p>
//               <p className="text-lg font-bold">اسم العميل {customerName}</p>

//               <form className="mt-8 mb-2 w-full">
//                 <div className="mb-1 flex flex-col gap-6">
//                   {/* Select Car */}
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
//                     {errors.car && (
//                       <p className="text-red-500 text-sm">{errors.car}</p>
//                     )}
//                   </Typography>

//                   {/* Price */}
//                   <Typography
//                     variant="h6"
//                     color="blue-gray"
//                     className="-mb-3 w-[45%]"
//                   >
//                     <Input
//                       label="السعر"
//                       onChange={(e) => setSelectedPrice(e.target.value)}
//                       value={selectedPrice}
//                     />
//                     {errors.price && (
//                       <p className="text-red-500 text-sm">{errors.price}</p>
//                     )}
//                   </Typography>

//                   {/* Start Date */}
//                   <Typography
//                     variant="h6"
//                     color="blue-gray"
//                     className="-mb-3 w-[45%]"
//                   >
//                     <EditBookingStartDate
//                       startDate={newStart}
//                       onChange={setNewStart}
//                     />
//                     {errors.start && (
//                       <p className="text-red-500 text-sm">{errors.start}</p>
//                     )}
//                   </Typography>

//                   {/* End Date */}
//                   <Typography
//                     variant="h6"
//                     color="blue-gray"
//                     className="-mb-3 w-[45%]"
//                   >
//                     <EditBookingEndDate endDate={newEnd} onChange={setNewEnd} />
//                     {errors.end && (
//                       <p className="text-red-500 text-sm">{errors.end}</p>
//                     )}
//                   </Typography>

//                   {/* Date Compare Error */}
//                   {errors.dateCompare && (
//                     <p className="text-red-500 text-sm">{errors.dateCompare}</p>
//                   )}
//                 </div>

//                 <div className="mt-8 w-full text-end">
//                   <Button
//                     variant="gradient"
//                     color="green"
//                     onClick={handleSubmit}
//                   >
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

import React, { useState, useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import {
  Card,
  Input,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { FaPen } from "react-icons/fa";
import EditBookingStartDate from "../editBookingStartDate/EditBookingStartDate";
import EditBookingEndDate from "../editBookingEndDate/EditBookingEndDate";
import useUpdateBooking from "../../hooks/useUpdateBooking";

const EditBookingModal = ({ book }) => {
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpen = () => {
    setOpen(!open);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const { mutate, isPending } = useUpdateBooking();

  const { id, startDate, endDate, totalPrice, car, user } = book;
  const customerName = `${user.first_name} ${user.last_name}`;

  // Form States
  const [selectedCar, setSelectedCar] = useState(car.id);
  const [selectedPrice, setSelectedPrice] = useState(totalPrice);

  // Dates
  const [newStart, setNewStart] = useState(
    startDate ? new Date(startDate) : null
  );
  const [newEnd, setNewEnd] = useState(endDate ? new Date(endDate) : null);

  // Errors
  const [errors, setErrors] = useState({});

  // Cars list from backend
  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("http://localhost:5000/cars");
        const json = await res.json();
        setCarsList(Array.isArray(json.cars) ? json.cars : []);
      } catch (err) {
        console.error("Failed to fetch cars:", err);
        setCarsList([]);
      }
    }
    fetchCars();
  }, []);

  // Validation
  const validate = () => {
    let temp = {};
    if (!selectedCar) temp.car = "يجب اختيار سيارة";
    if (!selectedPrice || isNaN(selectedPrice)) temp.price = "السعر مطلوب";
    if (!newStart) temp.start = "تاريخ البداية مطلوب";
    if (!newEnd) temp.end = "تاريخ الانتهاء مطلوب";
    if (newStart && newEnd && newEnd <= newStart)
      temp.dateCompare = "تاريخ الانتهاء يجب أن يكون بعد تاريخ البداية";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    // Get timezone offset in minutes
    const tzOffset = newStart.getTimezoneOffset(); // فرق التوقيت بالدقائق

    // Adjust start date to keep same local date in UTC
    const startUTC = new Date(newStart.getTime() - tzOffset * 60 * 1000);

    // For end date, نقدر نخليها نهاية اليوم
    const endUTC = new Date(
      newEnd.getFullYear(),
      newEnd.getMonth(),
      newEnd.getDate(),
      23,
      59,
      59
    );

    const payload = {
      user: book.user.id,
      car: selectedCar,
      startDate: startUTC.toISOString(),
      endDate: endUTC.toISOString(),
      totalPrice: Number(selectedPrice),
    };

    mutate(
      { id, data: payload },
      {
        onSuccess: (res) => {
          setSuccessMessage(res.message || "تم تحديث الحجز بنجاح");
          handleOpen();
        },
        onError: (err) => {
          console.error("Failed to update booking:", err.message);
          setErrorMessage(err.message || "حدث خطأ أثناء التحديث");
        },
      }
    );
  };

  return (
    <>
      <FaPen onClick={handleOpen} className="cursor-pointer" />

      <Dialog className="w-full" open={open} handler={handleOpen}>
        <DialogHeader>تعديل الحجز</DialogHeader>
        <DialogBody className="w-[100%]">
          <div className="w-full">
            <Card className="w-full" color="transparent" shadow={false}>
              <p className="text-lg font-bold">رقم الحجز {id}</p>
              <p className="text-lg font-bold">اسم العميل {customerName}</p>

              <form className="mt-8 mb-2 w-full">
                <div className="mb-1 flex flex-col gap-6">
                  {/* Select Car */}
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3 w-[45%]"
                  >
                    {carsList.length > 0 ? (
                      <Select
                        onChange={(value) => setSelectedCar(value)}
                        value={
                          carsList.some((c) => c.id === selectedCar)
                            ? selectedCar
                            : carsList[0].id
                        }
                        label="تحديد السيارة"
                      >
                        {carsList.map((c) => (
                          <Option key={c.id} value={c.id}>
                            {c.brand} {c.model}
                          </Option>
                        ))}
                      </Select>
                    ) : (
                      <p>جارٍ تحميل السيارات...</p>
                    )}
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
                      type="number"
                      label="السعر"
                      onChange={(e) =>
                        setSelectedPrice(
                          e.target.value ? Number(e.target.value) : ""
                        )
                      }
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

                  {/* Server Error Message */}
                  {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-green-500 text-sm">{successMessage}</p>
                  )}
                </div>

                <div className="mt-8 w-full text-end">
                  <Button
                    variant="gradient"
                    color="green"
                    onClick={handleSubmit}
                    disabled={isPending}
                  >
                    <span>{isPending ? "جاري الحفظ..." : "تأكيد"}</span>
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
