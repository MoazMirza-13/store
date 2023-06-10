"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/swiper.min.css";
// slider#1
import sliderImg1 from "../public/after-hero-slider/image 8.png";
import sliderImg2 from "../public/after-hero-slider/image 9.png";
import sliderImg3 from "../public/after-hero-slider/image 11.png";
import sliderImg4 from "../public/after-hero-slider/image 10.png";
import sliderImg5 from "../public/after-hero-slider/image 15.png";
import sliderImg6 from "../public/after-hero-slider/image 18.png";
import sliderImg7 from "../public/after-hero-slider/image 17.png";
import sliderImg8 from "../public/after-hero-slider/image 14.png";
import sliderImg9 from "../public/after-hero-slider/image 19.png";
// slider#2
import slider_2Img1 from "../public/best-selling-slider/image 20.png";
import slider_2Img2 from "../public/best-selling-slider/image 24.png";
import slider_2Img3 from "../public/best-selling-slider/image 22.png";
import slider_2Img4 from "../public/best-selling-slider/image 25.png";
import slider_2Img5 from "../public/best-selling-slider/image 26.png";
import slider_2Img6 from "../public/best-selling-slider/image 23.png";
import slider_2Img7 from "../public/best-selling-slider/image 21.png";
import slider_2Img8 from "../public/best-selling-slider/image 27.png";
import slider_2Img9 from "../public/best-selling-slider/image 28.png";
import styles from "../app/css modules/bg_image.module.css";
import btn from "../app/css modules/btn.module.css";

import "swiper/swiper-bundle.css";

export default function Home() {
  return (
    <>
      {/* hero-section */}
      <main
        className={`${styles["bg-image"]} rounded-tl-none rounded-tr-none rounded-br-3xl rounded-bl-3xl`}
      >
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
      <div className="max-w-[90%] m-auto mt-14">
        <div className="max-w-[95%] m-auto flex flex-col items-end">
          <h1 className="font-mont font-semibold text-xl">New Furniture</h1>
          <h1 className="font-playfair font-semibold text-5xl leading-[4.563rem]">
            JUST ARRIVED
          </h1>
        </div>
        <div className="">
          <div className="flex justify-between relative top-[20rem]">
            <button onClick={() => swiper.slidePrev()}>
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
            <button onClick={() => swiper.slideNext()}>
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
            style={{ padding: "0 3rem 3rem 3rem", maxWidth: "93%" }}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            initialSlide={2}
            slidesPerView={3}
            effect="coverflow"
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 4,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            onSwiper={(swiper) => (window.swiper = swiper)}
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
      </div>
      {/* best selling */}
      <div className="max-w-[84%] m-auto mt-10">
        <div className="flex items-center gap-4">
          <h1 className="font-playfair font-semibold text-5xl leading-[4.563rem]">
            Best Selling Products
          </h1>
          <hr className="w-[38.875rem] h-[0.188rem] bg-[#D4B78F] rounded-full" />
        </div>
        <div className="flex justify-end gap-6 mb-6">
          <button onClick={() => swiper2.slidePrev()}>
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
          <button onClick={() => swiper2.slideNext()}>
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
          slidesPerView={4}
          spaceBetween={2}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          onSwiper={(swiper) => (window.swiper2 = swiper)}
        >
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img1} />
          </SwiperSlide>
          <SwiperSlide>
            <Image priority="true" alt="slider image" src={slider_2Img2} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img3} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img4} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img5} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img6} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img7} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img8} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="slider image" src={slider_2Img9} />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mt-10">
          <button
            className={`${btn["btn-3"]} font-semibold text-xl text-white flex items-center justify-center  gap-[0.2rem]`}
          >
            Explore All Products
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.85364 12.0554H19.8536"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.8536 5.05542L19.8536 12.0554L12.8536 19.0554"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
