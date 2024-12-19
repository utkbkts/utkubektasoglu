import { createBrowserRouter } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";
import { AdminRoutes } from "./AdminRoutes";
import { UserRoutes } from "./UserRoutes";

export const router = createBrowserRouter(
  [MainRoutes, AdminRoutes, UserRoutes],
  {
    future: {
      v7_fetcherPersist: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
    },
  }
);
