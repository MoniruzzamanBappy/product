import { toastSuccess } from "@/components/Shared/ToastHelpers";
import rootStore from "@/components/stores/RootStore";
import { LINKS } from "@/constants/Links";

import get from "lodash/get";

export const clearAuth = () => {
  const { authStore, uiStore } = rootStore;
  const { setCurrentExpandedMenus } = uiStore;
  const { setMe, setAuth, setPermissionGroup, setHelpers } = authStore;
  if (typeof window !== "undefined") window?.localStorage?.removeItem("token");
  setPermissionGroup([]);
  setHelpers({});
  setCurrentExpandedMenus([]);
  setMe(null);
  setAuth(false);
};

export const logout = ({ router, error } = {}) => {
  const statusCode = get(error, "response.status", "");
  const isThrottledError = statusCode === 429;
  const isServerError = statusCode >= 500 && statusCode <= 599;

  const onLogout = () => {
    clearAuth();
    router?.push(LINKS.signin.path);
  };

  onLogout();

  //   const onSuccess = () => {
  //     onLogout();
  //   };

  //   const onError = () => {
  //     onLogout();
  //   };

  //   // TODO: [REFACTOR]: Move the server error checking and routing part in different function
  //   if (isServerError || isThrottledError) {
  //     router?.push(
  //       `${LINKS.ServiceError.path}?shouldRender=true`,
  //       LINKS.ServiceError.path,
  //       {
  //         shallow: true,
  //       }
  //     );
  //   } else {
  //     ApiKit.me.logOut().then(onSuccess).catch(onError);
  //   }
};
