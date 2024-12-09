import { createBrowserRouter } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";

export const router = createBrowserRouter([MainRoutes], {
  future: {
    v7_fetcherPersist: true,
    v7_skipActionErrorRevalidation: true,
    v7_partialHydration: true,
    v7_normalizeFormMethod: true,
    v7_relativeSplatPath: true,
  },
});
