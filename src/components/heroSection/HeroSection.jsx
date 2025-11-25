import { Button } from "@material-tailwind/react";
import { HomeForm } from "../homeForm/HomeForm";

const HeroSection = () => {
  return (
    <div className="rounded-3xl flex flex-col lg:flex-row  justify-center lg:h-[120vh] lg:justify-around items-center px-4 bg-[#5937E0] bg-hero bg-cover [background-position:center_top_3.75rem]">
      <div className="lg:w-[50%] w-[70%] text-center flex flex-col gap-8 lg:gap-11">
        <h1 className="font-bold text-white text-5xl leading-normal	">
          استمتع بتجربة القيادة كما لم تعشها من قبل
        </h1>
        <div className="flex flex-col gap-8">
          <p className="font-normal text-base text-white">
            اكتشف الراحة والأمان في كل رحلة مع سيارتك المثالية. احجز الآن بسهولة
            وانطلق بثقة نحو وجهتك.
          </p>
          <Button className="w-fit self-center" color="amber">
            عرض جميع السيارات
          </Button>
        </div>
      </div>
      <div className="lg:w-[35%] sm:w-[60%] w-[90%]">
        <HomeForm />
      </div>
    </div>
  );
};

export default HeroSection;
