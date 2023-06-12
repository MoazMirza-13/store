// "use client";
// import { useEffect, useState } from "react";
// import AddToCart from "./AddToCart";
// import Link from "next/link";
// import { BiSearch } from "react-icons/bi";
// import { IoMdCart } from "react-icons/io";
// import { HiMenuAlt3, HiX, HiArrowCircleUp } from "react-icons/hi";

// export default function Navbar() {
//   const [showCart, setShowCart] = useState(false);

//   const handlecart = () => {
//     setShowCart(true);
//   };

//   const handleCloseCart = () => {
//     setShowCart(false);
//   };

//   const [navBg, setNavBg] = useState(false);

//   useEffect(() => {
//     const changecolor = () => {
//       if (window.scrollY >= 90) {
//         setNavBg(true);
//       } else {
//         setNavBg(false);
//       }
//     };

//     if (typeof window !== "undefined") {
//       window.addEventListener("scroll", changecolor);
//     }

//     return () => {
//       if (typeof window !== "undefined") {
//         window.removeEventListener("scroll", changecolor);
//       }
//     };
//   }, []);

//   const navLi = [
//     { id: "home", title: "Home" },
//     { id: "products", title: "Products" },
//     { id: "categories", title: "Categories" },
//     { id: "testimonials", title: "Testimonials" },
//     { id: "contact us", title: "Contact Us" },
//   ];
//   const [Open, setOpen] = useState(false);
//   return (
//     <>
//       <div
//         className={`py-6 fixed top-0 left-0 right-0 z-50 ${
//           navBg ? "nav-bg" : ""
//         }`}
//       >
//         <nav className=" flex  max-w-[85%] m-auto justify-between items-centeri">
//           <Link
//             href="/"
//             className="font-playfair text-lg font-bold tracking-widest"
//           >
//             ELEGENCIA
//           </Link>
//           <div
//             className={`md:gap-12 md:static  flex flex-col w-full  md:w-auto gap-8  md:items-start text-center  md:h-0 h-screen   bg-blacki absolute left-0
//           ${
//             Open
//               ? "top-12 visibility-visible justify-center"
//               : "top-[-790px] visibility-hidden"
//           }`}
//           >
//             <ul className="font-mont  gap-9 lg:gap-8 xl:gap-12 md:gap-6 md:flex-row md:flex flex-col hidden ">
//               {navLi.map(({ id, title }) => (
//                 <li className="tracking-wide" key={id}>
//                   {title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex gap-8">
//             <button className="text-2xl">
//               <BiSearch />
//             </button>
//             <button onClick={handlecart} className="text-2xl">
//               <IoMdCart />
//             </button>
//           </div>
//           <div
//             onClick={() => setOpen(!Open)}
//             className="cursor-pointer md:hidden"
//           >
//             {Open ? (
//               <HiX className="text-3xl" />
//             ) : (
//               <HiMenuAlt3 className="text-3xl" />
//             )}
//           </div>
//         </nav>
//         {showCart && <AddToCart isopen={showCart} onclose={handleCloseCart} />}
//       </div>
//     </>
//   );
// }
//
"use client";
import { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { HiMenuAlt3, HiX, HiArrowCircleUp } from "react-icons/hi";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const navLi = [
    { id: "home", title: "Home" },
    { id: "products", title: "Products" },
    { id: "categories", title: "Categories" },
    { id: "testimonials", title: "Testimonials" },
    { id: "contact us", title: "Contact Us" },
  ];

  const [Open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`py-6 fixed top-0 left-0 right-0 z-50 ${
          navBg ? "nav-bg" : ""
        }`}
      >
        <nav className="flex max-w-[85%] m-auto justify-between items-centeri">
          <Link
            href="/"
            className="font-playfair text-lg font-bold tracking-widest"
          >
            ELEGENCIA
          </Link>
          <div
            className={`md:gap-12 md:static flex flex-col w-full md:w-auto gap-8 md:items-start text-center md:h-0 h-screen bg-blacki absolute left-0 ${
              Open ? "top-12 visible justify-center" : "top-[-790px] hidden"
            }`}
          >
            <ul className="font-mont gap-9 lg:gap-8 xl:gap-12 md:gap-6 md:flex-row md:flex flex flex-col">
              {navLi.map(({ id, title }) => (
                <li className="tracking-wide" key={id}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-8">
            <button className="text-2xl">
              <BiSearch />
            </button>
            <button onClick={handleCart} className="text-2xl">
              <IoMdCart />
            </button>
          </div>
          <div
            onMouseDown={() => setOpen(!Open)}
            className="cursor-pointer md:hidden"
          >
            {Open ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenuAlt3 className="text-3xl" />
            )}
          </div>
        </nav>
        {showCart && <AddToCart isopen={showCart} onclose={handleCloseCart} />}
      </div>
    </>
  );
}
