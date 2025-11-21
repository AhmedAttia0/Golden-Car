// import { queryClient } from "../queryClient";
// import { getCars } from "../Services/dataService";

// export async function carsLoader({ request }) {
//   const url = new URL(request.url);
//   const page = Number(url.searchParams.get("page")) || 1;
//   const limit = Number(url.searchParams.get("limit")) || 10;

//   return queryClient.ensureQueryData({
//     queryKey: ["cars", page, limit],
//     queryFn: () => getCars(page, limit),
//   });
// }
