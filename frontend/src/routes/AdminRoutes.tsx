import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import AdminLayouts from "@/layouts/AdminLayouts";
import { AdminLoaders } from "@/loaders/AdminLoaders";

const CreateForm = React.lazy(
  () => import("@/pages/admin/createForm/CreateForm")
);

const DashboardAdmin = React.lazy(
  () => import("@/pages/admin/dashboard/Dashboard")
);

const UsersAll = React.lazy(() => import("@/pages/admin/users/Users"));

const Settings = React.lazy(() => import("@/pages/admin/settings/Settings"));

export const AdminRoutes = {
  path: "/admin",
  element: <AdminLayouts />,
  errorElement: <NotFound />,
  loader: () => AdminLoaders("admin"),
  children: [
    {
      path: "dashboard",
      element: (
        <Suspense fallback={<Loading />}>
          <DashboardAdmin />
        </Suspense>
      ),
    },
    {
      path: "create",
      element: (
        <Suspense fallback={<Loading />}>
          <CreateForm />
        </Suspense>
      ),
    },
    {
      path: "create/:title/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <CreateForm />
        </Suspense>
      ),
    },
    {
      path: "users",
      element: (
        <Suspense fallback={<Loading />}>
          <UsersAll />
        </Suspense>
      ),
    },
    {
      path: "settings",
      element: (
        <Suspense fallback={<Loading />}>
          <Settings />
        </Suspense>
      ),
    },
  ],
};
