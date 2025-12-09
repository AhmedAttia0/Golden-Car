import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { FaSnowflake } from "react-icons/fa";
import { Chip } from "@material-tailwind/react";
const statusColor = {
  متاحة: "green",
  "تحت الصيانة": "amber",
};
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import EditCarModal from "../../pages/admin/CarsManagement/CreateOrEditCarModal";
const CarCard = ({ active, Editable = false, dark = false, car = {} }) => {
  const navigate = useNavigate();
  const {
    id,
    price = 25,
    brand = "Mercedes",
    type = "رياضية",
    transmission = "اوتوماتيكي",
    hasAirConditioner = false,
    status = "متاحة",
  } = car;
  return (
    <div className="flex justify-center">
      <Card
        className={`group relative ${
          dark ? "bg-[#14151a] text-white" : "bg-white text-black"
        } shadow-lg rounded-xl my-10 w-full max-w-sm transition-all  hover:shadow-[0_8px_30px_rgba(89,55,224,0.22),0_2px_8px_rgba(89,55,224,0.06)] hover:ring-1 hover:ring-[#5937E0]/20 ${
          active
            ? "ring-2 ring-[#5937E0]/30 shadow-[0_8px_30px_rgba(89,55,224,0.22),0_2px_8px_rgba(89,55,224,0.06)] "
            : ""
        }`}
      >
        <Chip
          className={`absolute top-6 right-6 z-10`}
          color={statusColor[status]}
          value={status}
          size="md"
        ></Chip>
        <CardHeader
          shadow={false}
          floated={false}
          className="h-56 overflow-hidden rounded-t-xl"
        >
          <img
            src="/defaultcar.png"
            alt="card-image"
            className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </CardHeader>

        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <h2>
              <span className="text-[#5937E0] font-bold text-xl">${price}</span>
              /اليوم
            </h2>
            <div className="flex flex-col items-end">
              <h1
                className={`font-bold text-xl 
               transition-colors group-hover:text-[#5937E0]`}
              >
                {brand}
              </h1>
              <h3 className={`justify-end`}>{type}</h3>
            </div>
          </div>

          <div className="flex justify-between gap-5 mt-6">
            <div className="flex flex-col lg:flex-row  gap-1 items-center">
              <TbManualGearbox className="text-[#5937E0] justify-center" />
              <h1 className="font-bold text-lg">{transmission}</h1>
            </div>
            <div className="flex flex-col lg:flex-row self-center gap-1 items-center">
              <BsFillFuelPumpFill className="text-[#5937E0]" />
              <h1 className="font-bold text-lg">pb-95</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-1 items-center">
              <FaSnowflake className="text-[#5937E0]" />
              <h1
                className={`font-bold text-lg  ${
                  !hasAirConditioner && "line-through"
                }`}
              >
                مكيف هواء
              </h1>
            </div>
          </div>
        </CardBody>

        <CardFooter className="pt-0 flex gap-3">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-div-purple text-white shadow-none bg-purple hover:scale-[1.02] ml-1 transition-all"
            onClick={() => {
              navigate(`/cars/${id}`);
            }}
          >
            عرض التفاصيل
          </Button>
          {Editable && (
            <div className="flex gap-3">
              <EditCarModal car={car} />
              <ConfirmationModal itemName={`سيارة ${brand}`} />
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CarCard;
