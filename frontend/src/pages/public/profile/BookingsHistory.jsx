import { Chip } from "@material-tailwind/react";

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
];
const styleStatus = {
  مكتمل: "green",
  "قيد الانتظار": "amber",
  "تم التأكيد": "blue",
};
export default function BookingsHistory() {
  return (
    <>
      <h3 className="font-bold text-black text-xl">سجل الايجارات</h3>
      <div className="flex flex-col gap-3 bg-[#fdfdfd] p-4 mt-5">
        {bookings.map((book) => (
          <BookingRow key={book.id} book={book} />
        ))}
      </div>
      <button className="border border-purple bg-transparent font-bold text-purple hover:bg-purple hover:text-white transition-all py-2 px-4 rounded-lg mt-5 w-full">
        استعراض كل الحجوزات
      </button>
    </>
  );
}
function BookingRow({ book }) {
  return (
    <div className="flex justify-between bg-[#faf7f7] p-4">
      <div className="flex">
        <img src="defaultcar.png" alt="car" className="w-32 h-24" />
        <div className="flex flex-col justify-center">
          <h4 className="font-bold">{book.car.brand + " " + book.car.model}</h4>
          <span className="text-gray-500">
            من{book.startDate} الي {book.endDate}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Chip color={styleStatus[book.status]} value={book.status} />
        <h4 className="text-purple text-lg font-bold">{book.price}$</h4>
      </div>
    </div>
  );
}
