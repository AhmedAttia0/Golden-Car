import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-3xl flex flex-col lg:flex-row  justify-center lg:h-[80vh] 2xl:h-[75vh]  lg:bg-bottom lg:justify-around items-center py-4 px-4 bg-[#5937E0] bg-hero3 bg-no-repeat bg-center">
      <div className="lg:w-[50%] w-[70%] text-center flex flex-col gap-8 lg:gap-11">
        <h1 className="font-bold text-white text-5xl leading-normal	">
          استمتع بتجربة القيادة كما لم تعشها من قبل
        </h1>
        <div className="flex flex-col gap-8">
          <p className="font-normal text-base text-white">
            اكتشف الراحة والأمان في كل رحلة مع سيارتك المثالية. احجز الآن بسهولة
            وانطلق بثقة نحو وجهتك.
          </p>
          <Button
            onClick={() => navigate("/cars")}
            className="w-fit self-center"
            color="amber"
          >
            عرض جميع السيارات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
