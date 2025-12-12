import React, { useState, useEffect, useRef } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
} from "@material-tailwind/react";
import Features from "./Features";
import Dropdown from "../../../components/Dropdown";
import { HiMiniXMark } from "react-icons/hi2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AddCar, UpdateCar } from "../../../Services/dataService";
const TransmisionOptions = ["اوتوماتيكي", "يدوي"];
const fuelTypeOptions = ["بنزين", "ديزل", "كهرباء", "هجين"];
const carStatusOptions = ["متاحة", "محجوزة", "صيانة"];
const carTypeOptions = ["suv", "sedan", "cabriolet", "pickup", "minivan"];

export default function CreateOrEditCarModal({ car }) {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    seats: "",
    doors: "",
    transmission: "اوتوماتيكي",
    fuelType: "بنزين",
    status: "متاحة",
    type: "suv",
    features: [],
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, formData }) =>
      car ? UpdateCar({ id, formData }) : AddCar(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
      console.log("Done");
    },
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
        seats: car.seats || "",
        doors: car.doors || "",
        mileage: car.mileage || "",
        status: car.status || "",
        type: car.type || "",
        images: car.images || "",
        features: car?.features || [],
      });
    }
  }, [car]);

  const handleOpen = () => setOpen(!open);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    if (car) {
      mutation.mutate({ id: car.id, formData }); // UPDATE
    } else {
      mutation.mutate(formData); // ADD
    }

    handleOpen();
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.brand.trim()) {
      newErrors.brand = "اسم السيارة مطلوب";
    } else if (formData.brand.length < 2) {
      newErrors.brand = "اسم السيارة يجب أن يكون 2 حروف على الأقل";
    }

    if (!formData.model.trim()) {
      newErrors.model = "الموديل مطلوب";
    }

    if (!formData.year) {
      newErrors.year = "السنة مطلوبة";
    } else if (
      Number(formData.year) < 1990 ||
      Number(formData.year) > new Date().getFullYear()
    ) {
      newErrors.year = "السنة غير صالحة";
    }

    if (!formData.price) {
      newErrors.price = "السعر مطلوب";
    } else if (Number(formData.price) <= 0) {
      newErrors.price = "السعر يجب أن يكون أكبر من صفر";
    }
    if (!formData.mileage) {
      newErrors.mileage = "المسافة مطلوبة";
    }
    if (!formData.seats) {
      newErrors.seats = "عدد المقاعد مطلوب";
    }
    if (!formData.doors) {
      newErrors.doors = "عدد الابواب مطلوب";
    }
    if (!formData.transmission) {
      newErrors.transmission = "نوع الفتيس مطلوب";
    }

    if (!formData.fuelType) {
      newErrors.fuelType = "نوع الوقود مطلوب";
    }

    if (!formData.status) {
      newErrors.status = "حالة السيارة مطلوبة";
    }

    if (!formData.type) {
      newErrors.type = "نوع السيارة مطلوب";
    }

    if (!car) {
      // فقط في حالة إضافة سيارة جديدة
      if (
        !formData.images ||
        formData.images.length < 1 ||
        formData.images.length > 4
      ) {
        newErrors.images = "يجب رفع على الأقل صورة واحدة وبحد أقصى 4 صور";
      } else {
        const invalidFiles = formData.images.filter(
          (file) => !file?.type?.startsWith("image/")
        );
        if (invalidFiles.length > 0) {
          newErrors.images = "جميع الملفات يجب أن تكون صور";
        }
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
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
        size="md"
        open={open}
        handler={handleOpen}
        className="p-3 bg-[#0f1729] max-h-[95vh] overflow-y-auto"
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
          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-full md:w-[50%]">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                اسم البرند
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Toyota"
                value={formData.brand}
                onChange={(e) => handleChange("brand", e.target.value)}
                className="placeholder:opacity-50 focus:!border-t-gray-900 text-white"
              />
              {errors.brand && (
                <p className="text-red-500 text-sm mt-1">{errors.brand}</p>
              )}
            </div>
            <div className="w-full md:w-[50%]">
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
                className="placeholder:opacity-50 focus:!border-t-gray-900 text-white"
              />
              {errors.model && (
                <p className="text-red-500 text-sm mt-1">{errors.model}</p>
              )}
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-full md:w-[50%]">
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
                className="placeholder:opacity-50 focus:!border-t-gray-900 text-white"
              />
              {errors.year && (
                <p className="text-red-500 text-sm mt-1">{errors.year}</p>
              )}
            </div>
            <div className="w-full md:w-[50%]">
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
                className="placeholder:opacity-50 focus:!border-t-gray-900 text-white"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="w-full md:w-[50%] relative">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                نوع الفتيس
              </Typography>
              <Dropdown
                options={TransmisionOptions}
                borderColor="white"
                value={formData.transmission}
                onChange={(value) => handleChange("transmission", value)}
              />
            </div>
            <div className="w-full md:w-[50%] relative">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                نوع الوقود
              </Typography>
              <Dropdown
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
            <Dropdown
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
            <Dropdown
              options={carTypeOptions}
              borderColor="white"
              value={formData.type}
              onChange={(value) => handleChange("type", value)}
            />
          </div>
          <div className="flex lg:flex-row flex-col gap-4">
            <div className="w-full  lg:w-[33%]">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                عدد المقاعد
              </Typography>
              <Input
                color="gray"
                type="number"
                size="sm"
                placeholder="4"
                value={formData.seats}
                onChange={(e) => handleChange("seats", e.target.value)}
                className="placeholder:opacity-50 focus:!border-t-gray-900 text-white"
              />
              {errors.seats && (
                <p className="text-red-500 text-sm mt-1">{errors.seats}</p>
              )}
            </div>
            <div className="w-full  lg:w-[33%]">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                عدد الابواب
              </Typography>
              <Input
                color="gray"
                type="number"
                size="sm"
                placeholder="2"
                value={formData.doors}
                onChange={(e) => handleChange("doors", e.target.value)}
                className="placeholder:opacity-50 focus:!border-t-gray-900 text-white"
              />
              {errors.doors && (
                <p className="text-red-500 text-sm mt-1">{errors.doors}</p>
              )}
            </div>
            <div className="w-full lg:w-[33%]">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                المسافة
              </Typography>
              <Input
                color="gray"
                type="number"
                size="sm"
                placeholder="2"
                value={formData.mileage}
                onChange={(e) => handleChange("mileage", e.target.value)}
                className="placeholder:opacity-50 focus:!border-t-gray-900 text-white"
              />
              {errors.mileage && (
                <p className="text-red-500 text-sm mt-1">{errors.mileage}</p>
              )}
            </div>
          </div>
          {!car && (
            <div>
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-medium"
              >
                صور السيارة
              </Typography>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files);

                  // تحقق من العدد
                  if (files.length < 1 || files.length > 4) {
                    setErrors((prev) => ({
                      ...prev,
                      images: "يجب رفع على الأقل صورة واحدة وبحد أقصى 4 صور",
                    }));
                  } else {
                    setErrors((prev) => ({ ...prev, images: "" }));
                    handleChange("images", files); // حفظ الملفات في formData
                  }
                }}
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
              />

              {errors.images && (
                <p className="text-red-500 text-sm mt-1">{errors.images}</p>
              )}
            </div>
          )}

          <div>
            <Features formData={formData} setFormData={setFormData} />
          </div>
        </DialogBody>

        <div className="mb-4 md:my-3 flex justify-end">
          <Button
            onClick={handleOpen}
            className="bg-transparent border border-[#5937E0] ml-2"
          >
            الغاء
          </Button>
          <Button onClick={handleSubmit} className="bg-[#5937E0]">
            {car ? "تحديث السيارة" : "اضف السيارة"}
          </Button>
        </div>
      </Dialog>
    </>
  );
}
