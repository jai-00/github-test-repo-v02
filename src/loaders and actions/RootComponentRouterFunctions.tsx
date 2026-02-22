import {
  redirect,
  // type ActionFunctionArgs
} from "react-router-dom";
import { getToken } from "../utils/token";

export function loader() {
  const token = getToken();

  if (token) {
    return redirect("/dashboard");
  }
  return redirect("/auth/login");
}

// export async function action({ request }: ActionFunctionArgs) {
//   const userInputData = await request.formData();
//   const inputData = Object.fromEntries(userInputData);
//   // console.log(inputData);
//   console.log(JSON.stringify(inputData.email));
//   return redirect("/dashboard");
// }
