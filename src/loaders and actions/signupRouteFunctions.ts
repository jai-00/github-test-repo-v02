import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { fetchFunction } from "../backend replica/authData";

export async function action({ request }: ActionFunctionArgs) {
  const userEnteredData = await request.formData();
  const inputData = Object.fromEntries(userEnteredData) as {
    email: string;
    occupation?: string | "" | null;
    gender: "male" | "female" | "other";
    password: string;
    conf_Password: string;
  };
  //   console.log(inputData);
  if (inputData.conf_Password !== inputData.password) {
    return new Response(JSON.stringify({ message: "Password don't match" }), {
      status: 412,
    });
  }

  //   console.log("password matched");
  const response = await fetchFunction("https://localhost:4000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  });

  //   console.log("got a response");
  const data = await response.json();
  //   console.log("response data: " + data);
  if (response.status === 400) {
    throw new Response(JSON.stringify({ message: data.message }), {
      status: response.status,
    });
  }

  if (response.status === 409) {
    throw new Response(JSON.stringify({ message: data.message }), {
      status: 409,
    });
  }

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Unable to sign you up at the moment." }),
      { status: 404 },
    );
  }

  const token = data.accessToken;
  //   console.log("token : " + token);
  localStorage.setItem("accessToken", token);
  return redirect("/dashboard");
}
