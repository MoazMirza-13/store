"use client";
import Image from "next/image";
import before_footerImg from "../public/before-footer/Group 31.png";
import btn from "../app/modules/btn.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
export default function BeforeFooter() {
  const [showAlert, setShowAlert] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const handleEmail = (values) => {
    if (validationSchema.isValidSync(values)) {
      setShowAlert(true);
      setShowMessage(true);
      values.email = "";
      // console.log(values);
    }
  };

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [showMessage]);
  return (
    <>
      <div className="max-w-[84%] m-auto mt-20 flex flex-col xl:flex-row gap-8 md:gap-8 lg:gap-4 justify-between items-center mb-8 ">
        <m.div
          initial={{ opacity: 0, y: -30, x: -25 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-4 items-center text-center"
        >
          {showAlert && showMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center static">
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
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleEmail}
          >
            <Form className=" relative flex flex-col">
              <Field
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your Email Adress"
                className="font-mont font-medium text-sm bg-[#e4cb901a] text-[#C8C8C8] placeholder-[#C8C8C8] outline-none   px-[265.558px] py-[1.338rem] lg:pr-[13.597rem]  md:pr-[7.597rem] pr-[4.597rem]  flex-grow lg:pl-[2.409rem] pl-[0.5rem] border border-[#e4cb901a]  border-gray-900 border-opacity-80  rounded-[3.346rem]"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-500"
              />
              <button
                type="submit"
                className={`${btn["btn-5"]} md:w-[132.29px] w-[85.29px] font-mont font-medium text-sm text-white absolute top-[5px] right-[6px]`}
              >
                Subscribe
              </button>
            </Form>
          </Formik>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: -30, x: 25 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image priority src={before_footerImg} alt="img" />
        </m.div>
      </div>
    </>
  );
}
