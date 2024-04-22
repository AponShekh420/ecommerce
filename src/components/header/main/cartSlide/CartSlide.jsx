"use client";
import productImage from "@/assets/product/Longer-Pleasure-300x300.jpg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { RxCross1, RxCrossCircled } from "react-icons/rx";
const CartSlide = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="inline-block">
      <IoCartOutline
        size={30}
        className="text-[#0f75bc] hover:text-[#2E083A] transition-all duration-500"
        cursor="pointer"
        onClick={() => setToggle(true)}
      />

      {/* CartSlideContainer */}
      <div
        className={`fixed w-screen h-screen top-0 left-0 z-50 flex ${toggle ? "visible" : "invisible"} `}
      >
        <div
          className={`h-full w-3/12 sm:w-8/12 lg:w-9/12 bg-slate-800 opacity-20 transition-translate ${toggle ? "delay-300" : "delay-0"}`}
          onClick={(e) => setToggle(false)}
        ></div>

        {/* cart container */}
        <div
          className={`shadow-gray-700 shadow-md h-full w-9/12 sm:w-4/12 lg:w-3/12 bg-white ${toggle ? "translate-x-0" : "translate-x-full"} transition-translate duration-300 ease-in-out p-4`}
        >
          <div className="flex justify-end">
            <RxCross1
              size={25}
              className="text-black font-extrabold hover:text-gray-700 cursor-pointer"
              onClick={(e) => setToggle(false)}
            />
          </div>

          {/* cart items container*/}
          <div className="w-full mt-4">
            {/* cart items */}
            <div className="w-full flex justify-between gap-x-2 py-2 border-b-[1.5px]">
              <div className="w-[110px] sm:w-[90px] lg:w-[90px]">
                <Image src={productImage} alt="Product Image" />
              </div>

              <div className="w-full flex flex-col ">
                <h3 className="capitalize text-customColor text-sm">
                  Kama Sutra Massage Candle
                </h3>
                <p className="text-slate-500 text-sm pt-3">1 x $65.00</p>
              </div>

              <div className="flex items-end">
                <RxCrossCircled
                  size={23}
                  className="text-slate-500 cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full flex justify-between gap-x-2 py-2 border-b-[1.5px]">
              <div className="w-[110px] sm:w-[90px] lg:w-[90px]">
                <Image src={productImage} alt="Product Image" />
              </div>

              <div className="w-full flex flex-col ">
                <h3 className="capitalize text-customColor text-sm">
                  Kama Sutra Massage Candle
                </h3>
                <p className="text-slate-500 text-sm pt-3">1 x $65.00</p>
              </div>

              <div className="flex items-end">
                <RxCrossCircled
                  size={23}
                  className="text-slate-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="border-b-[1.5px]">
            <h2 className="text-center text-black text-xl font-semibold py-4">
              Subtotal: $100
            </h2>
          </div>

          <div className="flex justify-between pt-4 gap-x-2">
            <Link href="/cart" className="w-1/2">
              <button
                className="bg-slate-500 hover:bg-slate-600 py-3 px-2 w-full transition-all duration-400"
                onClick={(e) => setToggle(false)}
              >
                View Cart
              </button>
            </Link>
            <button
              className="bg-slate-500 hover:bg-slate-600 py-3 px-2 w-1/2 transition-all duration-400"
              onClick={(e) => setToggle(false)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSlide;
