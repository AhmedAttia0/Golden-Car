import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
} from "react-icons/tb";

const SecondInfoHome = () => {
  return (
    <div className="mt-12 flex w-full flex-col lg:flex-row justify-around">
      <div className="lg:w-[45%] flex lg:gap-0 gap-3 flex-row justify-center lg:flex-col lg:justify-around">
        <div>
          <div className="flex flex-row">
            <TbCircleNumber1Filled className="text-[#5937e0] text-2xl" />
            <h3 className="font-bold text-xl mb-3">سهولة الحجز</h3>
          </div>
          <p className="text-sm text-[#989898]">
            وفرّنا لك أسهل طريقة لحجز العربيات من غير أي تعقيد. كل المطلوب منك
            تختار العربية، تحدد المدة، وتأكد الحجز في ثواني بس من غير أي خطوات
            زيادة.
          </p>
        </div>

        <div>
          <div className="flex flex-row">
            <TbCircleNumber2Filled className="text-[#5937e0] text-2xl" />
            <h3 className="font-bold text-xl mb-3">أسعار تنافسية</h3>
          </div>
          <p className="text-sm text-[#989898]">
            بنقدّم أفضل الأسعار في السوق مع عروض مستمرة على مختلف أنواع العربيات
            لتناسب كل الميزانيات. هدفنا إنك تلاقي العربية المناسبة بالسعر
            المناسب ليك.
          </p>
        </div>

        <div>
          <div className="flex flex-row">
            <TbCircleNumber3Filled className="text-[#5937e0] text-2xl" />
            <h3 className="font-bold text-xl mb-3">خدمة العملاء</h3>
          </div>
          <p className="text-sm text-[#989898]">
            فريق الدعم جاهز يساعدك في أي وقت على مدار ٢٤ ساعة. سواء استفسار،
            مشكلة، أو تعديل في الحجز… إحنا دايمًا معاك خطوة بخطوة.
          </p>
        </div>
      </div>
      <div className="lg:w-[45%] w-[80%] self-center lg:mt-0 mt-8">
        <img className="rounded-2xl" src="/info.png" alt="" />
      </div>
    </div>
  );
};

export default SecondInfoHome;
