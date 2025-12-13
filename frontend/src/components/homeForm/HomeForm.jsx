import { Card, Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import StartDateHomeForm from "../startdDateHomeForm/StartDateHomeForm";
import FinishDateHomeForm from "../finishDateHomeForm/FinishDateHomeForm";
import { capitalize } from "../Filter/FilterationOption";
import { UserContext } from "../../contexts/UserContext";
import useCreateBooking from "../../hooks/useCreateBooking";
import { useContext } from "react";
export const HomeForm = ({ id, model, brand, year, price, type }) => {
const {user}=useContext(UserContext); 
  const { mutate, isPending } = useCreateBooking();

  const [formValues, setFormValues] = useState({
    startDate: "",
    finishDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleStartDate = (date) => {
    setFormValues((prev) => ({ ...prev, startDate: date }));
    setErrors((prev) => ({ ...prev, startDate: "" }));
  };

  const handleFinishDate = (date) => {
    setFormValues((prev) => ({ ...prev, finishDate: date }));
    setErrors((prev) => ({ ...prev, finishDate: "" }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formValues.startDate) newErrors.startDate = "برجاء ادخال تاريخ البداية";
    if (!formValues.finishDate) newErrors.finishDate = "برجاء ادخال تاريخ النهاية";

    if (
      formValues.startDate &&
      formValues.finishDate &&
      new Date(formValues.startDate) > new Date(formValues.finishDate)
    ) {
      newErrors.finishDate = "تاريخ النهاية يجب أن يكون بعد تاريخ البداية";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // حساب الأيام والسعر
  const bookingDaysInMs =
    new Date(formValues.finishDate) - new Date(formValues.startDate);
  const bookingDays = Math.ceil(bookingDaysInMs / (1000 * 3600 * 24));
  const pricePerDay = price * bookingDays;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // ضبط التواريخ لتجنب shift
    const tzOffsetStart = new Date(formValues.startDate).getTimezoneOffset();
    const startUTC = new Date(
      new Date(formValues.startDate).getTime() - tzOffsetStart * 60 * 1000
    );

    const tzOffsetEnd = new Date(formValues.finishDate).getTimezoneOffset();
    const endUTC = new Date(
      new Date(formValues.finishDate).getTime() - tzOffsetEnd * 60 * 1000
    );
    // نهاية اليوم
    endUTC.setHours(23, 59, 59, 999);

    const payload = {
      user: user.id,
      car: id,
      startDate: startUTC.toISOString(),
      endDate: endUTC.toISOString(),
      totalPrice: pricePerDay,
    };

    mutate(payload, {
      onSuccess: () => {
        alert("تم إرسال الحجز بنجاح وفي انتظار المراجعة");
        setFormValues({ startDate: "", finishDate: "" }); // إعادة تعيين الفورم
      },
      onError: (err) => {
        alert(err.message || "حدث خطأ أثناء الحجز");
      },
    });
  };

  return (
    <Card dir="rtl" color="white" shadow={false} className="my-[1rem] w-full">
      <form
        onSubmit={handleSubmit}
        className="mt-4 mb-3 w-full max-w-screen-lg text-center"
      >
        <div dir="rtl" className="mb-1 flex flex-col gap-2 items-center">
          {/* معلومات السيارة */}
          <div className="w-[85%] flex flex-col">
            <span className="text-right font-semibold mb-1 text-black">
              السيارة
            </span>
            <Input
              className="rounded-none"
              value={`${brand} ${model} ${year}`}
              disabled
            />
          </div>

          <div className="w-[85%] flex flex-col">
            <span className="text-right font-semibold mb-1 text-black">
              نوع السيارة
            </span>
            <Input
              className="rounded-none"
              value={capitalize(type)}
              disabled
            />
          </div>

          {/* اختيار التاريخ */}
          <span className="text-lg w-[85%] text-right font-bold mb-2 mt-1 text-black">
            اختار تاريخ الحجز
          </span>

          <div className="w-[85%] mb-2 text-right">
            <StartDateHomeForm onDateSelect={handleStartDate} />
            {errors.startDate && (
              <p className="text-red-600 text-sm">{errors.startDate}</p>
            )}
          </div>

          <div className="w-[85%] text-right">
            <FinishDateHomeForm onDateSelect={handleFinishDate} />
            {errors.finishDate && (
              <p className="text-red-600 text-sm">{errors.finishDate}</p>
            )}
          </div>

          {/* عرض عدد الأيام والسعر */}
          {!isNaN(bookingDays) && bookingDays > 0 && (
            <>
              <div className="flex justify-between w-[85%]">
                <span className="text-right font-semibold mb-1 text-xl text-[#FF9E0C]">
                  عدد أيام الحجز:
                </span>
                <span className="text-right font-semibold mb-1 text-[#FF9E0C]">
                  {bookingDays} يوم
                </span>
              </div>
              <div className="flex justify-between w-[85%]">
                <span className="text-right font-semibold mb-1 text-xl text-[#FF9E0C]">
                  سعر الحجز:
                </span>
                <span className="text-right font-semibold mb-1 text-[#FF9E0C]">
                  {pricePerDay}$
                </span>
              </div>
            </>
          )}
        </div>

        <Button
          type="submit"
          className="mt-6 w-[85%] font-bold text-sm bg-[#FF9E0C]"
          disabled={isPending}
        >
          {isPending ? "جاري إرسال الحجز..." : "احجز الآن"}
        </Button>
      </form>
    </Card>
  );
};
