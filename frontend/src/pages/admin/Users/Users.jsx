import React, { useState } from "react";
import UserHeader from "./Userheader";
import UserFilters from "./Userfilters";
import UserGrid from "./Usergrid";

export default function Users() {
  return (
    <div className="min-h-screen text-white p-4 md:p-8" dir="rtl">
      <UserHeader onAddClick={() => setIsModalOpen(true)} />

      <UserFilters />

      <UserGrid />
    </div>
  );
}
