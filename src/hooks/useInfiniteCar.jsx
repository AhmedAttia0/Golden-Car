import { getCars } from "../Services/dataService";
import { useInfiniteQuery } from "@tanstack/react-query";
export default function useInfiniteCar(filters, initialData) {
  return useInfiniteQuery({
    queryKey: ["cars", filters],
    queryFn: async ({ pageParam = 1 }) => getCars({ pageParam }, filters),
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasMore) return undefined;
      return lastPage.page + 1;
    },

    initialData: {
      pages: [initialData],
      pageParams: [1],
    },

    keepPreviousData: true,
  });
}
