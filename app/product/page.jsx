"use client";

import CommonHeader from "@/components/Shared/CommonHeader";
import GuardHoc from "@/components/Shared/GuardHoc";
import { toastSuccess } from "@/components/Shared/ToastHelpers";
import { product } from "@/public/product";

import { get, isEqual } from "lodash";
import { observer } from "mobx-react";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";

const Card = React.memo(({ data, open, setOpen, handleCardClick, isAdmin }) => {
  const id = get(data, "id", "");
  const image = get(data, "image", "");
  const name = get(data, "title", "");
  const price = get(data, "price", "");
  const description = get(data, "description", "");
  const rating = get(data, "rating.rate", "");

  const handleDot = () => {
    open == id ? setOpen("") : setOpen(id);
  };

  const handleBuyClick = () => {
    toastSuccess({ message: "Product added to the cart!" });
    const existingData = window?.localStorage?.getItem("cart");
    const existingDataJson = JSON.parse(existingData);
    const newData = { ...data };
    const updatedData = existingDataJson
      ? [...existingDataJson, newData]
      : [newData];
    window?.localStorage?.setItem("cart", JSON.stringify(updatedData));
  };

  return (
    <div className="h-[450px] max-w-80 bg-slate-200 rounded-xl p-2 bg-clip-padding backdrop-filter backdrop-blur-3xl border border-gray-100 ">
      {isAdmin && (
        <>
          <div
            onClick={handleDot}
            className="z-10 w-12 rounded-md fixed flex justify-center items-center p-2 top-2 right-0 hover:bg-default mr-1"
          >
            <HiDotsVertical />
          </div>
          {open == id && (
            <div className="flex absolute right-1 top-10 cursor-pointer z-20 mt-2 select-none rounded-lg text-accent justify-end gap-1 flex-col items-end bg-defaultBg p-2">
              <div
                className={`hover:bg-gray-200 p-2 rounded cursor-pointer w-24 text-xs`}
              >
                Edit
              </div>
              <div
                className={`hover:bg-gray-200 p-2 rounded cursor-pointer w-24 text-xs`}
              >
                Delete
              </div>
            </div>
          )}
        </>
      )}
      <div>
        <div className="cursor-pointer" onClick={() => handleCardClick(id)}>
          <div className="flex justify-center items-center">
            <div className="h-32 w-full relative">
              <Image src={image} layout="fill" objectFit="contain" alt="" />
            </div>
          </div>
          <div className="my-2">
            <div>
              <span className="text-lg font-bold">
                {name.length > 40 ? name.substring(0, 40) + "..." : name}
              </span>
            </div>
            <div className="text-start mt-2 flex items-center flex-wrap">
              <span className="text-sm mr-2">
                <span className="mr-1">{"ট"}</span>
                {price}
              </span>
            </div>

            <div>
              <span className="text-sm mt-2">
                {description.length > 70
                  ? description.substring(0, 70) + "..."
                  : description}
              </span>
            </div>

            <div className="flex items-center bg-warning w-fit p-1 rounded-md gap-2">
              {rating}
              <CiStar />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          onClick={() => handleBuyClick()}
          className="absolute py-2 bottom-0 w-11/12 cursor-pointer"
        >
          <span className="flex items-center justify-between bg-default border text-center rounded-md p-2">
            Add to Cart
            <span className="text-xl">
              <BsFillCartPlusFill />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}, isEqual);

Card.displayName = "Card";

function Product({ authStore }) {
  const { permissionGroup } = authStore;
  const isAdmin = permissionGroup.includes("admin");
  const [products, setProducts] = useState(product);
  const [open, setOpen] = useState("");
  const router = useRouter();

  const handleCardClick = (id) => {
    router.push(`/product/${id}`);
  };

  useEffect(() => {
    setProducts(product);
  }, []);
  return (
    <div>
      <title>Product - User & Product</title>
      <CommonHeader />
      <div className="grid grid-cols-1 gap-4 tbd:grid-cols-2 mmd:grid-cols-3 mt-10 xl:grid-cols-4">
        {products.map((data, index) => {
          const id = get(data, "id", "");
          return (
            <Card
              isAdmin={isAdmin}
              key={index}
              data={data}
              open={open}
              setOpen={setOpen}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GuardHoc(observer(Product), ["user", "admin"]);
