"use client";

import GuardHoc from "@/components/Shared/GuardHoc";
import { toastSuccess } from "@/components/Shared/ToastHelpers";
import { product } from "@/public/product";

import { get } from "lodash";
import { observer } from "mobx-react";
import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdArrowBack } from "react-icons/md";

function ProductDetails({ params }) {
  const router = useRouter();
  const id = get(params, "slug", "");
  const productDetails = product.find((item) => item?.id == id);
  const image = get(productDetails, "image", "");
  const name = get(productDetails, "title", "");
  const price = get(productDetails, "price", "");
  const description = get(productDetails, "description", "");
  const rating = get(productDetails, "rating.rate", "");

  const handleBack = () => {
    router.back();
  };

  const handleSell = () => {
    toastSuccess({ message: "Link generated and copied!" });
  };

  const handleBuyClick = () => {
    toastSuccess({ message: "Product added to the cart!" });
    const existingData = localStorage.getItem("cart");
    const existingDataJson = JSON.parse(existingData);
    const newData = { ...productDetails };
    const updatedData = existingDataJson
      ? [...existingDataJson, newData]
      : [newData];
    localStorage.setItem("cart", JSON.stringify(updatedData));
  };

  return (
    <div>
      <title>Product Details - User & Product</title>
      <div className="h-[500px] relative w-full">
        <Image src={image} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="mt-10 mx-10">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-lg">{description}</p>
        <div className="flex items-center">
          <span className="text-lg font-bold ">ট {price}</span>
          <div className="flex items-center ml-2 bg-warning rounded-md px-2 py-1">
            <span className="text-lg">{rating}</span>
            <CiStar size={22} />
          </div>
        </div>
        <div className="flex justify-center gap-10 items-center">
          <div
            onClick={() => handleBuyClick()}
            className=" py-2  cursor-pointer"
          >
            <span className="flex items-center justify-between gap-4 bg-default border text-center rounded-md p-2">
              Add to Cart
              <span className="text-xl">
                <BsFillCartPlusFill />
              </span>
            </span>
          </div>
          <button
            onClick={handleSell}
            className="bg-accent text-white p-2 rounded-lg flex items-center justify-center gap-2"
          >
            <span>Sell This Product</span>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div
        onClick={handleBack}
        className="flex cursor-pointer justify-end items-center gap-4"
      >
        <div className="py-2">
          <span className="flex items-center justify-between bg-default border text-center rounded-md p-2">
            <span className="text-xl mr-4">
              <MdArrowBack />
            </span>
            Back
          </span>
        </div>
      </div>
    </div>
  );
}

export default GuardHoc(observer(ProductDetails), ["user", "admin"]);
