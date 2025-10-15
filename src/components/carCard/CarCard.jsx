import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { FaSnowflake } from "react-icons/fa";

const CarCard = () => {
  return (
    <div className="container mx-auto px-4 mt-20 flex justify-center">
      <Card className="w-80 shadow-md rounded-xl">
        <CardHeader shadow={false} floated={false} className="h-56">
          <img
            src="/defaultcar.png"
            alt="car"
            className="h-full w-full object-cover rounded-t-xl"
          />
        </CardHeader>

        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <h2>
              <span className="text-[#5937E0] font-bold text-xl">$25</span>/اليوم
            </h2>
            <div className="flex flex-col items-end">
              <h1 className="font-bold text-xl">Mercedes</h1>
              <h3>sedan</h3>
            </div>
          </div>

          <div className="flex gap-5 justify-center mt-6">
            <div className="flex gap-1 items-center">
              <TbManualGearbox className="text-[#5937E0]" />
              <h1 className="font-bold text-sm">آلي</h1>
            </div>
            <div className="flex gap-1 items-center">
              <BsFillFuelPumpFill className="text-[#5937E0]" />
              <h1 className="font-bold text-sm">PB-95</h1>
            </div>
            <div className="flex gap-1 items-center">
              <FaSnowflake className="text-[#5937E0]" />
              <h1 className="font-bold text-sm">مكيف الهواء</h1>
            </div>
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-div-purple text-white shadow-none hover:scale-105 transition-all"
          >
            عرض التفاصيل
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CarCard;
