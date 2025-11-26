import TableHeader from "./Filterations";
import CarsList from "../../public/cars/CarsList";
export default function Cars() {
  return (
    <>
      <h3 className="text-3xl font-bold text-white mb-2">إدارة السيارات</h3>
      <h4 className="text-xl  text-[#4e4e4e] mb-10">
        يمكنك التحكم بالسيارات من هنا
      </h4>
      <TableHeader />
      <CarsList Editable={true} dark={true} />
    </>
  );
}
