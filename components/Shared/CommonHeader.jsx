"use client";

import { inject, observer } from "mobx-react";
import React, { useState } from "react";

function CommonHeader({ authStore }) {
  const { permissionGroup } = authStore;
  const isAdmin = permissionGroup.includes("admin");
  return (
    <div className="border-t rounded-md bg-defaultBg">
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div className="text-2xl font-semibold mb-2 md:mb-0">Product List</div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {isAdmin && (
            <div className="w-full">
              <button className="bg-default w-full hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                Add Product
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default inject("authStore")(observer(CommonHeader));
