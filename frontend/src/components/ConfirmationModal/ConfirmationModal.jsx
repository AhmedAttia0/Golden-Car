import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ConfirmationModal({ itemName, onDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        size="sm"
        onClick={handleOpen}
        className="bg-transparent border border-[#4e4e4e] hover:scale-[1.05] transition-all"
      >
        {" "}
        <RiDeleteBin6Line className={`text-lg "text-white" `} />
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        size="sm"
        className="bg-[#0f1729] rounded-xl"
      >
        <DialogHeader className="text-white">هل انت متاكد؟</DialogHeader>
        <DialogBody className="text-gray-400">
          سيؤدي هذا إلى حذف {itemName} نهائيًا من قاعدة بياناتك. لا يمكن التراجع
          عن هذا الإجراء.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="white"
            onClick={handleOpen}
            className="ml-2 border border-[#5937E0]"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>DELETE</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
