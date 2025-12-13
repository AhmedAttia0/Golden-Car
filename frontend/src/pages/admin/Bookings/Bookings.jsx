import BookingCard from "../../../components/bookingCard/BookingCard";
import { useEffect, useRef } from "react";
import useInfiniteBooking from "../../../hooks/useInfiniteBooking";
const bookingsArr = [
  {
    bookNO: "0001",
    customerName: "أحمد عطية",
    Car: "تويوتا كورولا",
    startDate: "2024-01-20",
    duration: 5,
    endDate: "2024-01-25",
    price: 2500,
    status: "قيد الانتظار",
  },
  {
    bookNO: "5548",
    customerName: "سارة محمد",
    Car: "هيونداي إلنترا",
    startDate: "2024-02-10",
    duration: 3,
    endDate: "2024-02-13",
    price: 1500,
    status: "تم التأكيد",
  },
  {
    bookNO: "3001",
    customerName: "عمر خالد",
    Car: "كيا سبورتاج",
    startDate: "2024-03-05",
    duration: 7,
    endDate: "2024-03-12",
    price: 5600,
    status: "تم الإلغاء",
  },
  {
    bookNO: "5412",
    customerName: "نور عادل",
    Car: "بي إم دبليو X3",
    startDate: "2024-04-15",
    duration: 2,
    endDate: "2024-04-17",
    price: 3200,
    status: "مكتمل",
  },
];

export default function Bookings() {
  const limit = 10;
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteBooking(limit);
  const loaderRef = useRef(null);
  const bookings = data?.pages.flatMap((page) => page.data)[0].bookings ?? [];
  console.log(bookings);

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
      <div className="text-white">
        <div className="text-5xl font-bold">الحجوزات</div>
        <div className="flex justify-center">
          {bookings?.length === 0 && (
            <h2 className="font-bold text-2xl text-center mt-20">
              لا توجد حجوزات لعرضها.
            </h2>
          )}{" "}
          {bookings?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-3 w-[75%] md:w-[75%]  lg:w-full">
              {bookings.map((book, index) => {
                const keys = Object.keys(book);

                return <BookingCard key={index} book={book} />;
              })}
            </div>
          )}
        </div>
        <div ref={loaderRef} style={{ height: "40px" }}>
          {isFetchingNextPage && <p>Loading…</p>}
        </div>
      </div>
    </>
  );
}
