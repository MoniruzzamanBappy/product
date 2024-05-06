"use client";

import GuardHoc from "@/components/Shared/GuardHoc";
import { observer } from "mobx-react";
import React from "react";

function Dashboard() {
  return (
    <div className="text-center">
      <title>Dashboard - User & Product</title>
      <h1 className="text-4xl">Dashboard</h1>
      <p className="text-2xl">This is the dashboard page</p>
      <p>
        You can only see this page if you are logged in as a user or an admin.
      </p>
    </div>
  );
}

export default GuardHoc(observer(Dashboard), ["user", "admin"]);
