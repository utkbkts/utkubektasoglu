import { RouterProvider } from "react-router-dom";
import { router } from "./routes/global-routes";
import React, { Suspense } from "react";
const App = () => {
  return (
    <React.Fragment>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </React.Fragment>
  );
};

export default App;
