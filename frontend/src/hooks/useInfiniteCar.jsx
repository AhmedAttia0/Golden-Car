import { useSearchParams } from "react-router-dom";
import { getCars } from "../Services/dataService";
import { useInfiniteQuery } from "@tanstack/react-query";
export default function useInfiniteCar() {
  const [searchParams] = useSearchParams();
  return useInfiniteQuery({
    queryKey: ["cars", searchParams.toString()],
    queryFn: async ({ pageParam = 1 }) => getCars({ pageParam }, searchParams),
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasMore) return undefined;
      return lastPage.page + 1;
    },

    keepPreviousData: true,
  });
}
