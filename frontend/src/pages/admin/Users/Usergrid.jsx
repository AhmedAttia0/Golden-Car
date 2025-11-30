import React from "react";
import UserCard from "./Usercard";

export default function UserGrid({ filteredUsers }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
