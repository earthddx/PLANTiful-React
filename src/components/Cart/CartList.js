import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  return (
    <div>
      {value.map((item) => (
        <CartItem key={item.id} item={item} value={value} />
      ))}
    </div>
  );
}
