import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  return (
    <>
      <div>Auth</div>
      <button
        onClick={() => {
          localStorage.setItem("token", "abcd");
          navigate("/");
        }}
      >
        Add auth
      </button>
    </>
  );
}

export default Auth;
