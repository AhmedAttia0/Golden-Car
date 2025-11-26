import { VscLocation } from "react-icons/vsc";
import { LiaCarSideSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";

const InfoHome = () => {
  return (
    <div className="flex flex-row justify-between mt-5 w-[100%]">
      <div className="text-center flex flex-col gap-4 w-[27%]">
        <VscLocation className="w-[100%] text-5xl" />
        <h2 className="font-semibold text-xl">التوافر</h2>
        <p className="text-xs">
          تأكد من توافر خدماتنا في كل مكان وعلى مدار الساعة لتلبية احتياجاتك.
        </p>
      </div>
      <div className="text-center flex flex-col gap-4 w-[27%]">
        <LiaCarSideSolid className="w-[100%] text-5xl" />
        <h2 className="font-medium text-xl">الراحة والرفاهية</h2>
        <p className="text-xs">
          استمتع بتجربة مريحة وسلسة تبدأ من لحظة الحجز وحتى الوصول إلى وجهتك.
        </p>
      </div>
      <div className="text-center flex flex-col gap-4 w-[27%]">
        <LuWallet className="w-[100%] text-5xl" />
        <h2 className="font-medium text-xl">أسعار تنافسية</h2>
        <p className="text-xs">
          احصل على أفضل الأسعار والعروض التوفيرية التي تناسب ميزانيتك دون
          التنازل عن الجودة.
        </p>
      </div>
    </div>
  );
};

export default InfoHome;
