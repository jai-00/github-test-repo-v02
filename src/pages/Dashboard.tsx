import { useSubmit } from "react-router-dom";

function Dashboard() {
  const submit = useSubmit();
  return (
    <>
      <button
        className="no-caret"
        onClick={() => {
          submit(null, { action: "/logout", method: "post" });
        }}
      >
        Remove Authorization
      </button>
      <div className="no-caret">Dashboard</div>
    </>
  );
}

export default Dashboard;
