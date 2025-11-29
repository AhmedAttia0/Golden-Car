import { TbAirConditioningDisabled, TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdEventSeat } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { getCarById } from "../../../Services/dataService";
import { useQuery } from "@tanstack/react-query";
import { FaCircleXmark } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import CarsList from "../cars/CarsList";
import BookingForm from "../../../components/bookingForm/BookingForm";

const mainFeatures = [
  "ABS",
  "مكيف هواء",
  "الفرامل المانعة للانغلاق",
  "وسائد هوائية",
  "التحكم في السرعة",
  "حساسات ركن",
];
const CarDetails = () => {
  const navigate = useNavigate();
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
  const {
    price,
    model,
    brand,
    transmission,
    hasAirConditioner,
    features,
    status,
    year,
    type,
  } = data;

  const switchimage = (img) => {
    const newImages = carImages.map((image) =>
      image === img ? mainImage : image
    );
    setCarImages(newImages);
    setMainImage(img);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start mx-auto mt-5">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <Link
            className="flex gap-1 items-center  text-[#5937E0] font-bold my-4 hover:text-[#FF9E0C] transition-all duration-300 ease-in-out"
            onClick={() => navigate(-1)}
          >
            <FaArrowRight /> <span>العودة لصفحة السابقة</span>
          </Link>
          <h1 className="font-bold text-2xl text-center lg:text-left">
            {brand}
          </h1>
          <h2 className="text-lg">
            <span className="text-[#4e4e4e] font-bold text-xl">${price}</span>
            /يوم
          </h2>

          <img
            src={mainImage}
            className="w-80 md:w-96 rounded-lg my-4"
            alt="car"
          />

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
            <BookingForm
              carId={id}
              price={price}
              brand={brand}
              type={type}
              year={year}
              model={model}
              status={status}
            />
          </div>

          <h1 className="font-bold text-2xl mt-8">معدات السيارة</h1>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 text-right">
            <div className="flex flex-col gap-2">
              {mainFeatures.slice(0, 3).map((feature, index) => (
                <div className="equip-item flex items-center gap-2" key={index}>
                  {features?.includes(feature) ? (
                    <FaCheckCircle className="text-[#5937E0] text-lg" />
                  ) : (
                    <FaCircleXmark className="text-[#d10000] text-lg" />
                  )}
                  <span className="text-center">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {mainFeatures.slice(3).map((feature, index) => (
                <div className="equip-item flex items-center gap-2" key={index}>
                  {features?.includes(feature) ? (
                    <FaCheckCircle className="text-[#5937E0] text-lg" />
                  ) : (
                    <FaCircleXmark className="text-[#d10000] text-lg" />
                  )}
                  <span className="text-center">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center mt-10">
        تصفح سيارات مشابه
      </h3>
      <div className="px-4">
        <CarsList activeCarId={id} limit={3} />
      </div>
    </>
  );
};

export default CarDetails;
