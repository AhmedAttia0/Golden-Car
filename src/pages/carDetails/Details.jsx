import { TbAirConditioningDisabled, TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdEventSeat } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import CarCard from "../../components/carCard/CarCard";
const CarDetails = () => {
  return (
    <div>
      <div className="flex ">
        <div className="w-1/2 flex flex-col justify-items-center items-center m-auto ">
          <h1 className="font-bold text-2xl">BMW</h1>
          <h2 className="">
            <span className="text-[#5937E0] font-bold text-xl">$25</span>/day
          </h2>
          <img src="/defaultcar.png" className="w-80" />
          <div className="flex w-1/3 justify-center  gap-3 ">
            <img
              src="/1.png"
              className="w-20 h-16 rounded-md"
            />
            <img
              src="/2.png"
              className="w-20 h-16 rounded-md"
            />
            <img
              src="/3.png"
              className="w-20 h-16 rounded-md"
            />
          </div>
        </div>

        <div className=" w-1/2 flex flex-col items-start gap-5">
          <div className="flex justify-start w-full">
            <h1 className="font-bold text-2xl">المواصفات الفنية</h1>
          </div>
          <div className=" flex gap-6">
            <div className="w-40 h-20  bg-div-lightgray ">
              <h1>
                <TbManualGearbox />
              </h1>
              <h1 className="font-bold">صندوق التروس</h1>
              <h2>آلي</h2>
            </div>
            <div className="w-40 h-20  bg-div-lightgray">
              <h1>
                <BsFillFuelPumpFill />
              </h1>
              <h1 className="font-bold">وقود </h1>
              <h2>بنزين</h2>
            </div>
            <div className="w-40 h-20  bg-div-lightgray">
              <h1>
                <GiCarDoor />
              </h1>
              <h1 className="font-bold">أبواب</h1>
              <h2>2</h2>
            </div>
          </div>
          <div className=" flex gap-6">
            <div className="w-40 h-20  bg-div-lightgray ">
              <h1>
                <TbAirConditioningDisabled />
              </h1>
              <h1 className="font-bold">مكيف الهواء</h1>
              <h2>نعم</h2>
            </div>
            <div className="w-40 h-20  bg-div-lightgray">
              <h1>
                <MdEventSeat />
              </h1>
              <h1 className="font-bold">المقاعد</h1>
              <h2>5</h2>
            </div>
            <div className="w-40 h-20  bg-div-lightgray">
              <h1>
                <RiPinDistanceLine />
              </h1>
              <h1 className="font-bold">المسافة</h1>
              <h2>500</h2>
            </div>
          </div>
          <div className="flex justify-startw-8/12">
            <button className="bg-div-purple text-white rounded-md w-40 h-9">
              احجز سيارة
            </button>
          </div>

          <div className="flex justify-start w-full">
            <h1 className="font-bold text-2xl">معدات السيارة </h1>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col ">
              <div className="flex justify-start gap-1 ">
                <FaCheckCircle className="text-div-purple justify-center items-center" />

                <h1>ABS</h1>
              </div>
              <div className="flex justify-start gap-1 ">
                <FaCheckCircle className="text-div-purple justify-center items-center" />

                <h1>أكياس الهواء</h1>
              </div>
              <div className="flex justify-start gap-1 ">
                <FaCheckCircle className="text-div-purple justify-center items-center" />

                <h1>التحكم في السرعة</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-start gap-1 ">
                <FaCheckCircle className="text-div-purple justify-center items-center" />

                <h1>ABS</h1>
              </div>
              <div className="flex justify-start gap-1 ">
                <FaCheckCircle className="text-div-purple justify-center items-center" />

                <h1>أكياس الهواء</h1>
              </div>
              <div className="flex justify-start gap-1 ">
                <FaCheckCircle className="text-div-purple justify-center items-center" />

                <h1>مكيف الهواء</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-28">
        <h1 className="font-bold text-3xl"> العربيات الاخري</h1>
      </div>
      <div className="flex gap-6 justify-center mt-10">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      <div className="flex gap-6 justify-center mt-10">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      <div className="flex ">
        
      </div>
    </div>
  );
};

export default CarDetails;
