import { useNavigate } from "react-router-dom";
import { getToken } from "./token";
import { useEffect } from "react";

type ProtectedComponentProp = {
  children?: React.ReactNode;
};

function ProtectedComponent({ children }: ProtectedComponentProp) {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [navigate, token]);

  return children;
}

export default ProtectedComponent;
