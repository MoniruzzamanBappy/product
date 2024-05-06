"use client";
import { LINKS } from "@/constants/Links";
import { logout } from "@/utilities/authHelper";
import { isEmpty } from "lodash";
import { inject, observer } from "mobx-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { userInfo } from "@/public/userInfo";

export default function GuardHoc(Component, role = []) {
  const Authenticated = (props) => {
    const { authStore } = props;
    const {
      setAuth,
      setMe,
      setSettings,
      setPermissionGroup,
      getAuth,
      getMe,
      permissionGroup,
    } = authStore;
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const token =
      typeof window !== "undefined"
        ? window?.localStorage?.getItem("token")
        : "";

    const isAuthenticated = getAuth;
    const hasPermission = permissionGroup.some((r) => role.includes(r));
    const onClear = () => {
      setAuth(false);
      setMe(null);
      setSettings({});
      setPermissionGroup({});
    };
    const callAuthApi = () => {
      const user = userInfo.find((user) => user?.id === token);
      if (isEmpty(user)) {
        onClear();
        logout(router);
        return;
      } else {
        setMe({ ...user });
        setAuth(true);
        setPermissionGroup([user.permission]);
      }
      setLoading(false);
    };

    useEffect(() => {
      if (token) {
        callAuthApi();
      } else {
        onClear();
        setLoading(false);
        logout(router);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (!loading && isEmpty(getMe)) {
        router.push("/sign-in");
      }
    }, [loading, getMe, router]);

    if (loading) {
      return (
        <div className="h-screen flex justify-center items-center">
          Loading...
        </div>
      );
    }

    // if (!loading && isEmpty(getMe)) {
    //   router.push("/sign-in");
    // }

    if (isAuthenticated && !loading && !hasPermission) {
      return (
        <div className="h-96 flex justify-center items-center text-2xl font-semibold text-warning">
          Page Permission Denied
        </div>
      );
    }

    if (getAuth && isAuthenticated && hasPermission) {
      return <Component {...props} />;
    }

    return null;
  };

  Authenticated.displayName = `Authenticated(${getDisplayName(Component)})`;

  return inject("authStore", "rootStore", "uiStore")(observer(Authenticated));
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
