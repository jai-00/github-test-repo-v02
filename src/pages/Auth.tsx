import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { Form, Link } from "react-router-dom";
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

  // return <>{isLogin ? <LoginForm /> : <SignupForm />}</>;
  return (
    <div className="form-parent-container">
      <div className="form-container ">
        <h1 className="not-selectable hidden-caret form-title ">
          {isLogin ? "Login Form" : "Signup Form"}
        </h1>
        <Form method="post" className="form-component ">
          {isLogin ? <LoginForm /> : <SignupForm />}
        </Form>
      </div>
      <div className="switch-auth-form">
        {isLogin ? (
          <Link to={"/auth?mode=signup"}>Create a new account</Link>
        ) : (
          <p>
            Already have an account ? <Link to={"/auth?mode=login"}>Login</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Auth;
