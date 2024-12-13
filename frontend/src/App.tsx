import { RouterProvider } from "react-router-dom";
import { router } from "./routes/global-routes";
import React, { Suspense, useEffect } from "react";
import { useUserStore } from "./store/AuthStore";
const App = () => {
  const { checkAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <React.Fragment>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
