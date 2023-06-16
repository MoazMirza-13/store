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
      <div className="bg-[#FFFFF0] flex flex-col gap-6 p-6">
        <h1 className="font-mont font-bold text-sm pl-2">Categories</h1>
        <ul className="font-semibold font-mont flex flex-col gap-6">
          <li
            onClick={() => handleClickCategory("Modern Sofa")}
            className={`
            ${
              activeCategory === "Modern Sofa"
                ? "bg-[#d4b78fb3] text-white"
                : ""
            }
            flex items-center gap-2 p-2 rounded-md
          `}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Modern Sofa
          </li>
          <li
            onClick={() => handleClickCategory("Decent Table")}
            className={`${
              activeCategory === "Decent Table"
                ? "bg-[#d4b78fb3] text-white"
                : ""
            }
             flex items-center gap-2 p-2 rounded-md
            `}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Decent Table
          </li>
          <li
            onClick={() => handleClickCategory("Bedroom")}
            className={`${
              activeCategory === "Bedroom" ? "bg-[#d4b78fb3] text-white" : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Bedroom
          </li>
          <li
            onClick={() => handleClickCategory("Simple Solid Sofa")}
            className={`${
              activeCategory === "Simple Solid Sofa"
                ? "bg-[#d4b78fb3] text-white"
                : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Simple Solid Sofa
          </li>
          <li
            onClick={() => handleClickCategory("Kitchen")}
            className={`${
              activeCategory === "Kitchen" ? "bg-[#d4b78fb3] text-white" : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Kitchen
          </li>
          <li
            onClick={() => handleClickCategory("Family Hall")}
            className={`${
              activeCategory === "Family Hall"
                ? "bg-[#d4b78fb3] text-white"
                : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Family Hall
          </li>
          <li
            onClick={() => handleClickCategory("Comfy Sofa")}
            className={`
            ${
              activeCategory === "Comfy Sofa" ? "bg-[#d4b78fb3] text-white" : ""
            }
            flex items-center gap-2 p-2 rounded-md
          `}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Comfy Sofa
          </li>
          <li
            onClick={() => handleClickCategory("Wide Table")}
            className={`${
              activeCategory === "Wide Table" ? "bg-[#d4b78fb3] text-white" : ""
            }
             flex items-center gap-2 p-2 rounded-md
            `}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Wide Table
          </li>
          <li
            onClick={() => handleClickCategory("Modern Bedroom")}
            className={`${
              activeCategory === "Modern Bedroom"
                ? "bg-[#d4b78fb3] text-white"
                : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Modern Bedroom
          </li>
          <li
            onClick={() => handleClickCategory("Simple Soft Sofa")}
            className={`${
              activeCategory === "Simple Soft Sofa"
                ? "bg-[#d4b78fb3] text-white"
                : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Simple Soft Sofa
          </li>
          <li
            onClick={() => handleClickCategory("Small Kitchen")}
            className={`${
              activeCategory === "Small Kitchen"
                ? "bg-[#d4b78fb3] text-white"
                : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Small Kitchen
          </li>
          <li
            onClick={() => handleClickCategory("T.V Hall")}
            className={`${
              activeCategory === "T.V Hall" ? "bg-[#d4b78fb3] text-white" : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            T.V Hall
          </li>
          <li
            onClick={() => handleClickCategory("Luna Table")}
            className={`${
              activeCategory === "Luna Table" ? "bg-[#d4b78fb3] text-white" : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Luna Table
          </li>
          <li
            onClick={() => handleClickCategory("Family Kitchen")}
            className={`${
              activeCategory === "Family Kitchen"
                ? "bg-[#d4b78fb3] text-white"
                : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Family Kitchen
          </li>
          <li
            onClick={() => handleClickCategory("Main Hall")}
            className={`${
              activeCategory === "Main Hall" ? "bg-[#d4b78fb3] text-white" : ""
            } flex items-center gap-2 p-2 rounded-md`}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_32_246)">
                <path
                  d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2217 12.8334 7.00001C12.8334 3.77834 10.2217 1.16667 7.00008 1.16667C3.77842 1.16667 1.16675 3.77834 1.16675 7.00001C1.16675 10.2217 3.77842 12.8333 7.00008 12.8333Z"
                  stroke="#C48842"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <g clipPath="url(#clip1_32_246)">
                <path
                  d="M7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_32_246">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
                <clipPath id="clip1_32_246">
                  <rect
                    width="8"
                    height="8"
                    fill="white"
                    transform="translate(3 3)"
                  />
                </clipPath>
              </defs>
            </svg>
            Main Hall
          </li>
        </ul>
      </div>
    </>
  );
}
