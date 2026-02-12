import { getToken } from "../utils/token";

export default function loader() {
  const token = getToken();
  return token;
}
