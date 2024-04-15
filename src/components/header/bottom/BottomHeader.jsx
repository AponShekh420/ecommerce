import Container from "@/components/common/Container";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";


const BottomHeader = () => {
  return (
    <nav className="w-full h-10 bg-[#0f75bc] sm:inline-block hidden">
      <Container extraCss="justify-between items-center flex h-full">
        <div>
          <ul className="flex gap-5 font-medium text-white">
            <li className="hover:text-zinc-200">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-zinc-200">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:text-zinc-200">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="hover:text-zinc-200">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-x-3">
            <button className="bg-[#008317] flex items-center justify-center gap-x-1 text-[12px] font-medium uppercase py-[6px] text-white px-3 shadow-gray-600 shadow-md rounded">
              <FaDownload />
              catalog
            </button>
            <button className="bg-[#371343] text-white py-[6px] px-3 rounded uppercase border-[#56b33c] text-[12px] font-medium border-solid border-[1px] shadow-gray-600 shadow-md">free recordings</button>
        </div>
      </Container>
    </nav>
  );
}

export default BottomHeader;