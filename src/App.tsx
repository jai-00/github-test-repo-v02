import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
  loader as tokenAuthLoader,
  // action as formSubmitAction,
} from "./loaders and actions/RootComponentRouterFunctions";
import { loader as authRouterLoader } from "./loaders and actions/AuthRouterFunctions";
import { action as loginRouteAction } from "./loaders and actions/loginRouteFunctions";
import { action as signupRouteAction } from "./loaders and actions/signupRouteFunctions";
import { action as logoutAction } from "./loaders and actions/logoutPathFunction";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import RootComponent from "./pages/RootComponent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // loader: tokenAuthLoader,
      element: <RootComponent />,
      children: [
        { index: true, loader: tokenAuthLoader },
        {
          // index: true,
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "auth",
          element: <Auth />,
          loader: authRouterLoader,
          children: [
            {
              index: true,
              loader: () => {
                return redirect("/auth/login");
              },
            },
            {
              path: "login",
              element: <Login />,
              action: loginRouteAction,
            },
            {
              path: "signup",
              element: <Signup />,
              action: signupRouteAction,
            },
            {
              path: "*",
              loader: () => redirect("/auth/signup"),
            },
          ],
        },
        {
          path: "logout",
          action: logoutAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
