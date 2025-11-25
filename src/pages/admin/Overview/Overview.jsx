import React from "react";
import OverviewLink from "../../../components/overviewLink/OverviewLink";
import StatCard from "../../../components/statCard/StatCard";
export default function Overview() {
  const links = [
    {
      page: "إدارة المستخدمين",
      to: "/admin/users",
      color: "linear-gradient(135deg, #6e0520, #a8324a)",
    },
    {
      page: "إدارة الحجوزات",
      to: "/admin/bookings",
      color: "linear-gradient(135deg,#050c6e, #3b82f6)",
    },
    {
      page: "تعديل الإعدادات",
      to: "/admin/settings",
      color: "linear-gradient(135deg,#056e17 ,#22c55e)",
    },
    {
      page: "إدارة السيارات",
      to: "/admin/cars",
      color: "linear-gradient(135deg ,#234a4a, #3b7a7a)",
    },
  ];
  const stats = [
    {
      label: "عدد المستخدمين المسجلين",
      data: 163,
    },
    {
      label: "عدد السيارات",
      data: 14,
    },
    {
      label: "عدد الحجوزات علي الموقع",
      data: 528,
    },
  ];
  return (
    <main
      id="overview-page"
      className=" w-full max-w-[calc(100% - 20rem)] min-h-[100vh] flex-1 flex flex-col"
    >
      <h1 id="title" className="text-center font-bold text-white text-3xl py-2">
        مرحبا بك في صفحة الإدارة!
      </h1>
      <h2 id="sub-title" className="text-center text-lg text-white py-2">
        ماذا تريد أن تفعل اليوم؟
      </h2>
      <section
        id="page-links"
        className="w-full grid grid-cols-12 gap-2 pt-5 place-content-center"
      >
        {links.map((link, key) => {
          return (
            <OverviewLink
              key={key}
              page={link.page}
              to={link.to}
              color={link.color}
            />
          );
        })}
      </section>
      <h3 className="text-white text-2xl text-center w-full mt-7 mb-5">
        بعض الإحصائيات
      </h3>
      <section className="w-full flex flex-col md:flex-row gap-2 pt-5">
        {stats.map((val, i) => {
          return <StatCard key={i} label={val.label} data={val.data} />;
        })}
      </section>
    </main>
  );
}
