import { CheckoutForm } from "@/components/common/CheckoutForm";
import { Checkbox, Input } from "@nextui-org/react";
import Link from "next/link";
import { CiCreditCard1 } from "react-icons/ci";
const Checkout = () => {
  return (
    <div className="md:flex-row flex-col flex gap-3 py-10">
      <div className="w-full">
        <h3 className="text-2xl font-bold mb-4">Billing details</h3>
        <CheckoutForm />
      </div>
      <div className="w-full md:w-auto">
        <div className="md:w-[420px] w-full p-5 text-[#767575] capitalize z-0 flex flex-col bg-content1 rounded-large shadow-small">
          <h3 className=" text-black text-2xl font-bold">Your order</h3>
          <div className="flex justify-between text-[16px] font-semibold mt-3 border-b-1 py-3">
            <p className="text-black">Product</p>
            <p className="text-black">subtotal</p>
          </div>
          <div className="flex justify-between text-[16px]  border-b-1 py-3">
            <p>
              Longer pleasure <span className="font-semibold">x 1</span>
            </p>
            <p>$65</p>
          </div>
          <div className="flex justify-between text-[16px] font-semibold border-b-1 py-3">
            <p>subtotal</p>
            <p>$0.0</p>
          </div>

          <div className="flex justify-between text-[16px] font-semibold items-center border-b-1 py-3">
            <p>shipping</p>
            <p className="text-sm font-normal">
              shipping to <span>NY</span>
            </p>
          </div>

          <div className="flex justify-between text-[16px] font-semibold  py-3">
            <p>tax</p>
            <p>$0.0</p>
          </div>
          <hr />
          <div className="flex justify-between text-[16px] font-semibold  py-3 text-black">
            <p className="text-[18px]">total</p>
            <p>$6500</p>
          </div>

          <div className="py-3 border-b-1">
            <Input
              type="number"
              label="credit card"
              placeholder="Card Number"
              labelPlacement="outside"
              startContent={
                <CiCreditCard1 className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
          </div>
          <div className="py-3">
            <Checkbox defaultSelected color="success">
              <p className="text-[12px]">
                I have read and agree to the website{" "}
                <Link className="text-customColor" href="#">
                  {" "}
                  terms and conditions<span className="text-red-600">*</span>
                </Link>
              </p>
            </Checkbox>
          </div>
          <div className="w-full flex justify-center mt-2">
            <button className="bg-BtnBg py-4 px-3 rounded-md font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] mt-2 mx-auto w-full text-white">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
