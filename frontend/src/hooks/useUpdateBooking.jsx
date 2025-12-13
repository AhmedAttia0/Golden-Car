import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoteService } from "../api/Service";

const service = new RemoteService();

const useUpdateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => service.updateBooking(id, data),

    onSuccess: () => {
      // نعمل refetch للحجوزات
      queryClient.invalidateQueries(["bookings"]);
    },
  });
};

export default useUpdateBooking;
