import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ProtectedComponent from "./utils/ProtectedComponent";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedComponent>
          <Dashboard />
        </ProtectedComponent>
      ),
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
