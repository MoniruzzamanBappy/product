"use client";

import ErrorMessage from "@/components/Inputs/ErrorMessage";
import Label from "@/components/Inputs/Label";
import OverallError from "@/components/Inputs/OverallError";
import PasswordInput from "@/components/Inputs/PasswordInput";
import SubmitButton from "@/components/Inputs/SubmitButton";
import TextInput from "@/components/Inputs/TextInput";
import Modal from "@/components/Modal/Modal";
import NotAuthenticated from "@/components/Shared/NotAuthenticated";
import { toastSuccess } from "@/components/Shared/ToastHelpers";
import { userInfo } from "@/public/userInfo";
import { get, set } from "lodash";
import { inject, observer } from "mobx-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function SignInPage({ authStore }) {
  const { getAuth, getMe, setMe, setAuth, setPermissionGroup } = authStore;
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    overall: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  const router = useRouter();

  const validate = () => {
    let valid = true;
    if (!value.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      valid = false;
    }
    if (!value.password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      valid = false;
    }
    return valid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validate()) {
      const email = get(value, "email", "");
      const password = get(value, "password", "");
      //   map through the user info for email password match
      const user = userInfo.find(
        (user) => user?.email === email && user.password === password
      );
      if (user) {
        window.localStorage.setItem("token", user.id);
        setErrors({ ...errors, overall: "" });
        toastSuccess({ message: "Successfully Logged In" });
        setIsLoading(false);
        setMe({ ...user });
        setAuth(true);
        setPermissionGroup([user.permission]);
        router.push("/dashboard");
      } else {
        setErrors({ ...errors, overall: "Invalid Email or Password" });
      }
    }
  };

  useEffect(() => {
    if (getMe) {
      router.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NotAuthenticated>
      <title>Sign In - User & Product</title>
      <Modal title="Login Credentials" isOpen={open} onClose={onClose}>
        <div>
          <h2 className="text-xl font-semibold text-center"> User</h2>
          <p>
            <span className="text-xl font-semibold">Email: </span>
            monir@gmail.com
          </p>
          <p>
            <span className="text-xl font-semibold">Password: </span>123456
          </p>
          <h2 className="text-xl font-semibold text-center border-top">
            Admin
          </h2>
          <p>
            <span className="text-xl font-semibold">Email: </span>
            bappy@gmail.com
          </p>
          <p>
            <span className="text-xl font-semibold">Password: </span>123abc
          </p>
        </div>
      </Modal>
      <div className="flex justify-center items-center h-[90vh] ">
        <div className="md:w-[450px] bg-white p-4 rounded-lg">
          <h1 className="text-center text-2xl font-bold mb-2 uppercase">
            Sign In
          </h1>
          <form onSubmit={onSubmit}>
            {errors.overall && (
              <OverallError className="mb-4" message={errors.overall} />
            )}
            <div className="my-3 flex flex-col">
              <Label>User Email</Label>
              <TextInput
                type="email"
                value={value.email}
                placeholder="Enter your Email"
                error={errors.email}
                required={true}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              {errors.email && <ErrorMessage message={errors.email} />}
            </div>
            <div className="my-3 flex flex-col">
              <Label>Password</Label>
              <PasswordInput
                value={value.password}
                placeholder="Enter your Password"
                error={errors.password}
                required={true}
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
              />
              {errors.password && <ErrorMessage message={errors.password} />}
              <SubmitButton
                className="mt-5"
                block={true}
                onSubmit={onSubmit}
                isLoading={isLoading}
              >
                Sign In
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
    </NotAuthenticated>
  );
}

export default inject("authStore")(observer(SignInPage));
