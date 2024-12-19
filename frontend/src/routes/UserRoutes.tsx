import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import UserLayouts from "@/layouts/UserLayouts";

const AboutPage = React.lazy(() => import("@/pages/about/AboutPage"));

export const UserRoutes = {
  path: "/me",
  element: <UserLayouts />,
  errorElement: <NotFound />,
  children: [
    {
      path: "about",
      element: (
        <Suspense fallback={<Loading />}>
          <AboutPage />
        </Suspense>
      ),
    },
  ],
};
