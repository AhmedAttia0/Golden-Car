import React from "react";
import {
  List,
  Card,
  Avatar,
  ListItem,
  Accordion,
  Typography,
  AccordionBody,
  ListItemPrefix,
} from "@material-tailwind/react";
import { IoCarSportSharp } from "react-icons/io5";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";

export default function SidebarDark({ className }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const LIST_ITEM_STYLES =
    "text-gray-500 hover:text-white focus:text-white active:text-white hover:bg-opacity-20 focus:bg-opacity-20 active:bg-opacity-20";

  return (
    <Card
      className={`w-full max-w-[20rem] mx-auto p-6 shadow-md bg-[#23262f] min-h-screen border-l border-[#635858] ${className}`}
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <IoCarSportSharp className="text-4xl text-white" />
        <Typography className="text-lg font-bold text-gray-300">
          Golden Car
        </Typography>
      </div>
      <hr className="my-2 border-gray-800" />
      <List>
        <Accordion open={open === 1}>
          <ListItem
            selected={open === 1}
            data-selected={open === 1}
            onClick={() => handleOpen(1)}
            className="p-3 hover:bg-opacity-20 text-gray-500 select-none focus:bg-opacity-20 active:bg-opacity-20 data-[selected=true]:bg-gray-50/20 hover:text-white focus:text-white active:text-white data-[selected=true]:text-white"
          >
            <ListItemPrefix>
              <Avatar
                size="sm"
                src="https://www.material-tailwind.com/img/avatar1.jpg"
              />
            </ListItemPrefix>
            <Typography className="mr-2 font-normal text-inherit">
              Brooklyn Alice
            </Typography>
            <FaChevronDown
              strokeWidth={3}
              className={`mr-auto text-gray-500 h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className={`px-8 ${LIST_ITEM_STYLES}`}>
                <ListItemPrefix>
                  <IoPersonOutline className="h-5 w-5 ml-2" />
                </ListItemPrefix>
                ملفي الشخصي
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-gray-800" />

        <NavLink className={LIST_ITEM_STYLES} to="/admin">
          <ListItem>
            <ListItemPrefix>
              <FaHome className="h-5 w-5 ml-2" />
            </ListItemPrefix>
            نظرة عامة
          </ListItem>
        </NavLink>
        <NavLink className={LIST_ITEM_STYLES} to="/admin/cars">
          <ListItem>
            <ListItemPrefix>
              <IoCarSportSharp className="h-5 w-5 ml-2" />
            </ListItemPrefix>
            إدارة السيارات
          </ListItem>
        </NavLink>
        <NavLink className={LIST_ITEM_STYLES} to="/admin/bookings">
          <ListItem>
            <ListItemPrefix>
              <RiCalendarScheduleLine className="h-5 w-5 ml-2" />
            </ListItemPrefix>
            الحجوزات
          </ListItem>
        </NavLink>
        <NavLink className={LIST_ITEM_STYLES} to="/admin/users">
          <ListItem>
            <ListItemPrefix>
              <HiOutlineUserGroup className="h-5 w-5 ml-2" />
            </ListItemPrefix>
            المستخدمون
          </ListItem>
        </NavLink>
        <NavLink className={LIST_ITEM_STYLES} to="/admin/settings">
          <ListItem>
            <ListItemPrefix>
              <IoSettingsOutline className="h-5 w-5 ml-2" />
            </ListItemPrefix>
            الاعدادت
          </ListItem>
        </NavLink>
        <NavLink className={LIST_ITEM_STYLES} to="/">
          <ListItem>
            <ListItemPrefix>
              <CiLogout className="h-5 w-5 ml-2" />
            </ListItemPrefix>
            تسجيل الخروج
          </ListItem>
        </NavLink>
      </List>
    </Card>
  );
}
