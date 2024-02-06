import React, { useState } from "react";
import Topbar from "../components/common/partial/topbar";
import Sidebar from "../components/common/sidebar/sidebar";
import { useLocation } from "react-router-dom";

type Props = {
  children?: React.ReactNode;
};

const DashboardLayout = (props: Props) => {
  const [authState, setAuthState] = useState(true);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto relative">
        <div className="sticky top-0 z-10">
          <Topbar />
        </div>
        <div className={`${location.pathname === "/profile" ? "pt-16 px-6" : "p-6"}`}>
          {authState && props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
