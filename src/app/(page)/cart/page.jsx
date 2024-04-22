"use client";
import CartProductQuentity from "@/components/pages/cart/CartProductQuentity";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { GiCrossedSabres } from "react-icons/gi";

export default function page() {
  return (
    <div className="flex gap-3 py-28">
      <div className="w-full">
        <Table aria-label="Example static collection table" className="w-full">
          <TableHeader>
            <TableColumn>Product</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Quantity</TableColumn>
            <TableColumn>Subtotal</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1" className="border-b-1">
              <TableCell className="flex gap-x-4 items-center">
                <GiCrossedSabres className="cursor-pointer" />

                <div className="flex gap-2">
                  <div className="h-10 w-10">
                    <Image
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      width={100}
                      height={100}
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p>Longer Pleasure oil</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>$65</TableCell>
              <TableCell>
                <CartProductQuentity />
              </TableCell>
              <TableCell>200</TableCell>
            </TableRow>
            <TableRow key="2" className="border-b-1">
              <TableCell className="flex gap-x-4 items-center">
                <GiCrossedSabres className="cursor-pointer" />

                <div className="flex gap-2">
                  <div className="h-10 w-10">
                    <Image
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      width={100}
                      height={100}
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <p>Longer Pleasure oil</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>$65</TableCell>
              <TableCell>
                <CartProductQuentity />
              </TableCell>
              <TableCell>200</TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <button className="bg-BtnBg py-2 px-1 rounded-md font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] mt-2 mx-auto w-full text-white">
                  update
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="w-96 h-72 p-5 text-[#767575] capitalize z-0 flex flex-col bg-content1 rounded-large shadow-small">
        <h3 className="font-semibold text-black">Cart Total</h3>
        <div className="flex justify-between text-[16px] font-semibold mt-3">
          <p>subtotal</p>
          <p>$65</p>
        </div>
        <div>
          <div className="flex justify-between text-[16px] font-semibold mt-2 items-center">
            <p>shipping</p>
            <p className="text-sm font-normal text-customColor">
              Change Address
            </p>
          </div>
          <p className="text-sm">
            shipping to <span>NY</span>
          </p>
        </div>
        <div className="flex justify-between text-[16px] font-semibold mt-2">
          <p>tax</p>
          <p>$0.0</p>
        </div>
        <hr className="mt-2" />
        <div className="flex justify-between text-[16px] font-semibold mt-2">
          <p>total</p>
          <p>$6500</p>
        </div>
        <div className="w-full flex justify-center mt-2">
          <Link href="/checkout" className="w-full">
            <button className="bg-BtnBg py-4 px-3 rounded-md font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] mt-2 mx-auto w-full text-white">
              proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
