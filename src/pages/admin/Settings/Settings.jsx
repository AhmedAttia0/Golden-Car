import { Input, Typography, Button } from "@material-tailwind/react";

function Account1() {
  return (
    <section className="min-h-screen flex flex-col justify-center p-4">
      <div className="text-right">
        <Typography variant="h5" color="white" className="mb-6 ">
          اعدادت التطبيق
        </Typography>
      </div>
      <div className="w-full max-w-6xl bg-navyblue rounded-lg p-8">
        <Typography variant="h5" color="white" className="mb-6 ">
          الاعدادات العامة
        </Typography>

        <div className="flex flex-col mt-4 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                اسم الشركة
              </Typography>
              <Input
                size="lg"
                placeholder="اسم الشركة"
                className="w-full placeholder-gray-300 text-white bg-gray-600 border-t-gray-500 focus:border-t-blue-500"
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                الدعم الفني
              </Typography>
              <Input
                size="lg"
                placeholder="test@gmail.com"
                className="w-full placeholder-gray-300 text-white bg-gray-600 border-t-gray-500 focus:border-t-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                رقم التليفون
              </Typography>
              <Input
                size="lg"
                placeholder="01111111111"
                className="w-full placeholder-gray-300 text-white bg-gray-600 border-t-gray-500 focus:border-t-blue-500"
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                العنوان
              </Typography>
              <Input
                size="lg"
                placeholder="العنوان"
                className="w-full placeholder-gray-300 text-white bg-gray-600 border-t-gray-500 focus:border-t-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                المدينة
              </Typography>
              <Input
                size="lg"
                placeholder="المدينة"
                className="w-full placeholder-gray-300 text-white bg-gray-600 border-t-gray-500 focus:border-t-blue-500"
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                الولاية
              </Typography>
              <Input
                size="lg"
                placeholder="الولاية"
                className="w-full placeholder-gray-300 text-white bg-gray-600 border-t-gray-500 focus:border-t-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                الرمز البريدي
              </Typography>
              <Input
                size="lg"
                placeholder="الرمز البريدي"
                className="w-full placeholder-gray-300 text-white bg-gray-600 border-t-gray-500 focus:border-t-blue-500"
              />
            </div>
            <div className="w-full">
              <Typography
                variant="small"
                color="white"
                className="mb-2 font-bold"
              >
                الدولة
              </Typography>
              <Input
                size="lg"
                placeholder="الدولة"
                className="w-full placeholder-gray-300 text-white bg-gray-600 border-t-gray-500 focus:border-t-blue-500"
              />
            </div>
          </div>
        </div>
        <div>
        
          <Button className="bg-purple mt-9">حفظ التغييرات</Button>
        </div>
      </div>
    </section>
  );
}

export default Account1;
