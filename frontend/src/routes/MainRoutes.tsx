import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import MainLayouts from "@/layouts/MainLayouts";
import FullStackDeveloper from "@/pages/developer-fullstack/FullStackDeveloper";
import FrontEndDeveloper from "@/pages/developer-fullstack/FrontendDeveloper";
import BackendDeveloper from "@/pages/developer-fullstack/BackendDeveloper";
import ReactFundamentals from "@/pages/fundamentals/ReactFundamentals";
import ApiIntegration from "@/pages/fundamentals/ApiIntegration";
import DatabaseOptimization from "@/pages/fundamentals/DatabaseOptimization";

const HomePage = React.lazy(() => import("@/pages/home/HomePage"));
const DetailBlog = React.lazy(() => import("@/pages/details/DetailBlog"));

export const MainRoutes = {
  path: "/",
  element: <MainLayouts />,
  errorElement: <NotFound />,
  children: [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/detail/:title/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <DetailBlog />
        </Suspense>
      ),
    },
    {
      path: "/full-stack-developer",
      element: (
        <Suspense fallback={<Loading />}>
          <FullStackDeveloper />
        </Suspense>
      ),
    },
    {
      path: "/frontend-developer",
      element: (
        <Suspense fallback={<Loading />}>
          <FrontEndDeveloper />
        </Suspense>
      ),
    },
    {
      path: "/backend-developer",
      element: (
        <Suspense fallback={<Loading />}>
          <BackendDeveloper />
        </Suspense>
      ),
    },
    {
      path: "/react-fundamentals",
      element: (
        <Suspense fallback={<Loading />}>
          <ReactFundamentals />
        </Suspense>
      ),
    },
    {
      path: "/api-integration",
      element: (
        <Suspense fallback={<Loading />}>
          <ApiIntegration />
        </Suspense>
      ),
    },
    {
      path: "/database-optimization",
      element: (
        <Suspense fallback={<Loading />}>
          <DatabaseOptimization />
        </Suspense>
      ),
    },
  ],
};
