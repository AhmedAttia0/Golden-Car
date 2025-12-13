import { getBookings } from "../Services/dataService";
import { useInfiniteQuery } from "@tanstack/react-query";
export default function useInfiniteBooking(limit) {
  return useInfiniteQuery({
    queryKey: ["bookings", limit],
    queryFn: async ({ pageParam = 1 }) => getBookings({ pageParam }, limit),
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasMore) return undefined;
      return lastPage.page + 1;
    },

    keepPreviousData: true,
  });
}
