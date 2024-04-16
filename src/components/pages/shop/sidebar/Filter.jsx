"use client";
import { Slider } from "@nextui-org/react";
import { useState } from "react";
const Filter = () => {
  const [value, setValue] = useState([0, 1000]);
  return (
    <div className="w-full">
      <p className="text-lg font-semibold uppercase">filter by price</p>
      <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
        <Slider
          size="sm"
          color="foreground"
          formatOptions={{ style: "currency", currency: "USD" }}
          step={10}
          maxValue={1000}
          minValue={0}
          value={value}
          onChange={setValue}
          className="max-w-md"
        />
        <div className="flex justify-between w-full items-center mt-1 md:gap-x-2">
          <button className="text-white bg-BtnBg lg:py-2 lg:px-3 md:px-2 md:py-1 rounded-md font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px]">
            Filter
          </button>
          <p className="font-medium text-sm text-customColor">
            Price:{" "}
            {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
