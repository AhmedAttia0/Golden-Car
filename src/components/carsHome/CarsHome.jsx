import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import CarCard from "../carCard/CarCard";

const CarsHome = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-row justify-between">
        <h3 className="text-3xl	font-bold">اختار السيارة التي تناسبك</h3>
        <Link to="/cars">
          <div className="flex flex-row gap-1">
            <p className="text-xs	">عرض الجميع</p>
            <BiSolidLeftArrow />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="">
          <CarCard />
        </div>
        <div className="">
          <CarCard />
        </div>
        <div className="">
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default CarsHome;
