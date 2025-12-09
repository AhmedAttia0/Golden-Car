import { Chip } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const bookings = [
  {
    id: 1,
    car: {
      brand: "Toyota",
      model: "Corolla",
    },
    startDate: "2023-05-01",
    endDate: "2023-05-05",
    status: "مكتمل",
    price: 5000,
  },
  {
    id: 2,
    car: {
      brand: "Honda",
      model: "Civic",
    },
    startDate: "2023-06-10",
    endDate: "2023-06-15",
    status: "قيد الانتظار",
    price: 6000,
  },
  {
    id: 3,
    car: {
      brand: "Ford",
      model: "Mustang",
    },
    startDate: "2023-07-20",
    endDate: "2023-07-25",
    status: "تم التأكيد",
    price: 7000,
  },
  {
    id: 4,
    car: {
      brand: "test",
      model: "Mustang",
    },
    startDate: "2023-07-20",
    endDate: "2023-07-25",
    status: "تم التأكيد",
    price: 600,
  },
];
const styleStatus = {
  مكتمل: "green",
  "قيد الانتظار": "amber",
  "تم التأكيد": "blue",
};
export default function BookingsHistory({ collapsed = false }) {
  const navigate = useNavigate();
  return (
    <div className="px-6">
      <h3 className="font-bold text-black text-xl">سجل الايجارات</h3>
      <div className="flex flex-col gap-3 bg-[#fdfdfd] p-4 mt-5">
        {collapsed &&
          bookings
            .slice(0, 3)
            .map((book) => <BookingRow key={book.id} book={book} />)}
        {!collapsed &&
          bookings.map((book) => <BookingRow key={book.id} book={book} />)}
      </div>
      {collapsed && (
        <button
          onClick={() => navigate("/profile/bookings")}
          className="border border-purple bg-transparent font-bold text-purple hover:bg-purple hover:text-white transition-all py-2 px-4 rounded-lg mt-5 w-full"
        >
          استعراض كل الحجوزات
        </button>
      )}
    </div>
  );
}
function BookingRow({ book }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white rounded-xl shadow-md p-4 mb-3">
      {/* Left: Image + Info */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <img
          src="/defaultcar.png"
          alt="car"
          className="w-full sm:w-32 h-28 rounded-lg object-cover"
        />

        <div className="flex flex-col justify-center text-center sm:text-left">
          <h4 className="font-bold text-lg">
            {book.car.brand + " " + book.car.model}
          </h4>

          <span className="text-gray-500 text-sm">
            من {book.startDate} إلى {book.endDate}
          </span>
        </div>
      </div>

      {/* Right: Status + Price */}
      <div className="flex mt-3 sm:mt-0 items-center justify-between sm:justify-center gap-3">
        <Chip color={styleStatus[book.status]} value={book.status} />
        <h4 className="text-purple-600 text-lg font-bold">{book.price}$</h4>
      </div>
    </div>
  );
}
