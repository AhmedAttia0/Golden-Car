import { Link } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

function First() {
  return (
    <div className="md:p-12 p-5 mb-12">
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
          <Link to="/contact" className="opacity-60">
            <span>تواصل معنا </span>
          </Link>
        </Breadcrumbs>
      </div>

      <div className="flex flex-col gap-6 md:p-8   md:flex-row">
        <section className="overflow-hidden md:w-[50%] w-full ">
       
          <iframe className="rounded-xl border-[3px] border-black  w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.811928924557!2d31.35455322478219!3d30.15679257486721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458141d1a40c021%3A0x47825327a193e81f!2z2LPZhNmK2YXYp9mGINi62LLYp9mE2Iwg2KfZhNmF2LHYrCDYp9mE2KjYrdix2YrYqdiMINin2YTZhdix2KzYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1760524280917!5m2!1sar!2seg"
           
          
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="md:w-[50%] w-full flex justify-center">
          <img src="contact_image.jpg" alt=""  className="md:w-[95%] rounded-xl w-full"/>
        </section>
      </div>
    </div>
  );
}

export default First;
