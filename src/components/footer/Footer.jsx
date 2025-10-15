
import { Typography } from "@material-tailwind/react";
import { Logo } from "../../components/Header/Header.jsx";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const LINKS = [
  {
    title: "روابط مهمة",
    items: ["من نحن", "تواصل معنا", "الصفحة الرئيسية", "سياراتنا"],
    size: "",
  },
  {
    title: "السيارات",
    items: ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"],
    size: "",
  },
  {
    title: "مواقع التواصل الاجتماعي",
    items: [<FaFacebook />, <IoLogoWhatsapp />, <FaInstagram />],
    size: "text-2xl",
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full bottom-0 mt-20">
      <div className=" w-full px-16 ">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-4 mb-12">
          <Logo />
          <div className="location flex items-center gap-4  ">
            <CiLocationOn className="rounded-full text-2xl p-1 w-[2.5rem] h-[2.5rem] font-bold bg-[#FF9E0C] text-white" />
            <div>
              <span>العنوان</span>
              <p className="font-bold">القاهرة, المرج , ش سليمان غزال</p>
            </div>
          </div>
          <div className="email flex items-center gap-4  ">
            <MdOutlineEmail className="rounded-full text-2xl p-1 w-[2.5rem] h-[2.5rem] font-bold bg-[#FF9E0C] text-white" />
            <div>
              <span>البريد الالكتروني</span>
              <p className="font-bold">test@test.com</p>
            </div>
          </div>
          <div className="phone flex items-center gap-4  ">
            <FiPhone className="rounded-full text-2xl p-2 w-[2.5rem] h-[2.5rem] font-bold bg-[#FF9E0C] text-white" />
            <div>
              <span>رقم الهاتف</span>
              <p className="font-bold">+20 111-222-3334</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          <p className="font-bold text-lg w-[75%] leading-7">
            {" "}
            هل لديك سؤال أو تحتاج إلى مساعدة؟ تواصل معنا عبر الهاتف أو البريد
            الإلكتروني أو تفضل بزيارة صفحة تواصل معنا. نحن هنا لتلبية كل ما
            تحتاجه.
          </p>
          {LINKS.map(({ title, items, size }) => (
            <ul key={title}>
              <Typography variant="small" className="mb-3 font-bold ">
                {title}
              </Typography>
              {items.map((link, i) => (
                <li key={i}>
                  <Typography
                    as="a"
                    href="#"
                    color="black"
                    className={`py-1.5 font-normal transition-colors hover:text-blue-gray-900 ${size}`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4  ">
          <Typography
            variant="small"
            className="mb-4 text-center font-bold text-blue-gray-900 md:mb-0 "
          >
            &copy; {currentYear} كل الحقوق محفوظة - جولدن كار
          </Typography>
        </div>
      </div>
    </footer>
  );
}
