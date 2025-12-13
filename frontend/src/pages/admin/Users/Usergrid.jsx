import React, { useEffect, useRef } from "react";
import UserCard from "./Usercard";
import useInfiniteUsers from "../../../hooks/useInfiniteUsers";
import { FaUserSecret } from "react-icons/fa";
export default function UserGrid() {
  const limit = 10;
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteUsers(limit);
  const loaderRef = useRef(null);
  const users = data?.pages.flatMap((page) => page.data)[0].users ?? [];
  console.log(users);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasNextPage, fetchNextPage]);
  if (isLoading)
    return (
      <h2 className={`font-bold text-2xl  text-center mt-20`}>
        جاري تحميل البيانات...
      </h2>
    );
  if (isError)
    return (
      <h2 className={`font-bold text-2xl  text-center  mt-20`}>
        {error.message}
      </h2>
    );
  return (
    <>
      {users?.length === 0 && (
        <h2 className="font-bold text-2xl text-center mt-20">
          لا يوجد مستخدمين لعرضهم.
        </h2>
      )}

      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {users && users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      )}

      <div ref={loaderRef} style={{ height: "40px" }}>
        {isFetchingNextPage && <p>Loading…</p>}
      </div>
    </>
  );
}
