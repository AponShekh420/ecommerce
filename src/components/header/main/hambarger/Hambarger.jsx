"use client"
import Logo from "@/assets/logo/Final-Logo-with-abbreviations.png"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Hambarger = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="sm:hidden inline-block">
      <IoMdMenu size={30}  cursor="pointer" className=" text-[#0f75bc] hover:text-[#2E083A] transition-all duration-500" onClick={()=> setToggle(true)}/>
      

      {/* hambargerContainer */}
      <div className={`fixed w-screen h-screen top-0 left-0 z-50 flex ${toggle ? "visible" : "invisible"} `}>


        <div className={`shadow-gray-700 shadow-md h-full w-9/12 bg-white ${toggle ? "translate-x-0" : "-translate-x-full"} transition-translate duration-300 ease-in-out p-4`}>
          <div className="flex justify-end">
            <RxCross1 size={25} className="text-black font-extrabold hover:text-gray-700 cursor-pointer" onClick={(e)=> setToggle(false)}/>
          </div>
          <div className="w-2/4 m-auto">
            <Image src={Logo} alt="logo"/>
          </div>

          <div className="mt-5">
            <ul className="flex flex-col font-medium text-black">
              <li className="hover:text-zinc-200 border-b-[1.5px] py-2">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-zinc-200 border-b-[1.5px] py-2">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="hover:text-zinc-200 border-b-[1.5px] py-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:text-zinc-200 border-b-[1.5px] py-2">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-between pt-4 gap-x-2">
            <button className="flex items-center justify-center gap-x-2 py-3 px-2 w-1/2 transition-all duration-400 bg-[#008317] uppercase">
              <FaDownload /> 
              Catalog
            </button>
            <button className="py-3 px-2 w-1/2 transition-all duration-400 bg-[#371343] uppercase">Free records</button>
          </div>

        </div>

        <div className={`h-full w-3/12 bg-slate-800 opacity-20 transition-translate ${toggle? "delay-300" : "delay-0"}`} onClick={(e)=> setToggle(false)}></div>
      </div>
    </div>
  );
}

export default Hambarger;