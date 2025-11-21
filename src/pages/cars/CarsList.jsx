import CarCard from "../../components/carCard/CarCard";
import { useEffect, useRef } from "react";
import useInfiniteCar from "../../hooks/useInfiniteCar";
export default function CarsList({ activeCarId, initialData, filters }) {
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteCar(filters, initialData);
  const loaderRef = useRef(null);
  if (error) return <div>Error: {error.message}</div>;
  const cars = data?.pages.flatMap((page) => page.data) ?? [];

  // handle infinite scrolling
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
  return (
    <>
      {cars?.length === 0 && (
        <h2 className="font-bold text-2xl text-center">
          لا توجد سيارات لعرضها.
        </h2>
      )}
      {cars?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {cars.map((car) => (
            <CarCard key={car.id} active={activeCarId == car.id} car={car} />
          ))}
        </div>
      )}
      <div ref={loaderRef} style={{ height: "40px" }}>
        {isFetchingNextPage && <p>Loading…</p>}
      </div>
    </>
  );
}
