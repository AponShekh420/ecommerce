"use client";
import { Input } from "@nextui-org/react";
import { useState } from "react";

const CartProductQuentity = () => {
  const [items, setItems] = useState(1);
  return (
    <Input
      className="w-16"
      type="number"
      placeholder="1"
      labelPlacement="outside"
      min={1}
      aria-label="quentity"
      value={items}
      onChange={(e) => setItems(e.target.value)}
    />
  );
};

export default CartProductQuentity;
