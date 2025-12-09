import { Input } from "@material-tailwind/react";
import { useUser } from "../../../contexts/UserContext";
import ConfirmByPassword from "./ConfirmByPassword";
export default function ProfileSettings() {
  const { user } = useUser();

  return (
    <div className="px-6">
      <h3 className="font-bold text-black text-xl my-8 ">الاعدادات</h3>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-6  lg:p-0"
      >
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <Input value={user.first_name} size="lg" label="الاسم الاول" />
          </div>
          <div className="w-full lg:w-1/2">
            <Input value={user.last_name} size="lg" label="لقب العائلة" />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-1/2">
            <Input value={user.phone_number} size="lg" label="رقم الجوال" />
          </div>
          <div className="w-full lg:w-1/2">
            <Input value={user.email} size="lg" label="البريد الالكتروني" />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <Input size="lg" label="كلمة المرور الجديدة" />
          <Input size="lg" label="تاكيد كلمة المرور الجديدة" />
        </div>
        <ConfirmByPassword />
      </form>
    </div>
  );
}
