function Fifth() {
  function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd" />
      </svg>
    `;

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = "0";
      icon.innerHTML = upSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.innerHTML = downSVG;
    }
  }

  return (
    <div className="p-10 flex flex-col gap-8 mb-12">
      <div className="text-center font-bold text-2xl">
        <h1>أكثر الأسئلة شيوعًا حول تأجير السيارات</h1>
      </div>

      <div className="border-[2px] border-[#ADB5BD] rounded-xl p-2">
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span className="font-bold">كيف يعمل النظام?</span>
          <span
            id="icon-1"
            className="text-slate-800 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          id="content-1"
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="pb-5 text-sm text-slate-500">
            الخدمة بسيطة وسهلة. اختر السيارة المناسبة لك من الموقع، حدد تاريخ
            الاستلام والتسليم، أكمل عملية الحجز بالدفع عن طريق فودافون كاش أو
            كاش، واستلم سيارتك في الموعد المحدد. يمكنك التواصل مع خدمة العملاء
            في أي وقت لمساعدتك.
          </div>
        </div>
      </div>

      <div className="border-[2px] border-[#ADB5BD] rounded-xl p-2">
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span className="font-bold">
            هل أستطيع استئجار سيارة بدون بطاقة ائتمان؟
          </span>
          <span
            id="icon-2"
            className="text-slate-800 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          id="content-2"
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="pb-5 text-sm text-slate-500">
            نعم، يمكنك استئجار سيارة بدون بطاقة ائتمان بكل سهولة. نقبل الدفع عن
            طريق فودافون كاش أو كاش مع ترك البطاقة الشخصية أو أي بيانات رسمية
            كضمان حتى تسليم السيارة. الموضوع بسيط وآمن للطرفين.
          </div>
        </div>
      </div>

      <div className="border-[2px] border-[#ADB5BD] rounded-xl p-2">
        <button
          onClick={() => toggleAccordion(3)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span className="font-bold"> ما هي متطلبات استئجار السيارة؟</span>
          <span
            id="icon-3"
            className="text-slate-800 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          id="content-3"
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="pb-5 text-sm text-slate-500">
            يجب أن يكون عمرك 21 سنة على الأقل 25 لبعض السيارات الفاخرة، رخصة
            قيادة سارية لمدة سنة على الأقل، بطاقة هوية وطنية أو جواز سفر، ووسيلة
            دفع مقبولة. قد تحتاج أيضاً لتقديم إثبات عنوان في بعض الحالات
          </div>
        </div>
      </div>

      <div className="border-[2px] border-[#ADB5BD] rounded-xl p-2">
        <button
          onClick={() => toggleAccordion(3)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span className="font-bold">
            هل يسمح استئجار السيارات بالقطر أو تركيب مقطورة؟
          </span>
          <span
            id="icon-3"
            className="text-slate-800 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          id="content-3"
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="pb-5 text-sm text-slate-500">
            للأسف، معظم عقود الإيجار لا تسمح بالقطر أو تركيب مقطورات على السيارة
            المستأجرة لأسباب تأمينية. إذا كنت بحاجة لنقل أشياء ثقيلة، يمكننا
            توفير سيارة شاحنة صغيرة أو فان مناسب لاحتياجاتك.
          </div>
        </div>
      </div>

      <div className="border-[2px] border-[#ADB5BD] rounded-xl p-2">
        <button
          onClick={() => toggleAccordion(4)}
          className="w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span className="font-bold">
            هل يوفر استئجار السيارات منتجات تغطية تأمينية للشراء مع الإيجار؟
          </span>
          <span
            id="icon-4"
            className="text-slate-800 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          id="content-4"
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="pb-5 text-sm text-slate-500">
            نعم، نوفر عدة خيارات للتأمين: التأمين الأساسي ضد الحوادث، التأمين
            الشامل، تأمين ضد السرقة، وتغطية إضافية للأضرار. يمكنك اختيار الباقة
            المناسبة لك عند الحجز لضمان راحة بالك أثناء القيادة.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
