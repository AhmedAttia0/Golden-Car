import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RemoteService } from "../api/Service";

const service = new RemoteService();

const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => service.createBooking(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["bookings"]); // عمل refetch للحجوزات
    },
  });
};

export default useCreateBooking;
