import { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";

export default function RootComponent() {
  const token = useLoaderData();
  const submit = useSubmit();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
    }
  }, [submit, token, navigate]);

  return <Outlet />;
}
