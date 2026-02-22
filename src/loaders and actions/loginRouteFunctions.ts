import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { fetchFunction } from "../backend replica/authData";

export async function action({ request }: ActionFunctionArgs) {
  const userInputData = await request.formData();
  const inputData = Object.fromEntries(userInputData);
  const response: Response = await fetchFunction(
    "https://localhost:4000/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    },
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Unable to connect with the backend." }),
      { status: 400 },
    );
  }

  const data = await response.json();
  const token = data.accessToken;

  localStorage.setItem("accessToken", token);
  return redirect("/dashboard");
}
