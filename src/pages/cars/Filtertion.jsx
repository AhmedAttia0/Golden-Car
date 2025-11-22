import { Button } from "@material-tailwind/react";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { IoCarSportOutline } from "react-icons/io5";
import { TbCarSuv } from "react-icons/tb";

const carCategories = [
  {
    key: "all",
    label: "كل السيارات",
    icon: null,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "sedan",
    label: "Sedan",
    icon: IoCarSportOutline,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "cabriolet",
    label: "Cabriolet",
    icon: IoCarSportOutline,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "pickup",
    label: "Pickup",
    icon: LiaTruckPickupSolid,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "suv",
    label: "Suv",
    icon: TbCarSuv,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
  {
    key: "minivan",
    label: "Minivan",
    icon: IoCarSportOutline,
    activeStyle: "bg-[#5937E0] text-white",
    defaultStyle: "bg-white text-black",
  },
];
export default function Filteration({
  onFilter,
  activeFilter,
  filterKey = "category",
}) {
  return (
    <div className="flex gap-5 flex-wrap justify-center my-6">
      {carCategories.map((category) => {
        const isActive = activeFilter === category.key;
        const activeClass = isActive
          ? category.activeStyle
          : category.defaultStyle;
        const baseClass =
          "rounded-2xl flex gap-1 font-medium items-center text-md normal-case shadow-none " +
          "hover:bg-[#5937E0] hover:text-white";

        const finalClass = `${baseClass} ${activeClass} ${
          category.key === "all" ? "px-4 py-2" : "px-2 sm:px-4"
        }`;

        const IconComponent = category.icon;

        return (
          <Button
            key={category.key}
            onClick={() => onFilter(filterKey, category.key)}
            className={finalClass}
          >
            {category.label}

            {IconComponent && <IconComponent className="text-xl" />}
          </Button>
        );
      })}
    </div>
  );
}

// import Filter from "../../components/Filter/Filter";
// import CarCard from "../../components/carCard/CarCard";
// const [showFilterMobile, setShowFilterMobile] = useState(false);
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
