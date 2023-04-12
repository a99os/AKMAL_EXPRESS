import axios from "@/Service/axios";
export default async function checkToken(token) {
  if (!token) {
    return false;
  }
  const result = await axios.post(
    "/admin/checktoken/" + localStorage.getItem("token")
  );
  return result;
}
