"use client";

import { LINKS } from "@/constants/Links";
import { logout } from "@/utilities/authHelper";
import { Menu, Transition } from "@headlessui/react";

import { get } from "lodash";
import { inject, observer } from "mobx-react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

import Logo from "./../../public/favicon.png";
import { BiCart } from "react-icons/bi";

const AvatarIcon = () => {
  return (
    <div className="w-10 h-10 relative">
      <FaUserCircle size={40} className="cursor-pointer" />
      <div className="absolute right-0 bottom-0 bg-green-500 w-2.5 h-2.5 border-2 border-white rounded-full"></div>
    </div>
  );
};

function Header({ uiStore, authStore }) {
  const { toggleSidebar } = uiStore;
  const { getMe, getAuth } = authStore;
  const [cartData, setCartData] = useState([]);
  const token =
    typeof window !== "undefined" ? localStorage?.getItem("token") : "";

  const router = useRouter();

  const cartLength = cartData?.length;

  useEffect(() => {
    // check in every 3 seconds
    const interval = setInterval(() => {
      const cart =
        typeof window !== "undefined" && window?.localStorage?.getItem("cart");
      const cartData = JSON.parse(cart);
      setCartData(cartData);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    logout(router);
  };

  const userName = get(getMe, "name", "");

  const handleImage = () => {
    router.push("/");
  };

  const handleCart = () => {
    router.push("/checkout");
  };

  return (
    <div
      className={`h-16 z-20 pr-3 flex flex-row justify-between items-center bg-gray-100 shadow-lg sticky top-0 border-b border-gray-500 ${
        getAuth && "mmd:justify-end"
      }`}
    >
      {getAuth ? (
        <button className="mmd:hidden px-5 text-accent" onClick={toggleSidebar}>
          <HiMenu size={20} />
        </button>
      ) : (
        !token && (
          <div className="pb-0 pt-2 ml-4">
            <div
              onClick={handleImage}
              className="relative cursor-pointer mx-auto w-10 h-10"
            >
              <Image
                src={Logo}
                alt="WN Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        )
      )}
      {getAuth ? (
        <div className="flex gap-1 items-center">
          <div
            onClick={handleCart}
            className="cursor-pointer p-1 relative hover:bg-slate-400 hover:text-green-900 flex justify-center items-center border-2 rounded-full text-black"
          >
            {cartLength > 0 && (
              <span class="absolute top-0 right-0 flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
            )}
            <BiCart size={30} />
          </div>
          <Menu as="div" className="relative">
            <Menu.Button
              as="div"
              className="cursor-pointer rounded-md m-4 text-sm font-medium text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              <AvatarIcon />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-1 mr-3 w-48 origin-top-right divide-y divide-borderColor rounded-md bg-primary shadow-lg drop-shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-4 py-2 flex flex-row items-center">
                  <AvatarIcon />
                  <div className="flex flex-col px-3">
                    <span className="text-sm font-bold text-accent">
                      {userName}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <Menu.Item>
                    <span
                      className="text:sm py-3 px-4 text-accent hover:bg-default cursor-pointer"
                      onClick={handleLogout}
                    >
                      Log Out
                    </span>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        !token && (
          <div className="flex flex-row justify-between items-center mmd:justify-end gap-4">
            <Link
              href={LINKS.signin.path}
              rel="noopener noreferrer"
              prefetch={false}
              className="block text-base border-2 px-4 py-[6px] rounded-lg hover:bg-secondary hover:text-white"
            >
              {LINKS.signin.title}
            </Link>
          </div>
        )
      )}
    </div>
  );
}

export default inject("uiStore", "authStore")(observer(Header));
