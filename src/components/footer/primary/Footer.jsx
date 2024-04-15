import Container from "@/components/common/Container";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import menuColums from "./FooterMenu";
const Footer = () => {
  return (
    <div className="w-full bg-customColor py-10">
      <Container extraCss="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 text-white md:gap-x-5">
        <div>
          <p className="text-center">Maximizing Intimate Relationships In A Marriage</p>
          <hr className="mt-3"/>
          <div className="flex flex-col items-center mt-3">
            <h3 className="text-lg font-semibold capitalize text-center">we want to hear from you!</h3>
            <button className="bg-BtnBg py-2 px-3 rounded-3xl font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] mt-1">Take the survey!</button>
          </div>
        </div>

        {menuColums.map((menuBox, index)=> (
          <div key={index}>
            <h3 className="text-lg font-semibold capitalize">{menuBox.title}</h3>
            <ul>
              {menuBox.items.map((menuDetails, index)=> {
                const {name, src} = menuDetails;
                return (
                  <li className="mb-1" key={index}>
                    <Link href={src} className="py-1">{name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}

        
      </Container>
    </div>
  );
}

export default Footer;