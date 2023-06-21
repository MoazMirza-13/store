"use client";
import "./globals.css";
import Head from "next/head";
//
import BeforeFooter from "@/components/BeforeFooter";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import store from "./redux/store";
// fonts
import { Playfair_Display, Montserrat } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});
const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// export const metadata = {
//   title: "Elegencia : a Furniture Store",
//   description: "Elegencia : an Online Furniture Store",
// };

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Elegencia : a Furniture Store</title>
        <meta
          name="description"
          content="Elegencia : an Online Furniture Store"
        />
      </Head>
      <html lang="en" className={` ${playfair.className} ${mont.className}`}>
        <body>
          <Provider store={store}>
            {children}
            <BeforeFooter />
            <Footer />
          </Provider>
        </body>
      </html>
    </>
  );
}
