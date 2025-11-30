import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import CarsList from "../../pages/public/cars/CarsList";

const CarsHome = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-row justify-between">
        <h3 className="text-3xl	font-bold">اختار السيارة التي تناسبك</h3>
        <Link to="/cars">
          <div className="flex flex-row gap-1 mt-3 ml-5">
            <p className="text-xs	text-blue-800 font-bold">عرض الجميع</p>
            <BiSolidLeftArrow />
          </div>
        </Link>
      </div>
      <div className="px-4">
        <CarsList limit={3} disableInfinite={true} />
      </div>
    </div>
  );
};

export default CarsHome;
