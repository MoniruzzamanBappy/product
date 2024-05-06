"use client";

import GuardHoc from "@/components/Shared/GuardHoc";
import { get } from "lodash";
import { observer } from "mobx-react";
import React from "react";

function Profile({ authStore }) {
  const { getMe } = authStore;
  const name = get(getMe, "name", "");
  const email = get(getMe, "email", "");
  const permission = get(getMe, "permission", "");

  const phone = get(getMe, "phone", "");
  const address = get(getMe, "address", "");
  const age = get(getMe, "age", "");
  const Card = ({ name, value }) => {
    return (
      <div className="p-4 bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
        <div>
          <span className="font-bold">{name}: </span>
          <span>{value}</span>
        </div>
      </div>
    );
  };
  return (
    <div>
      <title>Profile - User & Product</title>
      <h1 className="text-4xl font-bold text-center">
        Welcome to User & Product Profile Page
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mmd:grid-cols-3 mt-10">
        <Card name="Name" value={name} />
        <Card name="Email" value={email} />
        <Card name="Permission" value={permission} />
        <Card name="Phone" value={phone} />
        <Card name="Address" value={address} />
        <Card name="Age" value={age} />
      </div>
    </div>
  );
}

export default GuardHoc(observer(Profile), ["user", "admin"]);
