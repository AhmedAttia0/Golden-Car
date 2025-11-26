import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { HiMiniXMark } from "react-icons/hi2";
import { CarDropdown } from "./Filterations";
import { HiOutlinePencilAlt } from "react-icons/hi";
const TransmisionOptions = ["اوتوماتيكي", "يدوي"];
const fuelTypeOptions = ["بنزين", "ديزل", "كهرباء", "هجين"];
const carStatusOptions = ["متاحة", "محجوزة", "صيانة"];
const carTypeOptions = ["suv", "sedan", "cabriolet", "pickup", "minivan"];

export default function CreateOrEditCarModal({ onSubmit, car }) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    transmission: "",
    fuelType: "",
    status: "",
    type: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (car) {
      setFormData({
        brand: car.brand || "",
        model: car.model || "",
        year: car.year || "",
        price: car.price || "",
        transmission: car.transmission || "",
        fuelType: car.fuelType || "",
        status: car.status || "",
        type: car.type || "",
        imageUrl: car.imageUrl || "",
      });
    }
  }, [car]);

  const handleOpen = () => setOpen(!open);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    handleOpen();
  };

  return (
    <>
      {car ? (
        <Button
          size="sm"
          className="bg-transparent border  border-[#4e4e4e] hover:scale-[1.05] transition-all"
          onClick={handleOpen}
        >
          {" "}
          <HiOutlinePencilAlt className={`text-lg "text-white"`} />
        </Button>
      ) : (
        <button
          onClick={handleOpen}
          className="bg-[#5937e0] text-white px-4 py-2 rounded-lg hover:bg-[#6a4ae9] transition-all w-[98%] md:w-[48%] lg:w-[200px]"
        >
          + اضف سيارة جديدة
        </button>
      )}

      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="p-4 bg-[#0f1729]"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="white">
            {car ? "تعديل السيارة" : "اضف سيارة جديدة"}
          </Typography>
          <Typography className="mt-1 font-normal text-gray-500">
            املى بيانات السيارة
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute left-3.5 top-3.5"
            onClick={handleOpen}
          >
            <HiMiniXMark color="white" className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                اسم السيارة
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Toyota"
                value={formData.brand}
                onChange={(e) => handleChange("brand", e.target.value)}
                className="placeholder:opacity-100 focus:!border-t-gray-900 text-white"
              />
            </div>
            <div className="w-[50%]">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                الموديل
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Corolla"
                value={formData.model}
                onChange={(e) => handleChange("model", e.target.value)}
                className="placeholder:opacity-100 focus:!border-t-gray-900 text-white"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-[50%]">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                السنة
              </Typography>
              <Input
                color="gray"
                type="number"
                size="lg"
                placeholder="2021"
                value={formData.year}
                onChange={(e) => handleChange("year", e.target.value)}
                className="placeholder:opacity-100 focus:!border-t-gray-900 text-white"
              />
            </div>
            <div className="w-[50%]">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                السعر/يوم${" "}
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="120"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                className="placeholder:opacity-100 focus:!border-t-gray-900 text-white"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-[50%] relative">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                نوع الفتيس
              </Typography>
              <CarDropdown
                options={TransmisionOptions}
                borderColor="white"
                value={formData.transmission}
                onChange={(value) => handleChange("transmission", value)}
              />
            </div>
            <div className="w-[50%] relative">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                نوع الوقود
              </Typography>
              <CarDropdown
                options={fuelTypeOptions}
                borderColor="white"
                value={formData.fuelType}
                onChange={(value) => handleChange("fuelType", value)}
              />
            </div>
          </div>

          <div className="w-full relative">
            <Typography
              variant="small"
              color="white"
              className="mb-2 font-medium"
            >
              حالة السيارة
            </Typography>
            <CarDropdown
              options={carStatusOptions}
              borderColor="white"
              value={formData.status}
              onChange={(value) => handleChange("status", value)}
            />
          </div>

          <div className="w-full relative">
            <Typography
              variant="small"
              color="white"
              className="mb-2 font-medium"
            >
              نوع السيارة
            </Typography>
            <CarDropdown
              options={carTypeOptions}
              borderColor="white"
              value={formData.type}
              onChange={(value) => handleChange("type", value)}
            />
          </div>

          <div>
            <Typography
              variant="small"
              color="white"
              className="mb-2 font-medium"
            >
              URL الصور
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="https://example.com/image.jpg"
              value={formData.imageUrl}
              onChange={(e) => handleChange("imageUrl", e.target.value)}
            />
          </div>
        </DialogBody>

        <DialogFooter>
          <Button
            onClick={handleOpen}
            className="bg-transparent border border-[#5937E0] ml-2"
          >
            الغاء
          </Button>
          <Button onClick={handleSubmit} className="bg-[#5937E0]">
            {car ? "تحديث السيارة" : "اضف السيارة"}
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
