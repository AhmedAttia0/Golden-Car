import { useSearchParams } from "react-router-dom";
import { getUsers } from "../Services/dataService";
import { useInfiniteQuery } from "@tanstack/react-query";
export default function useInfiniteBooking(limit) {
  const [searchParams] = useSearchParams();
  return useInfiniteQuery({
    queryKey: ["users", searchParams.toString(), limit],
    queryFn: async ({ pageParam = 1 }) =>
      getUsers({ pageParam }, searchParams.toString(), limit),
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasMore) return undefined;
      return lastPage.page + 1;
    },

    keepPreviousData: true,
  });
}
