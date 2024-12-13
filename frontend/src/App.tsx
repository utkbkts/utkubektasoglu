import { RouterProvider } from "react-router-dom";
import { router } from "./routes/global-routes";
import React, { Suspense, useEffect } from "react";
import { useUserStore } from "./store/AuthStore";
const App = () => {
  const { user, checkAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, []);

  console.log("🚀 ~ App ~ user:", user);
  return (
    <React.Fragment>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
