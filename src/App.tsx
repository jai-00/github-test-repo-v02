import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { loader as tokenAuthLoader } from "./loaders/RootComponentRouterFunctions";

import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import RootComponent from "./pages/RootComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: tokenAuthLoader,
      element: <RootComponent />,
      children: [
        {
          index: true,
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "auth",
          element: <Auth />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
