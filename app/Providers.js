"use client";

import BaseLayout from "@/components/Shared/BaseLayout";
import rootStore from "@/components/stores/RootStore";
import { LINKS } from "@/constants/Links";

import { configure } from "mobx";
import { Provider } from "mobx-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

configure({
  enforceActions: "always",
});

function Providers({ children }) {
  const pathname = usePathname();

  const storePathValues = () => {
    // eslint-disable-next-line no-undef
    const sessionStorage = globalThis?.sessionStorage;
    // eslint-disable-next-line no-undef
    const currentPath = globalThis?.location?.pathname;

    if (!sessionStorage) return;

    const prevPath = sessionStorage.getItem("currentPath");
    if (currentPath === LINKS.signin.path) {
      sessionStorage.setItem("prevPath", prevPath);
      return;
    }
    if (!prevPath) {
      sessionStorage.setItem("prevPath", currentPath);
      sessionStorage.setItem("currentPath", currentPath);
      return;
    }
    sessionStorage.setItem("prevPath", prevPath);
    // eslint-disable-next-line no-undef
    sessionStorage.setItem("currentPath", currentPath);
  };

  useEffect(() => {
    storePathValues();
  }, [pathname]);
  return (
    <div>
      <Provider
        rootStore={rootStore}
        uiStore={rootStore.uiStore}
        authStore={rootStore.authStore}
      >
        <BaseLayout>{children}</BaseLayout>
        <Toaster toastOptions={{ duration: 3000 }} />
      </Provider>
    </div>
  );
}

export default Providers;
