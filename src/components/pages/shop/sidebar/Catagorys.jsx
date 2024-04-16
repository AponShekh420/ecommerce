"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
export default function Catagorys() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="w-full mb-8">
      <p className="text-lg font-semibold uppercase">Product categories</p>
      <Accordion isCompact>
        <AccordionItem key="1" aria-label="Camera" title="Camera">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
