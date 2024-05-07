"use client";

import { toastSuccess } from "@/components/Shared/ToastHelpers";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiCreditCard } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { HiOutlineArrowLeft } from "react-icons/hi";

function Checkout() {
  const router = useRouter();
  const cart = localStorage.getItem("cart");
  const cartData = JSON.parse(cart);
  const total = cartData?.reduce((acc, item) => acc + item.price, 0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toastSuccess({ message: "Order placed successfully!" });
    localStorage.removeItem("cart");
    router.push("/product");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Checkout</h1>
            <button
              onClick={() => router.push("/product")}
              className="flex items-center gap-1 text-accent"
            >
              <HiOutlineArrowLeft />
              Continue Shopping
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <div className="w-2/3">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={form.cardNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Expiry</label>
                  <input
                    type="text"
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white p-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <span>Place Order</span>
                  <AiOutlineArrowRight />
                </button>
              </form>
            </div>
            <div className="w-1/3">
              <div className="bg-gray-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Order Summary</span>
                  <span className="text-accent">Edit</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Subtotal</span>
                  <span>
                    {"ট: "}
                    {Number(total).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Shipping</span>
                  <span>{"ট: " + 50}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Total</span>
                  <span>
                    {"ট: "}
                    {Number(total + 50).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationArrow1 />
                  <span>Delivery to {form.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BiCreditCard />
                  <span>Payment with {form.cardNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
