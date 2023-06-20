import Image from "next/image";
import before_footerImg from "../public/before-footer/Group 31.png";
import btn from "../app/modules/btn.module.css";
import { Formik, Field, Form } from "formik";
import { useState, useEffect } from "react";
export default function BeforeFooter() {
  const [showAlert, setShowAlert] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const testEmail = (values) => {
    if (values.email) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const isValidEmail = emailRegex.test(values.email);

      if (isValidEmail) {
        setShowAlert(true);
        values.email = "";
      } else {
        setShowAlert(false);
      }
    } else {
      setShowAlert(false);
    }
    setShowMessage(true);
  };

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 2500);
    }

    return () => clearTimeout(timer);
  }, [showMessage]);
  return (
    <>
      <div className="max-w-[84%] m-auto mt-20 flex flex-col xl:flex-row gap-8 md:gap-8 lg:gap-4 justify-between items-center mb-8 ">
        <div className="flex flex-col gap-4 items-center text-center">
          {showAlert && showMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center fixed md:top-[2.25rem]i top-[1.25rem]i sm:left-[8rem]i left-0 right-0 top-[67px] md:left-[12.938rem]i xl:left-[20.938rem]i">
              <span className="block sm:inline">
                You Are Now Subscribed To Elegencia
              </span>
            </div>
          )}
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
          <Formik initialValues={{ name: "", email: "" }} onSubmit={testEmail}>
            <div
              className=" relative 
                    border border-[#e4cb901a]  border-gray-900 border-opacity-80 flex rounded-[3.346rem]"
            >
              <Form>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your Email Adress"
                  className="font-mont font-medium text-sm bg-[#e4cb901a] text-[#C8C8C8] placeholder-[#C8C8C8] outline-none   px-[265.558px] py-[1.338rem] lg:pr-[13.597rem]  md:pr-[7.597rem] pr-[4.597rem]  flex-grow lg:pl-[2.409rem] pl-[0.5rem]"
                />
                <button
                  className={`${btn["btn-5"]} md:w-[132.29px] w-[85.29px] font-mont font-medium text-sm text-white absolute top-[5px] right-[6px] `}
                >
                  Subscribe
                </button>
              </Form>
            </div>
          </Formik>
        </div>
        <Image src={before_footerImg} alt="img" />
      </div>
    </>
  );
}
