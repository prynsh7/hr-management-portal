import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Topbar from "../components/common/partial/topbar";
import { ICONS } from "../assets/icons";
import type { MenuProps } from "antd";

type Props = {
  children?: React.ReactNode;
};
const DashboardLayout = (props: Props) => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const [authState, setAuthState] = useState(true);

  const onClickMenuItem = (e: any) => {
    setSelectedKey(e.key);
    // navigate(keyRouteMap[e.key])
  };

  const location = useLocation();
  console.log(location.pathname);

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    path?: string,
    className?: string,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      path,
      className,
      type,
    } as MenuItem;
  }

  const items = [
    {
      key: "1",
      icon: (
        <img
          src={ICONS.SIDEBAR_DASHBOARD}
          className="w-[18px] h-[18px]"
          alt=""
        />
      ),
      label: "Dashboard",
      path: "/",
    },
    {
      key: "2",
      icon: (
        <img src={ICONS.SIDEBAR_OFFERS} className="w-[18px] h-[18px]" alt="" />
      ),
      label: "Master",
      path: "/offers",
      type: "subMenu",
      children: [
        {
          key: "2-1",
          icon: (
            <img
              src={ICONS.SIDEBAR_REQUESTS}
              className="w-[18px] h-[18px]"
              alt=""
            />
          ),
          label: "Department",
          path: "/department",
        },
        {
          key: "2-2",
          icon: (
            <img src={ICONS.SIDEBAR_OFFERS} className="w-[18px] h-[18px]" alt="" />
          ),
          label: "Job Position",
          path: "/jobposition",
        },
        {
          key: "2-3",
          icon: (
            <img src={ICONS.SIDEBAR_OFFERS} className="w-[18px] h-[18px]" alt="" />
          ),
          label: "Documents",
          path: "/document-category",
        },
        {
          key: "2-4",
          icon: (
            <img src={ICONS.SIDEBAR_OFFERS} className="w-[18px] h-[18px]" alt="" />
          ),
          label: "Holiday",
          path: "/holiday",
        },
      ],
    },

    {
      key: "3",
      icon: (
        <img src={ICONS.SIDEBAR_PROFILE} className="w-[18px] h-[18px]" alt="" />
      ),
      label: "Profile",
      path: "/profile",
    },
    {
      key: "4",
      icon: (
        <img
          src={ICONS.SIDEBAR_SETTINGS}
          className="w-[18px] h-[18px]"
          alt=""
        />
      ),
      label: "Settings",
      path: "/settings",
    },
  ];

  // const items2 = [
  //   getItem(
  //     "Dashboard",
  //     "1",
  //     <img
  //       src={ICONS.SIDEBAR_DASHBOARD}
  //       className="w-[18px] h-[18px]"
  //       alt=""
  //     />,
  //     "/dashboard",
  //     `my-1 flex gap-2 py-3 cursor-pointer rounded-0 m-0 rounded-none px-6 ${location.pathname == "/dashboard"
  //       ? "bg-bg_light border-l-4 border-primary"
  //       : "text-black"
  //     } ${collapsed ? "" : "pl-[20px]"}`
  //   ),
  //   getItem(
  //     "Requests",
  //     "2",
  //     <img src={ICONS.SIDEBAR_REQUESTS} className="w-[18px] h-[18px]" alt="" />,
  //     "",
  //     "",
  //     [getItem("Requests", "2-1"), getItem("Completed", "2-2")]
  //   ),
  //   getItem(
  //     "Offers",
  //     "3",
  //     <img src={ICONS.SIDEBAR_OFFERS} className="w-[18px] h-[18px]" alt="" />,
  //     "/offers",
  //     `my-1 flex gap-2 py-3 cursor-pointer px-6 ${location.pathname == "/offers"
  //       ? "bg-bg_light border-l-4 border-primary"
  //       : "text-black"
  //     } ${collapsed ? "" : "pl-[20px]"}`
  //   ),
  //   getItem(
  //     "Profile",
  //     "4",
  //     <img src={ICONS.SIDEBAR_PROFILE} className="w-[18px] h-[18px]" alt="" />,
  //     "/profile",
  //     `my-1 flex gap-2 py-3 cursor-pointer px-6 ${location.pathname == "/profile"
  //       ? "bg-bg_light border-l-4 border-primary"
  //       : "text-black"
  //     } ${collapsed ? "" : "pl-[20px]"}`
  //   ),
  //   getItem(
  //     "Settings",
  //     "5",
  //     <img src={ICONS.SIDEBAR_SETTINGS} className="w-[18px] h-[18px]" alt="" />,
  //     "/settings",
  //     `my-1 flex gap-2 py-3 cursor-pointer px-6 ${location.pathname == "/settings"
  //       ? "bg-bg_light border-l-4 border-primary"
  //       : "text-black"
  //     } ${collapsed ? "" : "pl-[20px]"}`
  //   ),
  // ];

  const navigate = useNavigate();

  const handleSignout = () => {
    // handleLogout();
    navigate("/admin/login");
  };

  return (
    <div>
      <div className="flex">
        <Menu
          onClick={onClickMenuItem}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]} // Open the "sub1" submenu by default
          mode="inline"
          style={{
            width: !collapsed ? "260px" : "64px",
            backgroundColor: "#FFFFFF",
            minHeight: "100vh",
            maxHeight: "100vh",
            border: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
          selectedKeys={[selectedKey]}
          inlineCollapsed={collapsed}
        >
          <div
            className={`flex mt-2 justify-start ${collapsed ? "pl-[14px]" : "pl-[20px]"
              }`}
          >
            <div
              className="rounded-[12px] p-2 h-[35px] w-[35px] border border-border_light flex items-center justify-center cursor-pointer"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              {collapsed ? (
                <img src={ICONS.SIDEBAR_CROSS} alt="" />
              ) : (
                <img src={ICONS.SIDEBAR_HAMBURGER} alt="" />
              )}
            </div>
          </div>
          <div
            className={`flex h-[60px] justify-start mt-8 items-center gap-3 mb-5 ${collapsed ? "pl-[14px]" : "pl-[20px]"
              }`}
          >
            <div className="h-[34px] w-[34px] bg-primary"></div>
            {collapsed ? null : (
              <div className=" w-full text-xl truncate">CATALYSTS</div>
            )}
          </div>

          {items.map((item) => {
            if (item.type === "subMenu" && item.children) {
              return (
                <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
                  {item.children.map((subItem) => (
                    <Menu.Item key={subItem.key} onClick={() => navigate(subItem.path)}>
                      {/* Updated: Wrapping icon and text in a div with a flex class */}
                      <div className="flex items-center gap-2">
                        {subItem.icon}
                        <div className="text-sm truncate">{subItem.label}</div>
                      </div>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else {
              return (
                <div
                  key={item.key}
                  onClick={() => navigate(item.path)}
                  className={`my-1 flex gap-2 py-3 cursor-pointer px-6 hover:bg-bg_light hover:border-l-4 hover:border-primary hover:pl-[16px] ${location.pathname === item.path
                    ? "bg-bg_light border-l-4 border-primary pl-[16px]"
                    : "text-black pl-[20px]"
                    } ${collapsed ? "" : ""}`}
                >
                  {item.icon}
                  <div className="text-sm truncate">{item.label}</div>
                </div>
              );
            }
          })}
        </Menu>
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
