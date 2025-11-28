import BookingCard from "../../../components/bookingCard/BookingCard";
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
  return (
    <div className="text-white">
      <div className="text-5xl font-bold">الحجوزات</div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-3 w-[75%] md:w-[75%]  lg:w-full">
          {bookingsArr.map((book, index) => {
            const keys = Object.keys(book);

            return <BookingCard key={index} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
}
