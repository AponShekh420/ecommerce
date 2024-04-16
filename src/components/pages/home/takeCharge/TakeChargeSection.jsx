"use client";

import { SubscribeForm } from "@/components/common/SubscribeForm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const TakeChargeSection = () => {
  return (
    <div className="w-full flex flex-col items-center mb-5">
      <p className="text-[28px] font-[600] text-[#333333]">Take Charge</p>
      <p className="text-[16px] text-[#666666]">
        Receive notifications of upcoming live teleconferences!
      </p>
      <p className="text-[16px] text-[#FF0000]">
        This form is as an identity check and explicitly for email notifications
        only.
      </p>
      <Collapsible className="flex flex-col items-center w-full">
        <CollapsibleTrigger className="bg-BtnBg py-2 text-center px-3 rounded-3xl font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] mt-1 text-white">
          sign up to be inspired
        </CollapsibleTrigger>
        <CollapsibleContent className="w-full py-5">
          <SubscribeForm />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default TakeChargeSection;
