import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="no-caret"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/auth");
        }}
      >
        Remove Authorization
      </button>
      <div className="no-caret">Dashboard</div>
    </>
  );
}

export default Dashboard;
