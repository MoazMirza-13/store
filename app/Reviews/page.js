"use client";
import { useEffect } from "react";
import Navbar from "@/components/NavProducts";
import Reviews from "@/components/Reviews";

export default function Page() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 100);
    };

    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <Reviews />
    </>
  );
}
