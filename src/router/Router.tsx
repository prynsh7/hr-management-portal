import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import DashboardLayout from "../layouts/DashbaordLayout";
import { Loading } from "../components/common/loader/loader";
import RequireAuth from "../requireAuth";

const Department = lazy(() => import("../pages/master/department"));

type Props = {};

const Router = (props: Props) => {
  const a = 1;
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout children={<Home />} />} />

      <Route
        path="/department"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <DashboardLayout>
                <Department />
              </DashboardLayout>
            </RequireAuth>
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
