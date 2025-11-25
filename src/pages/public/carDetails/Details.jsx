import { TbAirConditioningDisabled, TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdEventSeat } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getCarById } from "../../../Services/dataService";
import { useQuery } from "@tanstack/react-query";
const CarDetails = () => {
  const [mainImage, setMainImage] = useState("/defaultcar.png");
  const [carImages, setCarImages] = useState(["/1.png", "/2.png", "/3.png"]);
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["car", id],
    queryFn: async () => await getCarById(id),
    keepPreviousData: true,
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    throw new Response("لم يتم ايجاد هذه السيارة", { status: 404 });
  }
  const { price, brand, transmission, hasAirConditioner } = data;

  const switchimage = (img) => {
    const newImages = carImages.map((image) =>
      image === img ? mainImage : image
    );
    setCarImages(newImages);
    setMainImage(img);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start mx-auto mt-5">
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
        <h1 className="font-bold text-2xl text-center lg:text-left">{brand}</h1>
        <h2 className="text-lg">
          <span className="text-[#5937E0] font-bold text-xl">${price}</span>
          /day
        </h2>

        <img src={mainImage} className="w-80 md:w-96 rounded-lg" alt="car" />

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {carImages.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-20 h-16 rounded-md cursor-pointer border-2 transition-all hover:scale-105"
              onClick={() => switchimage(img)}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center">
        <h1 className="font-bold text-2xl mb-2">المواصفات الفنية</h1>

        <div className="flex flex-wrap gap-10 justify-center">
          <div className="spec-box flex flex-col items-center">
            <TbManualGearbox className="spec-icon mx-auto" />
            <h1 className="font-bold">صندوق التروس</h1>
            <h2>{transmission}</h2>
          </div>
          <div className="spec-box flex flex-col items-center">
            <BsFillFuelPumpFill className="spec-icon mx-auto" />
            <h1 className="font-bold">الوقود</h1>
            <h2>بنزين</h2>
          </div>
          <div className="spec-box flex flex-col items-center">
            <GiCarDoor className="spec-icon mx-auto" />
            <h1 className="font-bold">الأبواب</h1>
            <h2>2</h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center mt-4">
          <div className="spec-box flex flex-col items-center">
            <TbAirConditioningDisabled className="spec-icon mx-auto" />
            <h1 className="font-bold">مكيف الهواء</h1>
            <h2>{hasAirConditioner ? "نعم" : "لا"}</h2>
          </div>
          <div className="spec-box flex flex-col items-center">
            <MdEventSeat className="spec-icon mx-auto" />
            <h1 className="font-bold">المقاعد</h1>
            <h2>5</h2>
          </div>
        </div>

        <div className="spec-box flex flex-col items-center">
          <RiPinDistanceLine className="spec-icon mx-auto" />
          <h1 className="font-bold">المسافة</h1>
          <h2>500 كم</h2>
        </div>

        <div className="flex justify-center  lg:justify-start  w-full mt-2">
          <button className="bg-[#5937E0] text-white rounded-md w-40 h-10 hover:bg-[#452cb8] transition-all">
            احجز سيارة
          </button>
        </div>

        <h1 className="font-bold text-2xl mt-8">معدات السيارة</h1>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 text-right">
          <div className="flex flex-col gap-2">
            <div className="equip-item flex items-center gap-2">
              <FaCheckCircle className="text-[#5937E0]" />
              <h1>ABS</h1>
            </div>
            <div className="equip-item flex items-center gap-2">
              <FaCheckCircle className="text-[#5937E0]" />
              <h1>أكياس الهواء</h1>
            </div>
            <div className="equip-item flex items-center gap-2">
              <FaCheckCircle className="text-[#5937E0]" />
              <h1>التحكم في السرعة</h1>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="equip-item flex items-center gap-2">
              <FaCheckCircle className="text-[#5937E0]" />
              <h1>الفرامل المانعة للانغلاق</h1>
            </div>
            <div className="equip-item flex items-center gap-2">
              <FaCheckCircle className="text-[#5937E0]" />
              <h1>أكياس الهواء</h1>
            </div>
            <div className="equip-item flex items-center gap-2">
              <FaCheckCircle className="text-[#5937E0]" />
              <h1>مكيف الهواء</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
