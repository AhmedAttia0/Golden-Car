import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { MdCalendarToday } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaPen } from "react-icons/fa6";
import { IconButton } from "@material-tailwind/react";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import ConfirmAcceptModal from "../confirmBookingModal/ConfirmBookingModal";
import ConfirmBookingModal from "../confirmBookingModal/ConfirmBookingModal";
import DeclineBookingModal from "../declineBookingModal/DeclineBookingModal";
import EditBookingModal from "../editBookingModal/EditBookingModal";

const styleStatus = {
  مكتمل: "",
  "تم الإلغاء": "red",
  "قيد الانتظار": "amber",
  "تم التأكيد": "green",
};
const BookingCard = ({ book }) => {
  const {
    bookNO,
    customerName,
    Car,
    startDate,
    duration,
    endDate,
    price,
    status,
  } = book;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="">
      <Card className="mt-6 w-[100%] bg-[#23262f] ">
        <CardBody>
          <div className="flex flex-col gap-5 mb-3">
            <div className="topSection flex flex-row justify-between">
              <div>
                <h2 className="text-xl"> رقم الحجز</h2>
                <p className="text-3xl font-bold text-white">{bookNO}</p>
              </div>
              <div>
                <Button
                  color={`${styleStatus[status]}`}
                  className="rounded-full text-xs w-fit py-1 "
                >
                  {status}
                </Button>
              </div>
            </div>
            <div>
              <h2 className="text-xl"> إسم العميل</h2>
              <p className="text-2xl font-bold text-white">{customerName}</p>
            </div>
            <div>
              <h2 className="text-xl"> السيارة</h2>
              <p className="text-2xl font-bold text-white">{Car}</p>
            </div>
          </div>
          <hr className="border-[0.1] border-gray-700" />
          <div className="bookingDuration my-3 flex flex-row justify-between">
            <div className="flex flex-row">
              <MdCalendarToday className="self-center text-lg text-[#6133BE]" />
              <div>
                <h2 className="text-xs"> تاريخ البداية</h2>
                <p className="text-sm font-bold text-white">{startDate}</p>
              </div>
            </div>
            <div className="flex flex-row">
              <MdCalendarToday className="self-center text-lg text-[#6133BE]" />
              <div>
                <h2 className="text-xs"> تاريخ النهاية</h2>
                <p className="text-sm font-bold text-white">{endDate}</p>
              </div>
            </div>
          </div>
          <hr className="border-[0.1] border-gray-700" />
          <div className="footer">
            <div className="my-3 flex flex-row items-center gap-2">
              <FiClock className="text-[#6133BE] text-lg" />
              <h2 className="text-white font-bold">{duration + " "}أيام </h2>
            </div>
            <hr className="border-[0.1] border-gray-700" />
            <div className="flex flex-row items-center gap-2">
              <FaDollarSign className="text-[#6133BE] text-lg " />
              <div className="flex flex-row items-center gap-1 text-white font-bold ">
                <h2> سعر الحجز</h2>
                <p>{price}</p>
              </div>
            </div>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <div className="text-[#6133BE] mb-3 text-3xl flex justify-center">
            {/* <FaPen className="cursor-pointer"/> */}
            <EditBookingModal book={book}/>
          </div>

          {status == "قيد الانتظار" && (
            <div className="flex flex-row justify-around items-center">
              {/* <IconButton onClick={handleOpen} color="red" className="rounded-full">
                <FaXmark className="text-xl" />
              </IconButton> */}
              <DeclineBookingModal book={book}/>
              <ConfirmBookingModal book={book} />
              
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookingCard;
