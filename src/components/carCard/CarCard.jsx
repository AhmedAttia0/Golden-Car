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

const CarCard = ({
  id,
  price = 25,
  name = "Mercedes",
  Category = "رياضية",
  Transmission = "اوتوماتيكي",
  hasAirConditioner = false,
}) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 mt-20 flex justify-center">
      <Card className="group shadow-lg rounded-xl w-full max-w-sm transition-all hover:shadow-[0_8px_30px_rgba(89,55,224,0.22),0_2px_8px_rgba(89,55,224,0.06)] hover:ring-1 hover:ring-[#5937E0]/20">
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
              <h1 className="font-bold text-xl transition-colors group-hover:text-[#5937E0]">
                {name}
              </h1>
              <h3 className="justify-end">{Category}</h3>
            </div>
          </div>

          <div className="flex gap-5 mt-6">
            <div className="flex gap-1 items-center">
              <TbManualGearbox className="text-[#5937E0]" />
              <h1 className="font-bold text-lg">{Transmission}</h1>
            </div>
            <div className="flex gap-1 items-center">
              <BsFillFuelPumpFill className="text-[#5937E0]" />
              <h1 className="font-bold text-lg">pb-95</h1>
            </div>
            <div className="flex gap-1 items-center">
              <FaSnowflake className="text-[#5937E0]" />
              <h1
                className={`font-bold text-lg ${
                  !hasAirConditioner && "line-through"
                }`}
              >
                مكيف هواء
              </h1>
            </div>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-div-purple text-white shadow-none hover:scale-105 transition-all"
            onClick={() => {
              navigate(`/cars/${id}`);
              setTimeout(
                () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
                50
              );
            }}
          >
            عرض التفاصيل
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CarCard;
