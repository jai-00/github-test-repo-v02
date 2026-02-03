import { useSearchParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthForm() {
  const [searchParams] = useSearchParams();

  const isLogin: boolean = searchParams.get("mode") === "login";

  return <>{isLogin ? <LoginForm /> : <SignupForm />}</>;
}
