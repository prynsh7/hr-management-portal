import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashbaordLayout";
import { Loading } from "../components/common/loader/loader";
import RequireAuth from "../requireAuth";
import JobPosition from "../pages/master/JobPosition";
import Home from "../pages/home/Home";
import DocumentCategory from "../pages/master/DocumentCategory";
import Holiday from "../pages/master/Holiday";
import Employee from "../pages/master/Employee";
import EmployeeDetails from '../pages/employee/employee'

const Department = lazy(() => import("../pages/master/Department"));

type Props = {};

const Router = (props: Props) => {
  const a = 1;
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout children={<Home/>} />} />

      <Route
        path="/department"
        element={
          <React.Suspense>
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
                <DocumentCategory/>
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
                <Holiday/>
              </DashboardLayout>
            </RequireAuth>
          </React.Suspense>
        }
      />
      <Route
        path="/employee"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <DashboardLayout>
                <Employee/>
              </DashboardLayout>
            </RequireAuth>
          </React.Suspense>
        }
      />
      <Route
        path="/employee/:id"
        element={
          <React.Suspense fallback={<Loading h={"100vh"} />}>
            <RequireAuth>
              <DashboardLayout>
                <EmployeeDetails/>
              </DashboardLayout>
            </RequireAuth>
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
