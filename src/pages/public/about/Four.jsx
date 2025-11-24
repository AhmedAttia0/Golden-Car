import { BsPersonFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
function Four() {
  return (
    <div className="flex mb-12 flex-col md:flex-row gap-6 flex-wrap justify-center p-4 md:p-8 bg-gray-50  ">
      <div className="w-full md:w-[350px] bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 text-center">
          <div className="text-4xl text-purple-500 mb-4">❝</div>
          <p className="text-gray-700 mb-8 leading-relaxed text-sm">
            المنتج ده غير حياتي تماماً، الجودة عالية جداً والخدمة ممتازة
            والتعامل راقي
          </p>
          <img
            src="OIP.webp"
            alt="أحمد محمد"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
          />
        </div>
        <div className="bg-[#5937E0] py-4 text-center">
          <h3 className="text-white font-bold text-lg">أحمد محمد</h3>
          <p className="text-white text-sm">مدير تسويق</p>
        </div>
      </div>

      <div className="w-full md:w-[350px] bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 text-center">
          <div className="text-4xl text-purple-500 mb-4">❝</div>
          <p className="text-gray-700 mb-8 leading-relaxed text-sm">
            تجربة رائعة من البداية للنهاية، أنصح الجميع بالتعامل معهم بكل ثقة
          </p>
          <img
            src="ساره علي.jpg"
            alt="سارة علي"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
          />
        </div>
        <div className="bg-[#5937E0] py-4 text-center">
          <h3 className="text-white font-bold text-lg">سارة علي</h3>
          <p className="text-white text-sm">مصممة جرافيك</p>
        </div>
      </div>

      <div className="w-full md:w-[350px] bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 text-center">
          <div className="text-4xl text-purple-500 mb-4">❝</div>
          <p className="text-gray-700 mb-8 leading-relaxed text-sm">
            خدمة عملاء ممتازة وسرعة في التنفيذ، شكراً جزيلاً على الاحترافية
          </p>
          <img
            src="mohamed hassan.jpg"
            alt="محمد حسن"
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
          />
        </div>
        <div className="bg-[#5937E0] py-4 text-center">
          <h3 className="text-white font-bold text-lg">محمد حسن</h3>
          <p className="text-white text-sm">رائد أعمال</p>
        </div>
      </div>
    </div>
  );
}

export default Four;
