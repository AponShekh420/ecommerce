const WelcomeSection = () => {
  return (
    <div >
      <h3 className="text-center text-[28px] font-[600] text-[#333333] mb-3">
        Welcome To Ohel Miriam
      </h3>
      <p className="text-center text-[#333333] text-[16px] mb-3">
        Ohel Miriam was created to address knowledge gaps on the Torah perspective of marital harmony, intimate relationship and related topics.
      </p>
      <p className="text-center text-[#333333] text-[16px] mb-3">
        Ohel Miriam arranges live teleconferences and courses, catering to both men and women alike. These sessions feature insights from Rabbonim, women lecturers, therapists, and medical professionals.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 text-center sm:justify-center">
          <div className="flex items-center flex-col">
            <span className="text-[42px] font-[600] text-customColor">6,000</span>
            <p className="text-[18px] font-[600] text-customColor text-center">Couples</p>
            <p className="text-[16px] text-[#333333] text-center">
              Who really want to know!
            </p>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-[42px] font-[600] text-customColor">15</h3>
            <p className="text-[18px] font-[600] text-customColor text-center">Courses</p>
            <p className="text-[16px] text-[#333333] text-center">
              Comprehensive In-depth information
            </p>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-[42px] font-[600] text-customColor">45</h3>
            <p className="text-[18px] font-[600] text-customColor text-center">Speakers</p>
            <p className="text-[16px] text-[#333333] text-center">
              Professionals in the field
            </p>
          </div>
          <div className="flex items-center flex-col">
            <h3 className="text-[42px] font-[600] text-customColor">90</h3>
            <p className="text-[18px] font-[600] text-customColor text-center">Lectures</p>
            <p className="text-[16px] text-[#333333] text-center">
              Answers to questions you’re embarrassed to ask.
            </p>
          </div>
      </div>
    </div>
    
  );
}

export default WelcomeSection;