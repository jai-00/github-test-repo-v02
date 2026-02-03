import { Navigate } from "react-router-dom";
import { getToken } from "./token";

type ProtectedComponentProp = {
  children?: React.ReactNode;
};

function ProtectedComponent({ children }: ProtectedComponentProp) {
  const token = getToken();

  if (!token) {
    return <Navigate to="/signup" replace />;
  }

  return children;
}

export default ProtectedComponent;
