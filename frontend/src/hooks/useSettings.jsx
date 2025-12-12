import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../Services/dataService";

export default function useSettings() {
  const res = useQuery({
    queryKey: ["settings"],
    queryFn: () => getSettings(),
  });

  return res;
}
