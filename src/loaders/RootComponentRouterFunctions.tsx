import { getToken } from "../utils/token";

export function loader() {
  const token = getToken();
  return token;
}

export async function action() {}
