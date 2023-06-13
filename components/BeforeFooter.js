import Image from "next/image";
import before_footerImg from "../public/before-footer/Group 31.png";
import btn from "../app/modules/btn.module.css";
export default function BeforeFooter() {
  return (
    <>
      <div className="max-w-[84%] m-auto mt-20 flex flex-col xl:flex-row gap-8 md:gap-8 lg:gap-4 justify-between items-center mb-8 ">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="font-mont font-medium text-xl text-[#D4B78F]">
            Newsletter
          </h1>
          <h1 className="font-playfair font-semibold text-3xl">
            Dont miss our Daily Updates
          </h1>
          <hr className="bg-[#D4B78F] rounded-full w-[15.688rem] h-[0.25rem]" />
          <p className="font-mont font-medium text-sm text-[#888888]">
            Be the first to discover our latest furniture designs and exclusive
            offers. <br /> Subscribe now for special discounts and stay in the
            loop!
          </p>
          <div
            className=" relative 
                    border border-[#e4cb901a]  border-gray-900 border-opacity-80 flex rounded-[3.346rem]"
          >
            <input
              type="text"
              placeholder="Enter your Email Adress"
              className="font-mont font-medium text-sm bg-[#e4cb901a] text-[#C8C8C8] placeholder-[#C8C8C8] outline-none   px-[265.558px] py-[1.338rem] lg:pr-[16.597rem] pr-[7.597rem]  lg:pl-[2.409rem] pl-[0.5rem]"
            />
            <button
              className={`${btn["btn-5"]} font-mont font-medium text-sm text-white absolute top-[5px] right-[6px] `}
            >
              Subscribe
            </button>
          </div>
        </div>
        <Image src={before_footerImg} alt="img" />
      </div>
    </>
  );
}
