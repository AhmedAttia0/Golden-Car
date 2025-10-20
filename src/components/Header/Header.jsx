import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCarSportSharp } from "react-icons/io5";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Typography
          as={Link}
          to="/"
          className="flex items-center transition-colors relative after:content-[''] font-bold after:absolute  after:left-0 after:bottom-0 after:h-[2px] after:bg-[#5937E0] after:w-full after:transition-all after:duration-300 hover:after:w-full"
        >
          الرئيسية
        </Typography>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Typography
          as={Link}
          to="/cars"
          className="flex items-center transition-colors relative after:content-[''] font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#5937E0] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          سياراتنا
        </Typography>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Typography
          as={Link}
          to="/about"
          className="flex items-center transition-colors relative after:content-[''] font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#5937E0] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          من نحن
        </Typography>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Typography
          as={Link}
          to="/contact"
          className="flex items-center transition-colors relative after:content-[''] font-bold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#5937E0] after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          تواصل معنا
        </Typography>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Logo />
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-1">
            <Typography as={Link} to="/login">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>تسجيل الدخول</span>
              </Button>
            </Typography>
            <Typography as={Link} to="/register">
              <Button
                size="sm"
                className="hidden lg:inline-block bg-[#5937E0] hover:bg-[#5937e0ec] "
              >
                <span>إنشاء حساب</span>
              </Button>
            </Typography>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-1">
          <Typography as={Link} to="/login" className="w-full">
            <Button fullWidth variant="text" size="sm">
              <span>تسجيل الدخول</span>
            </Button>
          </Typography>
          <Typography as={Link} to="/register" className="w-full">
            <Button
              fullWidth
              className="bg-[#5937E0] hover:bg-[#5937e0ec]"
              size="sm"
            >
              <span>إنشاء حساب</span>
            </Button>
          </Typography>
        </div>
      </Collapse>
    </Navbar>
  );
};

export function Logo() {
  return (
    <Typography
      as={Link}
      to="/"
      className="md:mr-4 flex gap-1 items-center cursor-pointer py-1.5 font-medium"
    >
      <IoCarSportSharp className="text-4xl" />
      <span className="ml-1 text-lg font-semibold">Golden Car</span>
    </Typography>
  );
}

export default Header;
