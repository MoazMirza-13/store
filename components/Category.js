"use client";

import { useState } from "react";

export default function Category({ setActiveCategoryProp }) {
  const [activeCategory, setActiveCategory] = useState("Bedroom");

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
        </ul>
      </div>
    </>
  );
}
