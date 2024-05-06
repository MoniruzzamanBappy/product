import { inject, observer } from "mobx-react";
import Image from "next/legacy/image";
import React, { forwardRef } from "react";
import isEqual from "react-fast-compare";
import { FaBoxOpen, FaTachometerAlt, FaUser } from "react-icons/fa";
import { PiUsersFill } from "react-icons/pi";

import { LINKS } from "../../constants/Links";
import Logo from "./../../public/favicon.png";
import SidebarMenu from "./SidebarMenu";
import { VERSION } from "@/constants/Constant";

const Sidebar = forwardRef(({ uiStore, authStore }, ref) => {
  const { isSidebarOpen, toggleSidebar, currentExpandedMenus } = uiStore;

  const { permissionGroup } = authStore;

  const isUser = permissionGroup.includes("user");
  const isAdmin = permissionGroup.includes("admin");

  const SidebarHeaderItem = (
    <div className="pb-0 pt-2">
      <div className="relative mx-auto w-10 h-10">
        <Image src={Logo} alt="WN Logo" layout="fill" objectFit="contain" />
      </div>
    </div>
  );

  const SidebarFooterItem = (
    <div className="mt-auto border-top list-none">
      <div className="text-center text-xs py-[2px]">
        <span className="text-gray-400">{"Version: " + VERSION}</span>
      </div>
    </div>
  );

  const DashboardItem = (
    <SidebarMenu
      active={currentExpandedMenus.includes("dashboard")}
      title={LINKS.dashboard.title}
      isPermitted={isAdmin || isUser}
      path={LINKS.dashboard.path}
      Icon={<FaTachometerAlt size={18} className="mr-4 w-5" />}
      expandMenuList={["dashboard"]}
      checkExpandMenu={"dashboard"}
      step={1}
    />
  );

  const Profile = (
    <SidebarMenu
      active={currentExpandedMenus.includes("profile")}
      title={LINKS.profile.title}
      isPermitted={isAdmin || isUser}
      path={LINKS.profile.path}
      Icon={<FaUser size={18} className="mr-4 w-5" />}
      expandMenuList={["profile"]}
      checkExpandMenu={"profile"}
      step={1}
    />
  );

  const Product = (
    <SidebarMenu
      active={currentExpandedMenus.includes("product")}
      title={LINKS.product.title}
      isPermitted={isAdmin || isUser}
      path={LINKS.product.path}
      Icon={<FaBoxOpen size={18} className="mr-4 w-5" />}
      expandMenuList={["product"]}
      checkExpandMenu={"product"}
      step={1}
    />
  );
  const UserList = (
    <SidebarMenu
      active={currentExpandedMenus.includes("user-list")}
      title={LINKS.userList.title}
      isPermitted={isAdmin}
      path={LINKS.userList.path}
      Icon={<PiUsersFill size={18} className="mr-4 w-5" />}
      expandMenuList={["user-list"]}
      checkExpandMenu={"user-list"}
      step={1}
    />
  );

  return (
    <>
      <button
        className={`fixed print:hidden z-40 cursor-default inset-0 bg-slate-400 transition ${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></button>
      <aside
        className={`fixed bg-darkSidebar print:hidden z-40 top-0 transition-[left] duration-200 ${
          isSidebarOpen ? "mmd:left-0 left-0" : "mmd:left-0 -left-56"
        } w-56 h-screen flex flex-col z-10`}
      >
        {SidebarHeaderItem}
        <nav className="mt-6 relative overflow-y-scroll scrollbar-hide">
          <h6 className="text-xs font-bold px-4 mb-2">{"MAIN"}</h6>
          <ul className="text-sm">{DashboardItem}</ul>
          <div>
            <h6 className="text-xs font-bold px-4 mt-3 mb-2">{"COMPONENTS"}</h6>
            <ul className="text-sm">{Profile}</ul>
            <ul className="text-sm">{Product}</ul>
            <ul className="text-sm">{UserList}</ul>
          </div>
        </nav>
        {SidebarFooterItem}
      </aside>
    </>
  );
});

Sidebar.displayName = "Sidebar";

export default React.memo(
  inject("uiStore", "authStore")(observer(Sidebar)),
  isEqual
);
