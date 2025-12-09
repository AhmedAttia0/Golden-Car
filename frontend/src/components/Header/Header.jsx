import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCarSportSharp } from "react-icons/io5";
import { useUser } from "../../contexts/UserContext";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, setUser } = useUser();

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
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center transition-colors relative after:content-[''] font-bold after:absolute after:left-0 after:bottom-0 
     after:bg-[#5937E0] after:w-full after:transition-all after:duration-300 hover:after:w-full
     ${isActive ? "after:h-[2px]" : "after:h-0"}`
          }
        >
          الرئيسية
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/cars"
          className={({ isActive }) =>
            `flex items-center transition-colors relative after:content-[''] font-bold after:absolute after:left-0 after:bottom-0 
     after:bg-[#5937E0] after:w-full after:transition-all after:duration-300 hover:after:w-full
     ${isActive ? "after:h-[2px]" : "after:h-0"}`
          }
        >
          سياراتنا
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center transition-colors relative after:content-[''] font-bold after:absolute after:left-0 after:bottom-0 
     after:bg-[#5937E0] after:w-full after:transition-all after:duration-300 hover:after:w-full
     ${isActive ? "after:h-[2px]" : "after:h-0"}`
          }
        >
          من نحن
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center transition-colors relative after:content-[''] font-bold after:absolute after:left-0 after:bottom-0 
     after:bg-[#5937E0] after:w-full after:transition-all after:duration-300 hover:after:w-full
     ${isActive ? "after:h-[2px]" : "after:h-0"}`
          }
        >
          تواصل معنا
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-20 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Logo />
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="flex items-center gap-4">
          <div className="items-center gap-x-1 hidden lg:flex">
            {user ? (
              <>
                <NavLink to="/profile" className="flex items-center gap-1 ml-2">
                  <span>{user.first_name}</span>

                  <img src="/profile.jpg" alt="profile" className="w-8 h-8" />
                </NavLink>
                <Button
                  className="bg-[#ff0000]  hover:bg-[#e92323e1]"
                  size="sm"
                  onClick={() => setUser(null)}
                >
                  <span>تسجيل الخروج</span>
                </Button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="w-full">
                  <Button fullWidth variant="text" size="sm">
                    <span>تسجيل الدخول</span>
                  </Button>
                </NavLink>
                <NavLink to="/signup" className="w-full">
                  <Button
                    fullWidth
                    className="bg-[#5937E0] hover:bg-[#5937e0ec]"
                    size="sm"
                  >
                    <span>إنشاء حساب</span>
                  </Button>
                </NavLink>
              </>
            )}
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
        <div className="items-center justify-between gap-x-1 flex">
          {user ? (
            <>
              <NavLink to="/profile" className="flex items-center ">
                <Button variant="text" size="sm">
                  <span>{user.first_name}</span>
                </Button>
                <img src="/profile.jpg" alt="profile" className="w-8 h-8" />
              </NavLink>
              <Button
                className="bg-[#ff0000]  hover:bg-[#e92323e1]"
                size="sm"
                onClick={() => setUser(null)}
              >
                <span>تسجيل الخروج</span>
              </Button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="w-full">
                <Button fullWidth variant="text" size="sm">
                  <span>تسجيل الدخول</span>
                </Button>
              </NavLink>
              <NavLink to="/signup" className="w-full">
                <Button
                  fullWidth
                  className="bg-[#5937E0] hover:bg-[#5937e0ec]"
                  size="sm"
                >
                  <span>إنشاء حساب</span>
                </Button>
              </NavLink>
            </>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export function Logo() {
  return (
    <NavLink
      to="/"
      className="md:mr-4 flex gap-1 items-center cursor-pointer py-1.5 font-medium"
    >
      <IoCarSportSharp className="text-4xl" />
      <span className="ml-1 text-lg font-semibold">Golden Car</span>
    </NavLink>
  );
}

export default Header;
