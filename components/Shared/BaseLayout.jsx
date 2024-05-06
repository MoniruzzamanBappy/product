"use client";

import { inject, observer } from "mobx-react";
import Head from "next/head";
import React from "react";

import Sidebar from "./Sidebar";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), { ssr: false });

function BaseLayout({ authStore, children }) {
  const { getAuth } = authStore;
  return (
    <div className={`min-h-screen`}>
      <Head>
        <title>User Product</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="User Product" key="title" />

        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      {getAuth && <Sidebar />}

      <div
        className={`min-h-screen flex flex-col ${
          getAuth ? "mmd:ml-56" : "ml-0"
        }`}
      >
        <Header />
        <div
          className={`p-4 print:p-0 flex flex-col flex-1 ${
            getAuth && "mmd:m-4"
          } bg-primary`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default inject("authStore")(observer(BaseLayout));
