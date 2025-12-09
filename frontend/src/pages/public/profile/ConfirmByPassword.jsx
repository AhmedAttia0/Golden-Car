import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

export default function ConfirmByPassword() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <div className="flex justify-end items-end">
        <button
          onClick={handleOpen}
          className="bg-purple text-white py-2 px-4 rounded-lg"
        >
          حفظ التغييرات
        </button>
      </div>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              هل انت متاكد من حفظ التغييرات؟
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              ادخل كلمة السر الخاصة بك للتاكيد
            </Typography>

            <Input label="كلمة السر" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleOpen} fullWidth className="bg-purple">
              تاكيد
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
