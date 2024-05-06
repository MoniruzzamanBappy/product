"use client";

import GuardHoc from "@/components/Shared/GuardHoc";
import { userInfo } from "@/public/userInfo";
import { observer } from "mobx-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

function UserList() {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-300">
        {userInfo.map((person) => (
          <li key={person?.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <FaUserCircle size={40} className="cursor-pointer" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person?.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person?.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                <span className="font-semibold">Role: </span>
                {person?.permission}
              </p>

              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuardHoc(observer(UserList), ["admin"]);
