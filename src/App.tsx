import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  loader as tokenAuthLoader,
  // action as formSubmitAction,
} from "./loaders and actions/RootComponentRouterFunctions";
import { action as authRouterAction } from "./loaders and actions/AuthRouterFunctions";
import { action as logoutAction } from "./loaders and actions/logoutPathFunction";
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
          action: authRouterAction,
        },
        {
          path: "/logout",
          action: logoutAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
