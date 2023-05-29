"use client";
import { useState } from "react";
import AddToCart from "./AddToCart";

import Link from "next/link";

export default function Nav() {
  const [showCart, setShowCart] = useState(false);

  const handlecart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <nav className="flex max-w-[80%] m-auto justify-between">
        <h1 className="text-2xl">
          <Link href="/">Logo</Link>
        </h1>

        <button onClick={handlecart} className="text-2xl" type="button">
          Your Cart
        </button>
      </nav>
      {showCart && <AddToCart isopen={showCart} onclose={handleCloseCart} />}
    </>
  );
}
