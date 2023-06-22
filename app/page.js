"use client";

import { Helmet } from "react-helmet";

import Nav from "@/components/NavHome";
import Herosection from "@/components/HeroSection";
import AfterHero from "@/components/AfterHero";
import ExploreOther from "@/components/ExploreOther";
import ExploreCategory from "@/components/ExploreCategory";
import Expediency from "@/components/Expediency";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Elegencia : a Furniture Store</title>
      </Helmet>

      <Nav />
      <Herosection />
      <AfterHero />
      <ExploreOther />
      <ExploreCategory />
      <Expediency />
      <Testimonials />
    </>
  );
}
