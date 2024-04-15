import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCupHotFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";


const Services = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 text-white my-10">
      <div className="bg-[#3E5D76] flex flex-col items-center justify-center p-5 gap-y-2 shadow-lg shadow-gray-500">
        <FaRegCalendarAlt size={36}/>
        <h3 className="text-[21px] font-[700] text-center leading-tight">Shalom Bayis</h3>
        <p className="text-center text-sm leading-tight">Creating A Peaceful Haven For Your Home</p>
      </div>
      <div className="bg-[#3E5D76] flex flex-col items-center justify-center p-5 gap-y-2 shadow-lg shadow-gray-500">
        <BsCupHotFill size={36}/>
        <h3 className="text-[21px] font-[700] text-center leading-tight">Intimate Relationships</h3>
        <p className="text-center text-sm leading-tight">Answers To Questions You Were Never Able To Ask</p>
      </div>
      <div className="bg-[#3E5D76] flex flex-col items-center justify-center p-5 gap-y-2 shadow-lg shadow-gray-500">
        <FaBookOpen size={36}/>
        <h3 className="text-[21px] font-[700] text-center leading-tight">Building Communication</h3>
        <p className="text-center text-sm leading-tight">The Key To A Peaceful Life</p>
      </div>
      <div className="bg-[#3E5D76] flex flex-col items-center justify-center p-5 gap-y-2 shadow-lg shadow-gray-500">
        <FaUserAlt size={36}/>
        <h3 className="text-[21px] font-[700] text-center leading-tight">Medical Solution</h3>
        <p className="text-center text-sm leading-tight">Solving Issues Related To Intimacy</p>
      </div>
    </div>
  );
}

export default Services;