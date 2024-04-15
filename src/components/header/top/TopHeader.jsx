import Container from "@/components/common/Container";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const TopHeader = () => {
  return (
    <nav className="w-full h-7 bg-[#0f75bc]">
      <Container extraCss="justify-center items-center flex h-full">
        <div className="flex gap-x-5">
          <div className="flex gap-x-1 items-center text-white">
            <FaPhoneAlt className="sm:text-xs text-[9px]"/>
            <Link href="tel:8454148014" className="sm:text-xs text-[9px] font-normal">(845)4148014 x 3</Link>
          </div>
          <div className="flex gap-x-1 items-center text-white">
            <MdOutlineMessage className="sm:text-xs text-[9px]"/>
            <Link href="tel:8454148014" className="sm:text-xs text-[9px] font-normal">(845)-400-9442</Link>
          </div>
          <div className="flex gap-x-1 items-center text-white">
          <MdOutlineMailOutline className="sm:text-xs text-[9px]"/>
            <Link href="tel:8454148014" className="sm:text-xs text-[9px] font-normal">chaya@ohelmiriam.org</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default TopHeader;