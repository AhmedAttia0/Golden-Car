import { useNavigate } from "react-router";
import { Typography, Button } from "@material-tailwind/react";
import { FaFlag } from "react-icons/fa";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <FaFlag className="w-20 h-20 mx-auto" />
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
        >
          خطأ 404 <br /> يبدو أن هناك خطأ ما.
        </Typography>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          لا تقلق، فريقنا يعمل على حل المشكلة بالفعل.
        </Typography>
        <Button
          onClick={() => navigate(-1)}
          color="gray"
          className="w-full px-4 md:w-[8rem] font-bold"
        >
          عد الى الصفحة السابقة
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
