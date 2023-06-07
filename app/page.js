import Link from "next/link";
import styles from "../app/css modules/bg_image.module.css";
import btn from "../app/css modules/btn.module.css";
export default function Home() {
  return (
    <>
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
      <div>
        <h1>hi</h1>
      </div>
    </>
  );
}
