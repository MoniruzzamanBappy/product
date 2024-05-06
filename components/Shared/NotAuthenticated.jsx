"use client";

import { inject, observer } from "mobx-react";
import { useRouter } from "next/navigation";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { logout } from "@/utilities/authHelper";
import { userInfo } from "@/public/userInfo";

function NotAuthenticated({ authStore, children }) {
  const { getAuth, getMe } = authStore;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const router = useRouter();

  const onCallMeApi = () => {
    if (getMe) {
      router.push("/dashboard");
      return;
    }

    const token =
      typeof window !== "undefined"
        ? window?.localStorage?.getItem("token")
        : "";
    if (isEmpty(token)) {
      setData({});
      setIsLoading(false);
      return;
    }
    const handleActionOnMeApiCall = (data) => {
      if (isEmpty(data)) {
        logout({ router });
      } else {
        router.push("/dashboard");
      }
      setIsLoading(false);
    };
    if (token) {
      const user = userInfo.find((user) => user?.id === token);
      handleActionOnMeApiCall(user);
      setData({ ...user });
    }
  };
  useEffect(() => {
    onCallMeApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoading && isEmpty(data)) {
    return children;
  }
}

export default inject("authStore")(observer(NotAuthenticated));
