

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Rules from "../pages/Rules";
import HayDay from "../pages/HayDay";
import Minecraft from "../pages/Minecraft"
import FiveM from "../pages/FiveM";
import Container from "../layouts/Container";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import Arena from "../pages/Arena";
import Credit from "../pages/Credit";
import Bank from "../pages/Bank";
import Promotion from "../pages/Promotion";
import Game from "../pages/Game";

import CheckOrder from "../pages/admin/CheckOrder";
import ChangPassword from "../pages/ChangePassword";

const router = createBrowserRouter([
  {
    path: "login",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Container />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "hayday",
        element: <HayDay />,
      },
      {
        path: "arena",
        element: <Arena />,
      },
      {
        path: "fivem",
        element: <FiveM />,
      },
      {
        path: "minecraft",
        element: <Minecraft />,
      },
      {
        path: "credit",
        element: <Credit />,
      },
      {
        path: "bank",
        element: <Bank />,
      },
      {
        path: "promotion",
        element: <Promotion />,
      },
      {
        path: "checkorder",
        element: <CheckOrder />,
      },
      {
        path: "changepassword",
        element: <ChangPassword />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
