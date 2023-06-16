"use client";
import Category from "@/components/Category";
import Nav from "@/components/NavProducts";
import Products from "@/components/Products";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function page() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(category || "Bedroom");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <h1 className="font-playfair lg:font-semibold md:text-5xl text-[1.5rem] md:leading-[4.563rem] leading-[1.5rem] sm:leading-[2rem] text-center mt-28 md:mt-24">
        Explore By Category
      </h1>
      <h2 className="text-[#888888] font-mont text-sm mt-16 m-auto md:max-w-[43%] lg:max-w-[51%] xl:max-w-[46%] text-center lg:text-start">
        Categories/<span className="text-black">{activeCategory}</span>
      </h2>
      <div className="flex xl:max-w-[85%] max-w-[93%] m-auto mt-12 xl:gap-8 lg:gap-2 sm:gap-4 gap-2">
        <Category setActiveCategoryProp={setActiveCategory} />
        <Products activeCategory={activeCategory} />
      </div>
    </>
  );
}
