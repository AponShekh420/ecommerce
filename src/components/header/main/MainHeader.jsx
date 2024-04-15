import Container from "@/components/common/Container";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import Logo from "@/assets/logo/Final-Logo-with-abbreviations.png"
import { IoMdMenu } from "react-icons/io";
import Hambarger from "./hambarger/Hambarger";
import CartSlide from "./cartSlide/CartSlide";
import { FaSearch } from "react-icons/fa";


const MainHeader = () => {
  return (
    <nav className="w-full h-20 bg-[#e1dde1] text-white">
      <Container extraCss="justify-between items-center flex h-full">
        <div className="max-w-28">
          <Image src={Logo} alt="logo" ></Image>
        </div>

        {/* searchbar */}
        <div className="w-6/12 hidden sm:inline-block">
          <div className="flex items-center border-solid border-[2px] border-[#0f75bc] rounded-2xl overflow-hidden w-full">
            <input type="search" name="search" id="search" placeholder="Search..." className="py-1 px-5 w-full outline-none border-none text-black"/>
            <FaSearch size={0} className=" bg-[#0f75bc] h-[32px] px-3 w-10 cursor-pointer transition-all duration-500"/>
          </div>
        </div>

        <div className="relative gap-4 flex items-center">
          <CartSlide/>
          <div className="absolute -top-1 left-5 rounded-full bg-[#2E083A] h-4 w-4 flex items-center justify-center">
            <p className="text-[10px] font-semibold">10</p>
          </div>
          <div className="h-7 w-[2px] bg-white sm:inline-block hidden"></div>

          {/* authentication */}
          <div className="sm:inline-block hidden text-black">
            <h1>login</h1>
          </div>

          {/* hambarger Menu */}
          <Hambarger/>
        </div>
      </Container>
    </nav>
  );
}

export default MainHeader;