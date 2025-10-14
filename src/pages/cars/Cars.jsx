import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import CarCard from "../../components/carCard/CarCard";
import { TbCarSuv } from "react-icons/tb";

const Cars = ({ carsList }) => {
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  return (
    <div>
      <h2 className="font-bold text-4xl text-center mt-[3.5rem]">
        اختار سيارتك
      </h2>
      <div className="flex gap-5 flex-wrap justify-center my-6">
        <Button
          className="bg-[#5937E0] text-md flex rounded-2xl text-white hover:bg-[#5937E0] hover:text-white normal-case
shadow-none"
        >
          كل السيارات
        </Button>
        <Button className="rounded-2xl flex gap-1 font-medium items-center text-md bg-white hover:bg-[#5937E0] hover:text-white normal-case  text-black text shadow-none">
          Sedan
          <IoCarSportOutline className="text-xl" />
        </Button>
        <Button className="rounded-2xl flex gap-1 font-medium items-center text-md bg-white hover:bg-[#5937E0] hover:text-white normal-case  text-black text shadow-none">
          Cabriolet
          <IoCarSportOutline className="text-xl" />
        </Button>
        <Button className="rounded-2xl flex gap-1 font-medium items-center text-md bg-white hover:bg-[#5937E0] hover:text-white normal-case  text-black text shadow-none">
          Pickup
          <LiaTruckPickupSolid className="text-xl" />
        </Button>
        <Button className="rounded-2xl flex gap-1 font-medium items-center text-md bg-white hover:bg-[#5937E0] hover:text-white normal-case  text-black text shadow-none">
          Suv
          <TbCarSuv className="text-xl" />
        </Button>
        <Button className="rounded-2xl flex gap-1 font-medium items-center text-md bg-white hover:bg-[#5937E0] hover:text-white normal-case  text-black text shadow-none">
          Minivan
          <IoCarSportOutline className="text-xl" />
        </Button>
      </div>
      <main className="container mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {carsList.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Cars;

// import Filter from "../../components/Filter/Filter";
// import CarCard from "../../components/carCard/CarCard";
/*  fillter and cards
<div className="md:hidden flex justify-center my-4 px-4">
        <button
          onClick={() => setShowFilterMobile((s) => !s)}
          className="bg-div-purple text-white px-4 py-2 rounded-lg shadow"
        >
          تصفية
        </button>
      </div>
      {showFilterMobile && (
        <div className="md:hidden px-4 mb-4">
          <Filter />
        </div>
      )}
<div className="flex flex-col md:flex-row gap-6 m-5">
        <aside className="hidden md:block md:shrink-0 md:w-72">
          <Filter />
        </aside>
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {carsList.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </main>
      </div> 
*/
