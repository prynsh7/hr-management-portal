import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashbaordLayout";
import { Loading } from "../components/common/loader/loader";
import RequireAuth from "../requireAuth";
import JobPosition from "../pages/master/JobPosition";
import Home from "../pages/home/home";
import DocumentCategory from "../pages/master/DocumentCategory";
import Holiday from "../pages/master/Holiday";
import Department from "../pages/master/Department";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Verify from "../pages/auth/Verify";
import SetPassword from "../pages/auth/SetPassword";

// const Department = lazy(() => import("../pages/master/Department"));

type Props = {};

const Router = (props: Props) => {
  const a = 1;
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout children={<Home />} />} />

      <Route
        path="/login"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <Login />
            </RequireAuth>
          </React.Suspense>
        }
      />

      <Route
        path="/signup"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <SignUp />
            </RequireAuth>
          </React.Suspense>
        }
      />

      <Route
        path="/forgotpassword"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <ForgotPassword />
            </RequireAuth>
          </React.Suspense>
        }
      />

      <Route
        path="/verify"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <Verify />
            </RequireAuth>
          </React.Suspense>
        }
      />

      <Route
        path="/setpassword"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <SetPassword />
            </RequireAuth>
          </React.Suspense>
        }
      />

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
      <Route
        path="/jobposition"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <DashboardLayout>
                <JobPosition />
              </DashboardLayout>
            </RequireAuth>
          </React.Suspense>
        }
      />
      <Route
        path="/document-category"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <DashboardLayout>
                <DocumentCategory />
              </DashboardLayout>
            </RequireAuth>
          </React.Suspense>
        }
      />
      <Route
        path="/holiday"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <DashboardLayout>
                <Holiday />
              </DashboardLayout>
            </RequireAuth>
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
