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
    <div>
      <div className="flex">
        <Sidebar />
        <div
          className={`grow bg-main_bg relative ${location.pathname === "/profile" ? "pt-6" : "p-6"
            }`}
        >
          <div className={`${location.pathname === "/profile" ? "px-6" : ""}`}>
            <Topbar />
          </div>

          {authState && props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
