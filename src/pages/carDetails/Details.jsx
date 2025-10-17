import { TbAirConditioningDisabled, TbManualGearbox } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdEventSeat } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import CarCard from "../../components/carCard/CarCard";

const CarDetails = () => {
  return (
    <div >
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
          <h1 className="font-bold text-2xl text-center lg:text-left">BMW</h1>
          <h2 className="text-lg">
            <span className="text-[#5937E0] font-bold text-xl">$25</span>/day
          </h2>

          <img
            src="/defaultcar.png"
            className="w-80 md:w-96 rounded-lg"
            alt="car"
          />

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <img src="/1.png" className="w-20 h-16 rounded-md" />
            <img src="/2.png" className="w-20 h-16 rounded-md" />
            <img src="/3.png" className="w-20 h-16 rounded-md" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center">
          <h1 className="font-bold text-2xl">المواصفات الفنية</h1>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="spec-box flex flex-col items-center">
              <TbManualGearbox className="spec-icon mx-auto" />
              <h1 className="font-bold">صندوق التروس</h1>
              <h2>آلي</h2>
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

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <div className="spec-box flex flex-col items-center">
              <TbAirConditioningDisabled className="spec-icon mx-auto" />
              <h1 className="font-bold">مكيف الهواء</h1>
              <h2>نعم</h2>
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

          <div className="flex justify-center  md:justify-start  w-full mt-2">
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

      <div className="text-center mt-20">
        <h1 className="font-bold text-3xl mb-10">العربيات الأخرى</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
