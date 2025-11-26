import { FaCar } from "react-icons/fa";
import { BsPersonHeart } from "react-icons/bs";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { RxTimer } from "react-icons/rx";

const NombersHome = () => {
  return (
    <div className="text-white bg-[#5937E0] flex flex-col justify-between items-center gap-11 p-11 rounded-2xl">
      <div className=" flex flex-col items-center gap-3">
        <h3 className="text-4xl font-bold">الحقائق في الأرقام</h3>
        <p className="text-sm font-thin">
          رحلة طويلة من الإنجازات بنلخصها لكم في مجموعة من الحقائق الموثوقة
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:flex lg:flex-row lg:justify-around text-black lg:items-center">
        <div className="bg-white p-3 rounded-xl flex flex-row items-center gap-2">
          <div>
            <FaCar className="text-white bg-[#FF9E0C] rounded-md text-5xl p-2" />
          </div>
          <div className="flex flex-col gap-0 ">
            <h4 className="text-xl font-bold">15+</h4>
            <p className="text-xs">سيارة</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl flex flex-row items-center gap-2">
          <div>
            <BsPersonHeart className="text-white bg-[#FF9E0C] rounded-md text-5xl p-2" />
          </div>
          <div className="flex flex-col gap-0">
            <h4 className="text-xl font-bold">10K</h4>
            <p className="text-xs">عميل</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl flex flex-row items-center gap-2">
          <div>
            <BsFillCalendar2CheckFill className="text-white bg-[#FF9E0C] rounded-md text-5xl p-2" />
          </div>
          <div className="flex flex-col gap-0 ">
            <h4 className="text-xl font-bold">5+</h4>
            <p className="text-xs">سنوات</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl flex flex-row items-center gap-2">
          <div>
            <RxTimer className="text-white bg-[#FF9E0C] rounded-md text-5xl p-2" />
          </div>
          <div className="flex flex-col gap-0 ">
            <h4 className="text-xl font-bold">5m+</h4>
            <p className="text-xs">ميل</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NombersHome;
