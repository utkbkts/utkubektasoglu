import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import MainLayouts from "@/layouts/MainLayouts";

const FullStackDeveloper = React.lazy(
  () => import("@/pages/developer-fullstack/FullStackDeveloper")
);
const FrontEndDeveloper = React.lazy(
  () => import("@/pages/developer-fullstack/FrontendDeveloper")
);
const BackendDeveloper = React.lazy(
  () => import("@/pages/developer-fullstack/BackendDeveloper")
);
const ReactFundamentals = React.lazy(
  () => import("@/pages/fundamentals/ReactFundamentals")
);
const ApiIntegration = React.lazy(
  () => import("@/pages/fundamentals/ApiIntegration")
);
const DatabaseOptimization = React.lazy(
  () => import("@/pages/fundamentals/DatabaseOptimization")
);
const TagsDetails = React.lazy(() => import("@/pages/TagsDetails/TagsDetails"));
const Golang = React.lazy(() => import("@/pages/programmers/Go"));
const Python = React.lazy(() => import("@/pages/programmers/Python"));
const Typescript = React.lazy(() => import("@/pages/programmers/Typescript"));
const Javascript = React.lazy(() => import("@/pages/programmers/Javascript"));

const HomePage = React.lazy(() => import("@/pages/home/HomePage"));
const DetailBlog = React.lazy(() => import("@/pages/details/DetailBlog"));
const Auth = React.lazy(() => import("@/pages/auth/Auth"));

const Contact = React.lazy(() => import("@/pages/contact/Contact"));

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
    {
      path: "/tags/:name",
      element: (
        <Suspense fallback={<Loading />}>
          <TagsDetails />
        </Suspense>
      ),
    },
    {
      path: "auth",
      element: (
        <Suspense fallback={<Loading />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "javascript",
      element: (
        <Suspense fallback={<Loading />}>
          <Javascript />
        </Suspense>
      ),
    },
    {
      path: "typescript",
      element: (
        <Suspense fallback={<Loading />}>
          <Typescript />
        </Suspense>
      ),
    },
    {
      path: "python",
      element: (
        <Suspense fallback={<Loading />}>
          <Python />
        </Suspense>
      ),
    },
    {
      path: "go",
      element: (
        <Suspense fallback={<Loading />}>
          <Golang />
        </Suspense>
      ),
    },
    {
      path: "contact",
      element: (
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      ),
    },
  ],
};
