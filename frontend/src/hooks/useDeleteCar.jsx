import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteCar } from "../Services/dataService";

export default function useDeleteCar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: DeleteCar,

    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
  });
}
