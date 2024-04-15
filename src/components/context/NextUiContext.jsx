"use client"

import { NextUIProvider } from "@nextui-org/react";

const NextUiContext = ({children}) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}

export default NextUiContext;