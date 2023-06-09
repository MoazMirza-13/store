"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import sliderImg1 from "../public/after-hero-slider/image 8.png";
import sliderImg2 from "../public/after-hero-slider/image 9.png";
import sliderImg3 from "../public/after-hero-slider/image 11.png";
import sliderImg4 from "../public/after-hero-slider/image 10.png";
import sliderImg5 from "../public/after-hero-slider/image 15.png";
import sliderImg6 from "../public/after-hero-slider/image 18.png";
import sliderImg7 from "../public/after-hero-slider/image 17.png";
import sliderImg8 from "../public/after-hero-slider/image 14.png";
import sliderImg9 from "../public/after-hero-slider/image 19.png";
import styles from "../app/css modules/bg_image.module.css";
import btn from "../app/css modules/btn.module.css";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

export default function Home() {
  const swiperRef = useRef(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (autoplayEnabled) {
        swiperInstance.autoplay.start();
      } else {
        swiperInstance.autoplay.stop();
      }
    }
  }, [autoplayEnabled]);

  const handlePrev = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.slidePrev();
      setAutoplayEnabled(false);
      setTimeout(() => {
        setAutoplayEnabled(true);
      }, 400);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.slideNext();
      setAutoplayEnabled(false);
      setTimeout(() => {
        setAutoplayEnabled(true);
      }, 400);
    }
  };

  const handlePaginationClick = () => {
    setAutoplayEnabled(false);
    setTimeout(() => {
      setAutoplayEnabled(true);
    }, 400);
  };

  useEffect(() => {
    setAutoplayEnabled(true);
  }, []);

  return (
    <>
      {/* hero-section */}
      <main className={`${styles["bg-image"]} `}>
        <div className="pt-[13rem] h-screen max-w-[84%] m-auto flex flex-col gap-8">
          <h1 className="font-playfair font-semibold text-6xl leading-[4.563rem]">
            Discover Timeless <br />
            Elegance for Your Home
          </h1>
          <p className="font-mont text-xl tracking-wider ">
            Uncover Exceptional Furniture Pieces Crafted with Precision and
            Style
          </p>
          <div className="flex gap-8">
            <button className={`${btn["btn-1"]} font-semibold text-xl `}>
              Shop Now
            </button>
            <button className={`${btn["btn-2"]} font-semibold text-xl `}>
              Explore
            </button>
          </div>
        </div>
      </main>
      {/* after-hero */}
      <div className="max-w-[84%] m-auto mt-14">
        <div className="flex flex-col items-end">
          <h1 className="font-mont font-semibold text-xl">New Furniture</h1>
          <h1 className="font-playfair font-semibold text-5xl leading-[4.563rem]">
            JUST ARRIVED
          </h1>
        </div>
        {/*  */}
        <div className="">
          <button
            onClick={handlePrev}
            className="absolute top-[74rem] left-[4rem]"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25C45.8333 13.4941 36.5059 4.16669 25 4.16669C13.4941 4.16669 4.16666 13.4941 4.16666 25C4.16666 36.506 13.4941 45.8334 25 45.8334Z"
                stroke="#2B2B2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 16.6667L16.6667 25L25 33.3334"
                stroke="#2B2B2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M33.3333 25H16.6667"
                stroke="#2B2B2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-[74rem] right-[4rem]"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 45.8334C36.5059 45.8334 45.8333 36.506 45.8333 25C45.8333 13.4941 36.5059 4.16669 25 4.16669C13.494 4.16669 4.16663 13.4941 4.16663 25C4.16663 36.506 13.494 45.8334 25 45.8334Z"
                fill="#C6A372"
                stroke="#2B2B2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 33.3334L33.3333 25L25 16.6667"
                stroke="#2B2B2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.6666 25H33.3333"
                stroke="#2B2B2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <Swiper
          className="mt-5"
          ref={swiperRef}
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          initialSlide={2}
          slidesPerView={3}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 10,
            stretch: 10,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          onSlideChange={handlePaginationClick}
        >
          <SwiperSlide>
            <Image src={sliderImg1} alt="sliderImg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sliderImg2} alt="sliderImg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sliderImg3} alt="sliderImg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sliderImg4} alt="sliderImg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sliderImg5} alt="sliderImg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sliderImg6} alt="sliderImg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sliderImg7} alt="sliderImg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image priority={false} src={sliderImg8} alt="sliderImg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={sliderImg9} alt="sliderImg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
