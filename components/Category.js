"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
export default function Category({ setActiveCategoryProp }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(category || "Bedroom");
  const handleClickCategory = (category) => {
    setActiveCategory(category);
    setActiveCategoryProp(category);
  };

  return (
    <>
      <div>
        <h1>Categories</h1>
        <ul>
          <li
            onClick={() => handleClickCategory("Modern Sofa")}
            className={activeCategory === "Modern Sofa" ? "text-red-500" : ""}
          >
            Modern Sofa
          </li>
          <li
            onClick={() => handleClickCategory("Decent Table")}
            className={activeCategory === "Decent Table" ? "text-red-500" : ""}
          >
            Decent Table
          </li>
          <li
            onClick={() => handleClickCategory("Bedroom")}
            className={activeCategory === "Bedroom" ? "text-red-500" : ""}
          >
            Bedroom
          </li>
          <li
            onClick={() => handleClickCategory("Kitchen")}
            className={activeCategory === "Kitchen" ? "text-red-500" : ""}
          >
            Kitchen
          </li>
          <li
            onClick={() => handleClickCategory("Family Hall")}
            className={activeCategory === "Family Hall" ? "text-red-500" : ""}
          >
            Family Hall
          </li>
          <li
            onClick={() => handleClickCategory("Simple Solid Sofa")}
            className={
              activeCategory === "Simple Solid Sofa" ? "text-red-500" : ""
            }
          >
            Simple Solid Sofa
          </li>
        </ul>
      </div>
    </>
  );
}
