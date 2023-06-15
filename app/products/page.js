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
      <h2>Categories/{activeCategory}</h2>
      <div className="flex">
        <Category setActiveCategoryProp={setActiveCategory} />
        <Products activeCategory={activeCategory} />
      </div>
    </>
  );
}
