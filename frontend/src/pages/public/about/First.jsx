import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function First() {
  return (
    <div className="p-12">
      <div className="text-center flex flex-col items-center gap-4">
        <h1 className="text-[2.8em] font-bold">من نحن </h1>
        <Breadcrumbs className="mb-4">
          <Link to="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link to="/about" className="opacity-60">
            <span>من نحن</span>
          </Link>
        </Breadcrumbs>
      </div>
      <div className="grid  grid-cols-1 gap-[1.6em]  lg:grid-cols-3 lg:p-14 ">
        <section className="">
          <h1 className="text-[2em] font-bold lg:pr-14">
           
            كل رحلة قيادة تشعرك بالتميّز
          </h1>
        </section>

        <section className="flex flex-col gap-2">
          <h1 className="font-bold text-[1.4em]">علامات تجارية متنوعة</h1>
          <p>
            نحن نقدم لك مجموعة واسعة من السيارات الفاخرة والاقتصادية من أشهر
            العلامات التجارية في العالم مثل BMW وMercedes وToyota. اختر السيارة
            التي تناسب ذوقك واحتياجاتك من أسطولنا المتنوع.
          </p>

          <h1 className="font-bold text-[1.4em]">دعم رائع</h1>
          <p>
            فريق خدمة العملاء لدينا متاح على مدار الساعة طوال أيام الأسبوع
            لمساعدتك في أي استفسار. نحن ملتزمون بتقديم تجربة استثنائية منذ لحظة
            الحجز وحتى إعادة السيارة.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h1 className="font-bold text-[1.4em]">حرية قصوى</h1>
          <p>
            استمتع بحرية القيادة دون أي قيود أو حدود للكيلومترات. استأجر السيارة
            التي تناسبك واستكشف المدينة أو انطلق في رحلات طويلة بالسرعة والراحة
            التي تختارها.
          </p>
          <h1 className="font-bold text-[1.4em]">مرونة أثناء التنقل</h1>
          <p>
            نحن نوفر خدمة توصيل واستلام السيارات في الموقع الذي تختاره. سواء في
            المطار أو الفندق أو منزلك، نصل إليك لتوفير وقتك وجهدك.
          </p>
        </section>
      </div>
    </div>
  );
}

export default First;
