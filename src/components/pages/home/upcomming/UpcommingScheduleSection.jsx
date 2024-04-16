/* eslint-disable react/no-unescaped-entities */
import SectionHeading from "@/components/common/SectionHeading";

const UpcommingScheduleSection = () => {
  return (
    <div>
      <SectionHeading title="Upcoming conferences" />

      <div className="w-full bg-white shadow-lg rounded-3xl p-[48px] flex flex-col gap-y-3">
        {/* upcoming courses */}
        <div className="flex lg:flex-row flex-col py-2 border-b lg:items-start items-center lg:gap-y-0 gap-y-5">
          <div className="pr-3 lg:border-r flex gap-x-5 lg:flex-row flex-col lg:items-start items-center">
            <div>
              <p className="text-[20px] lg:text-start text-center text-[#270034] capitalize leading-tight">
                january
              </p>
              <p className="text-[60px] lg:text-start text-center font-[700] text-[#270034] capitalize leading-tight">
                22
              </p>
            </div>
            <div>
              <p className="text-[16px] text-[#270034] lg:text-start text-center">
                Monday 9:00 p.m. EST
              </p>
              <div className="flex gap-x-1 lg:justify-start justify-center">
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    days
                  </p>
                </div>
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    Hours
                  </p>
                </div>
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    Minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-3">
            <p className="text-[26px] lg:text-start text-center font-[600] text-[#270034] capitalize leading-tight">
              Speaker:{" "}
              <span className="text-customColor">Shy Krug Ph. D., CST</span>
            </p>
            <p className="text-[26px] lg:text-start text-center font-[600] text-[#270034] capitalize mt-1">
              Lecture:{" "}
              <span className="text-customColor">
                Unlocking Fulfilling Intimacy
              </span>
            </p>
            <p className="text-[18px] lg:text-start text-center font-[600] text-[#2E25CB] capitalize mt-1">
              A Lecture on Men's Health, Relationship and Well-Being
            </p>
          </div>

          <div className="pl-3 flex items-center justify-end lg:ml-auto">
            <button className="bg-BtnBg py-2 px-3 rounded-3xl font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] text-white">
              read more
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col py-2 border-b lg:items-start items-center lg:gap-y-0 gap-y-5">
          <div className="pr-3 lg:border-r flex gap-x-5 lg:flex-row flex-col lg:items-start items-center">
            <div>
              <p className="text-[20px] lg:text-start text-center text-[#270034] capitalize leading-tight">
                january
              </p>
              <p className="text-[60px] lg:text-start text-center font-[700] text-[#270034] capitalize leading-tight">
                22
              </p>
            </div>
            <div>
              <p className="text-[16px] text-[#270034] lg:text-start text-center">
                Monday 9:00 p.m. EST
              </p>
              <div className="flex gap-x-1 lg:justify-start justify-center">
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    days
                  </p>
                </div>
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    Hours
                  </p>
                </div>
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    Minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-3">
            <p className="text-[26px] lg:text-start text-center font-[600] text-[#270034] capitalize leading-tight">
              Speaker:{" "}
              <span className="text-customColor">Shy Krug Ph. D., CST</span>
            </p>
            <p className="text-[26px] lg:text-start text-center font-[600] text-[#270034] capitalize mt-1">
              Lecture:{" "}
              <span className="text-customColor">
                Unlocking Fulfilling Intimacy
              </span>
            </p>
            <p className="text-[18px] lg:text-start text-center font-[600] text-[#2E25CB] capitalize mt-1">
              A Lecture on Men's Health, Relationship and Well-Being
            </p>
          </div>

          <div className="pl-3 flex items-center justify-end lg:ml-auto">
            <button className="bg-BtnBg py-2 px-3 rounded-3xl font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] text-white">
              read more
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col py-2 border-b lg:items-start items-center lg:gap-y-0 gap-y-5">
          <div className="pr-3 lg:border-r flex gap-x-5 lg:flex-row flex-col lg:items-start items-center">
            <div>
              <p className="text-[20px] lg:text-start text-center text-[#270034] capitalize leading-tight">
                january
              </p>
              <p className="text-[60px] lg:text-start text-center font-[700] text-[#270034] capitalize leading-tight">
                22
              </p>
            </div>
            <div>
              <p className="text-[16px] text-[#270034] lg:text-start text-center">
                Monday 9:00 p.m. EST
              </p>
              <div className="flex gap-x-1 lg:justify-start justify-center">
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    days
                  </p>
                </div>
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    Hours
                  </p>
                </div>
                <div className="bg-white shadow-sm shadow-customColor rounded-md w-auto flex items-center justify-center flex-col p-2">
                  <p className="text-[21px] text-[#270034] leading-none">00</p>
                  <p className="text-[15px] text-[#270034] leading-none">
                    Minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-3">
            <p className="text-[26px] lg:text-start text-center font-[600] text-[#270034] capitalize leading-tight">
              Speaker:{" "}
              <span className="text-customColor">Shy Krug Ph. D., CST</span>
            </p>
            <p className="text-[26px] lg:text-start text-center font-[600] text-[#270034] capitalize mt-1">
              Lecture:{" "}
              <span className="text-customColor">
                Unlocking Fulfilling Intimacy
              </span>
            </p>
            <p className="text-[18px] lg:text-start text-center font-[600] text-[#2E25CB] capitalize mt-1">
              A Lecture on Men's Health, Relationship and Well-Being
            </p>
          </div>

          <div className="pl-3 flex items-center justify-end lg:ml-auto">
            <button className="bg-BtnBg py-2 px-3 rounded-3xl font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] text-white">
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingScheduleSection;
