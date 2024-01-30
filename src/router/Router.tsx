import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import DashboardLayout from "../layouts/DashbaordLayout";
import Headings from "../pages/DesignReference/Headings";
import FormFields from "../pages/DesignReference/FormFields";
import Buttons from "../pages/DesignReference/Buttons";
import TableReference from "../pages/DesignReference/TableReference";
import Department from "../pages/master/Department";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout children={<Home />} />} />

      {/* Design References */}
      <Route
        path="/headings"
        element={<DashboardLayout children={<Headings />} />}
      />
      <Route
        path="/form"
        element={<DashboardLayout children={<FormFields />} />}
      />
      <Route
        path="/buttons"
        element={<DashboardLayout children={<Buttons />} />}
      />
      <Route
        path="/table"
        element={<DashboardLayout children={<TableReference />} />}
      />
      <Route
        path="/department"
        element={<DashboardLayout children={<Department />} />}
      />
    </Routes>
  );
};

export default Router;
