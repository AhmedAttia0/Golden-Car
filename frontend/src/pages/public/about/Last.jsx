import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useSettings from "../../../hooks/useSettings";
function Last() {
  const { data, isLoading, isError, error } = useSettings();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div className="p-10 md:h-[80vh] h-auto">
      <div className="p-12 bg-[url('/last.png')] bg-cover bg-center h-[100%] rounded-xl  ">
        <div className="flex flex-col items-end gap-6">
          <h1 className="text-white font-bold text-3xl  self-start md:self-end">
            هل تبحث علي سياره ؟
          </h1>
          <p className="text-white font-bold  self-start md:self-end">
            رقم الهاتف:{data?.phone}
          </p>
          <p className="text-white font-bold w-[100%] md:w-[32%]  self-start md:self-end">
            احجز عربيتك دلوقتي بأفضل الأسعار في مصر. خدمة سريعة ومريحة، سيارات
            نضيفة ومجهزة، وفريق دعم متاح على مدار الساعة لخدمتك
          </p>
          <Button
            color="amber"
            className="text-white font-bold text-xl self-start md:self-end"
          >
            <Link to="/">احجز الان</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Last;
