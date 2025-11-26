import TableHeader from "./Filterations";
import CarsList from "../../public/cars/CarsList";
export default function Cars() {
  return (
    <>
      <h3 className="text-2xl font-bold text-white mb-10">إدارة السيارات</h3>
      <TableHeader />
      <CarsList Editable={true} dark={true} />
    </>
  );
}
