"use client";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { addToCart } from "../redux/actions/productActions";
import Navbar from "@/components/NavProducts";
import Image from "next/image";
import productImg from "../../public/product-pages/Rectangle 101.png";
import Reviews from "@/components/Reviews";
import ExploreOther from "@/components/ExploreOther";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
export default function page() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 100);
    };

    scrollToTop();
  }, []);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productToAdd = {
      id: "simplesofa",
      name: "Simple Sofa",
      price: 1200,
      quantity: 1,
      img: productImg,
    };
    dispatch(addToCart(productToAdd));
  };
  return (
    <>
      <Helmet>
        <title>Elegencia : Simple Sofa</title>
      </Helmet>
      <Navbar />
      <div className="flex flex-col lg:flex-row  items-center gap-12  md:gap-24 lg:gap-20 xl:gap-[12rem] max-w-[80%] m-auto mt-[10rem] md:mt-[12rem]">
        <Image priority src={productImg} alt="img" />
        <m.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 300 }}
          className="flex flex-col gap-8 md:gap-4 xl:gap-8"
        >
          <h1 className="font-playfair font-semibold text-4xl">Simple Sofa</h1>
          <p className="font-mont font-semibold text-base">$1200</p>
          <p className="text-[#888888] font-mont md:text-sm xl:text-base">
            Experience the perfect blend of beauty and functionality with the
            Enchant Side Table. Crafted with exquisite detail, it adds a touch
            of sophistication to any space while offering convenient storage.
            Elevate your home decor with the Enchant Side Table's timeless
            goodness.
          </p>
          <div className="flex justify-center  md:justify-start">
            <button
              onClick={handleAddToCart}
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#C6A372] transition duration-300 ease-out border-2 border-[#C6A372] rounded-full shadow-md group "
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#C6A372] group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-[#C6A372] transition-all duration-300 transform group-hover:translate-x-full ease">
                Add To Cart
              </span>
              <span className="relative invisible"> Add To Cart</span>
            </button>
          </div>
        </m.div>
      </div>
      <Reviews />
      <div className="mt-28">
        <ExploreOther />
      </div>
    </>
  );
}
