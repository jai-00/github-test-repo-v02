import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useNavigate, useSearchParams } from "react-router-dom";

const AUTH_MODES: string[] = ["login", "signup"];

function Auth() {
  const [searchParams] = useSearchParams();
  const mode: string | null = searchParams.get("mode");
  const navigate = useNavigate();

  useEffect(() => {
    if (!mode) {
      navigate("/auth?mode=login", { replace: true });
    } else if (!AUTH_MODES.includes(mode)) {
      navigate("/auth?mode=signup", { replace: true });
    }
  }, [mode, navigate]);

  const isLogin: boolean = mode === "login";

  return (
    <>{isLogin ? <LoginForm isLogin /> : <SignupForm isSignup={!isLogin} />}</>
  );
}

export default Auth;
