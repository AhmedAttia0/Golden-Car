import { FaCheckCircle } from "react-icons/fa";

function Third() {
  return (
    <div className="flex flex-col p-12 justify-center gap-12 md:flex-row mb-10">
      <div className="w-[90%] flex flex-col gap-5 md:w-[40%]">
        <section className="flex flex-col gap-[0.8em]">
          <h1 className="text-2xl font-bold">
            افتح الباب لذكريات لا تُنسى على الطريق
          </h1>

          <p>
            استمتع برحلات مميزة مع عائلتك وأصدقائك، واكتشف أماكن جديدة واجمع
            لحظات جميلة تبقى معاك طول العمر
          </p>
        </section>
        <section className="flex items-center gap-2">
          <FaCheckCircle className="text-[#5937E0] text-[1.7em]" />
          خطط لرحلتك بسهولة واختار أفضل المسارات والوجهات
        </section>
        <section className="flex items-center gap-2">
          <FaCheckCircle className="text-[#5937E0] text-[1.7em]" />
          احجز سيارتك المناسبة بأسعار مميزة وعروض حصرية
        </section>
        <section className="flex items-center gap-2">
          <FaCheckCircle className="text-[#5937E0] text-[1.7em]" />
          اكتشف أماكن سياحية جديدة ومطاعم ومقاهي على الطريق
        </section>
        <section className="flex items-center gap-2">
          <FaCheckCircle className="text-[#5937E0] text-[1.7em]" />
          شارك ذكرياتك مع أصدقائك واحتفظ بكل اللحظات الجميلة
        </section>
      </div>

      <div className="w-[100%] md:w-[60%] lg:w-[40%] ">
        <img src="about_3.png" alt="" className="w-[100%] rounded-xl " />
      </div>
    </div>
  );
}

export default Third;
