import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const DeclineBookingModal = ({ book }) => {
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <IconButton onClick={handleOpen} color="red" className="rounded-full">
        <FaXmark className="text-xl" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>الغاء الحجز</DialogHeader>
        <DialogBody className="w-[75%]">
          {" "}
          هل أنت متأكد أنك تريد الغاء الحجز رقم {bookNO} للعميل {customerName}{" "}
          للسيارة {Car}؟
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="green" onClick={handleOpen}>
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
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DeclineBookingModal;
