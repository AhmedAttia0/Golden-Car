import CarCard from "../../components/carCard/CarCard";
import { getCars } from "../../Services/dataService";
import { useQuery } from "@tanstack/react-query";
export default function CarsList({ acitveCarId, currentPage, limit }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cars", currentPage, limit],
    queryFn: async () => {
      const response = await getCars(currentPage, limit);
      return response.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <div>جاري تحميل البيانات....</div>;
  if (error) return <div>Error: {error.message}</div>;
  const carsList = data || [];

  return (
    <>
      {carsList.length === 0 && (
        <h2 className="font-bold text-2xl text-center">
          لا توجد سيارات لعرضها.
        </h2>
      )}
      {carsList.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {carsList.map((car) => (
            <CarCard key={car.id} active={acitveCarId == car.id} car={car} />
          ))}
        </div>
      )}
    </>
  );
}
