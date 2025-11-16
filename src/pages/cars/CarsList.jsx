import CarCard from "../../components/carCard/CarCard";
export default function CarsList({ carsList, acitveCarId }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {carsList.map((car) => (
        <CarCard key={car.id} active={acitveCarId == car.id} car={car} />
      ))}
    </div>
  );
}
