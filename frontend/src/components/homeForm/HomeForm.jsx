// import { Card, Button, Typography } from "@material-tailwind/react";
// import { Select, Option } from "@material-tailwind/react";
// import DateHomeForm from "../startdDateHomeForm/StartDateHomeForm";
// import { useState } from "react";
// import StartDateHomeForm from "../startdDateHomeForm/StartDateHomeForm";
// import FinishDateHomeForm from "../finishDateHomeForm/FinishDateHomeForm";

// export const HomeForm = () => {
//   const [selects, setSelects] = useState([
//     {
//       name: "نوع_السيارة",
//       label: "اختر نوع السيارة",
//       options: ["دفع رباعي", "سيدان", "شاحنة"],
//     },
//     {
//       name: "الموديل",
//       label: "اختر الموديل",
//       options: ["2023", "2022", "2021"],
//     },
//     {
//       name: "اللون",
//       label: "اختر اللون",
//       options: ["أحمر", "أسود", "أبيض"],
//     },
//     {
//       name: "الموقع",
//       label: "اختر الموقع",
//       options: ["القاهرة", "الإسكندرية", "الجيزة"],
//     },
//   ]);

//   return (
//     <Card
//       dir="rtl"
//       color="white"
//       shadow={false}
//       className="my-[1rem] py-6 w-[100%]"
//     >
//       <Typography variant="h4" color="blue-gray" className="mb-1 text-center">
//         احجز سيارتك
//       </Typography>

//       <form className="mt-4 mb-3 w-[100%] max-w-screen-lg text-center">
//         <div dir="rtl" className="mb-1 flex flex-col gap-2 items-center">
//           {selects.map((select, index) => (
//             <div key={index} className="w-[85%]">
//               <Select
//                 dir="rtl"
//                 label={`${select.label}`}
//                 labelProps={{
//                   className: "text-black before:!border-0 after:!border-0 ",
//                 }}
//                 containerProps={{
//                   className:
//                     "border-0 outline-0 before:!border-0 after:!border-0",
//                 }}
//                 className="bg-[#FAFAFA] border-0 outline-0 focus:!border-0 active:!border-0 before:!border-0 after:!border-0 [&>button>span]:!right-3 [&>button>span]:!left-auto [&>button>span]:text-right"
//               >
//                 {select.options.map((option, index) => (
//                   <Option className="text-black" key={index}>{`${option}`}</Option>
//                 ))}
//               </Select>
//             </div>
//           ))}
//           <div className="w-[85%]">
//             <StartDateHomeForm/>
//           </div>
//           <div className="w-[85%]">
//             <FinishDateHomeForm/>
//           </div>
//         </div>

//         <Button className="mt-6 w-[85%] bg-[#FF9E0C]">احجز الآن</Button>
//       </form>
//     </Card>
//   );
// };

import { Card, Button, Typography } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import StartDateHomeForm from "../startdDateHomeForm/StartDateHomeForm";
import FinishDateHomeForm from "../finishDateHomeForm/FinishDateHomeForm";

export const HomeForm = () => {
  const [selects, setSelects] = useState([
    {
      name: "نوع_السيارة",
      label: "اختر نوع السيارة",
      options: ["دفع رباعي", "سيدان", "شاحنة"],
    },
    {
      name: "الموديل",
      label: "اختر الموديل",
      options: ["2023", "2022", "2021"],
    },
    {
      name: "اللون",
      label: "اختر اللون",
      options: ["أحمر", "أسود", "أبيض"],
    },
    {
      name: "الموقع",
      label: "اختر الموقع",
      options: ["القاهرة", "الإسكندرية", "الجيزة"],
    },
  ]);

  const [formValues, setFormValues] = useState({
    نوع_السيارة: "",
    الموديل: "",
    اللون: "",
    الموقع: "",
    startDate: "",
    finishDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleSelectChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

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

    Object.keys(formValues).forEach((key) => {
      if (!formValues[key]) newErrors[key] = `برجاء ادخال ${key}`;
    });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("تم الحجز بنجاح!");
    }
  };

  return (
    <Card
      dir="rtl"
      color="white"
      shadow={false}
      className="my-[1rem] py-6 w-[100%]"
    >
      <Typography variant="h4" color="blue-gray" className="mb-1 text-center">
        احجز سيارتك
      </Typography>

      <form
        onSubmit={handleSubmit}
        className="mt-4 mb-3 w-[100%] max-w-screen-lg text-center"
      >
        <div dir="rtl" className="mb-1 flex flex-col gap-2 items-center">
          {selects.map((select, index) => (
            <div key={index} className="w-[85%] text-right">
              {errors[select.name] && (
                <p className="text-red-600 text-sm">{errors[select.name]}</p>
              )}
              <Select
                dir="rtl"
                label={select.label}
                value={formValues[select.name]} // ربط الـ state
                onChange={(value) => handleSelectChange(select.name, value)} // تحديث القيمة
                labelProps={{
                  className: "text-black before:!border-0 after:!border-0",
                }}
                containerProps={{
                  className:
                    "border-0 outline-0 before:!border-0 after:!border-0",
                }}
                className="bg-[#FAFAFA] border-0 outline-0 focus:!border-0 active:!border-0 before:!border-0 after:!border-0 [&>button>span]:!right-3 [&>button>span]:!left-auto [&>button>span]:text-right"
              >
                {select.options.map((option, idx) => (
                  <Option key={idx} value={option} className="text-black">
                    {option}
                  </Option>
                ))}
              </Select>
            </div>
          ))}

          {/* Start Date */}
          <div className="w-[85%] text-right">
            {errors.startDate && (
              <p className="text-red-600 text-sm">{errors.startDate}</p>
            )}
            <StartDateHomeForm onDateSelect={handleStartDate} />
          </div>

          {/* Finish Date */}
          <div className="w-[85%] text-right">
            {errors.finishDate && (
              <p className="text-red-600 text-sm">{errors.finishDate}</p>
            )}
            <FinishDateHomeForm onDateSelect={handleFinishDate} />
          </div>
        </div>

        <Button type="submit" className="mt-6 w-[85%] bg-[#FF9E0C]">
          احجز الآن
        </Button>
      </form>
    </Card>
  );
};
