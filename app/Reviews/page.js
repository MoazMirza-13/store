"use client";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Elegencia : Reviews</title>
      </Helmet>
      <Navbar />
      <Reviews />
    </>
  );
}
