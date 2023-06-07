"use client";
import { useState } from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";

export default function Nav() {
  const [showCart, setShowCart] = useState(false);

  const handlecart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const navLi = [
    { id: "home", title: "Home" },
    { id: "products", title: "Products" },
    { id: "categories", title: "Categories" },
    { id: "testimonials", title: "Testimonials" },
    { id: "contact us", title: "Contact Us" },
  ];
  return (
    <>
      <div className="py-6 fixed top-0 left-0 right-0 z-50  ">
        <nav className=" flex  max-w-[85%] m-auto justify-between items-center">
          <Link
            href="/"
            className={`  font-playfair text-lg font-bold tracking-widest`}
          >
            ELEGENCIA
          </Link>
          <div>
            <ul className={`font-mont flex gap-9 `}>
              {navLi.map(({ id, title }) => (
                <li className="tracking-wide" key={id}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-8">
            <button className="text-2xl">
              <BiSearch />
            </button>
            <button onClick={handlecart} className="text-2xl">
              <IoMdCart />
            </button>
          </div>
        </nav>
        {showCart && <AddToCart isopen={showCart} onclose={handleCloseCart} />}
      </div>
    </>
  );
}
