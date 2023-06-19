"use client";

import ReactModal from "react-modal";
import { BsPlusCircle } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  emptyCart,
} from "../app/redux/actions/productActions";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

export default function AddToCart({ isopen, onclose }) {
  const cartItems = useSelector((state) => state.allProducts.cartItems);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(decreaseQuantity(item));
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 50 : 0;
  };

  const subtotal = useMemo(() => calculateSubtotal(), [cartItems]);
  const total = useMemo(() => calculateTotal(), [cartItems]);

  const [checkoutMode, setCheckoutMode] = useState(false);

  const handleCheckout = () => {
    setCheckoutMode(true);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const handleProceed = () => {
    if (
      firstName &&
      lastName &&
      email &&
      streetAddress &&
      city &&
      region &&
      postalCode
    ) {
      setIsFormFilled(true);
      setLastName("");
      setCity("");
      setEmail("");
      setFirstName("");
      setPostalCode("");
      setRegion("");
      setStreetAddress("");
      handleEmptyCart();
    } else {
      setIsFormFilled(false);
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
      <ReactModal
        isOpen={isopen}
        onRequestClose={onclose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
          content: {
            zIndex: 1000,
            padding: 0,
          },
        }}
      >
        <div className="flex bg-[#F5F5F5] flex-col justify-between lg:flex-row gap-12 lg:gap-0">
          <div className="min-w-[70%] ">
            <div>
              {!isFormFilled && showMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700  px-4  py-3 rounded text-center absolute md:top-[2.25rem] top-[1.25rem] sm:left-[8rem] left-0  md:left-[12.938rem] xl:left-[20.938rem]">
                  <span className="block sm:inline">
                    Please, Fulfill All The Information.
                  </span>
                </div>
              )}
              {isFormFilled && showMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700  px-4  py-3 rounded text-center absolute md:top-[2.25rem] top-[1.25rem] sm:left-[8rem] left-0  md:left-[12.938rem] xl:left-[20.938rem]">
                  <span className="block sm:inline">
                    Your Order Has Been Placed!
                  </span>
                </div>
              )}
            </div>

            <div className="max-w-[85%] m-auto py-8">
              <button onClick={onclose}>
                <MdCancel className="text-[#C6A372] text-4xl" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {checkoutMode && cartItems.length !== 0 && (
                <div className=" min-w-[70%] m-auto">
                  <h1 className=" font-mont font-semibold text-xl text-center lg:text-start">
                    SUMMARY
                  </h1>
                </div>
              )}
              {!checkoutMode && cartItems.length !== 0 && (
                <div className="flex xl:gap-[17rem] lg:gap-[14rem] max-w-[70%] m-auto">
                  <h1 className="font-mont font-semibold text-center lg:text-start">
                    Products
                  </h1>
                  <div className="lg:flex xl:gap-[8rem] gap-12 hidden ">
                    <h1 className="font-mont font-semibold">QUANTITY</h1>
                    <h1 className="font-mont font-semibold">TOTAL</h1>
                  </div>
                </div>
              )}
              {/*  */}
              <div className="flex justify-center">
                <hr className="bg-[#D9D9D9] md:w-[36.25rem] xl:w-[47.25rem] lg:w-[38.25rem] w-[12.25rem]  h-[0.188rem] rounded-full" />
              </div>
            </div>

            {cartItems.length === 0 ? (
              <h1 className=" font-mont font-medium pt-10 text-lg text-center">
                Your Cart Is Empty
              </h1>
            ) : (
              <>
                {checkoutMode ? (
                  <div className="border-b border-gray-900/10 max-w-[75%] m-auto p-4">
                    <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
                      Your Information
                    </h2>

                    <div className=" mt-[1.5rem] grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          for="first-name"
                          id="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First name
                        </label>
                        <div className="">
                          <input
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          id="last-name"
                          for="last-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last name
                        </label>
                        <div className="">
                          <input
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          for="email"
                          id="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                        <div className="">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label
                          id="street-address"
                          for="street-address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Street address
                        </label>
                        <div className="">
                          <input
                            onChange={(e) => setStreetAddress(e.target.value)}
                            value={streetAddress}
                            type="text"
                            name="street-address"
                            id="street-address"
                            autocomplete="street-address"
                            className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 sm:col-start-1">
                        <label
                          id="city"
                          for="city"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          City
                        </label>
                        <div className="">
                          <input
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                            type="text"
                            name="city"
                            id="city"
                            autocomplete="address-level2"
                            className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          id="region"
                          for="region"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          State / Province
                        </label>
                        <div className="">
                          <input
                            onChange={(e) => setRegion(e.target.value)}
                            value={region}
                            type="text"
                            name="region"
                            id="region"
                            autocomplete="address-level1"
                            className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          id="postal-code"
                          for="postal-code"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ZIP / Postal code
                        </label>
                        <div className="">
                          <input
                            onChange={(e) => setPostalCode(e.target.value)}
                            value={postalCode}
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autocomplete="postal-code"
                            className="block  w-[80%] rounded-md border-0 p-[0.47rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <button
                        onClick={handleProceed}
                        className="w-[37rem] h-[3rem] mt-4 bg-[#D4B78F] shadow-md rounded-lg text-white text-center "
                      >
                        Payment to Proceed
                      </button>
                    </div>
                  </div>
                ) : (
                  <ul className="max-w-[70%] flex flex-col gap-6 m-auto pt-12">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex xl:gap-[6rem] md:gap-10 items-center flex-col lg:flex-row gap-4"
                      >
                        <Image
                          width={128}
                          height={100}
                          src={item.img}
                          alt="Product Image"
                        />
                        <span className="font-mont flex flex-col gap-6 text-lg text-center">
                          {item.name}
                          <span className="font-mont flex flex-col gap-6 text-lg">
                            ${item.price}
                          </span>
                        </span>
                        <div className="flex gap-4">
                          <button onClick={() => handleIncreaseQuantity(item)}>
                            <BsPlusCircle className="text-[#888888] text-2xl" />
                          </button>
                          <button className="cursor-default border-2 border-gray-500 border-opacity-50 w-[3.524rem] h-[1.632rem] font-mont font-semibold text-xs">
                            {item.quantity}
                          </button>
                          <button onClick={() => handleDecreaseQuantity(item)}>
                            <AiOutlineMinusCircle className="text-[#888888] text-2xl" />
                          </button>
                        </div>
                        <span className="font-mont font-semibold text-sm">
                          ${item.price * item.quantity}
                        </span>
                        <button onClick={() => handleRemoveItem(item)}>
                          <MdCancel className="text-2xl hidden lg:block" />
                        </button>
                        <hr className="bg-[#D9D9D9] md:w-[35.25rem] w-[13.25rem] sm:w-[25.25rem] h-[0.188rem] rounded-full lg:hidden" />
                      </li>
                    ))}
                    <hr className="bg-[#D9D9D9]  xl:w-[49.25rem] h-[0.188rem] rounded-full hidden lg:block" />
                  </ul>
                )}
              </>
            )}
          </div>
          <div className="bg-[#D4B78F] p-8 lg:pt-20 pt-8 lg:pb-[10.6rem] text-white flex flex-col gap-6 lg:gap-10">
            <h1 className=" font-mont font-semibold text-xl">SUMMARY</h1>
            <hr className=" lg:w-[12i2.875rem] h-[0.188rem] rounded-full bg-[#A37B44]" />
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <h1 className="font-mont font-medium text-sm">Subtotal</h1>
                <p className="font-mont font-medium text-sm">${subtotal}</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-mont font-medium text-sm">Shippping</h1>
                <p className="font-mont font-medium text-sm">
                  ${calculateShipping()}
                </p>
              </div>
              <hr className=" lg:w-[12i2.875rem] h-[0.188rem] rounded-full bg-[#A37B44]" />
              <div className="flex justify-between">
                <h1 className="font-mont font-medium ">Total</h1>
                <p className="font-mont font-medium ">${total}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <button
                onClick={handleCheckout}
                className="bg-[#A37B44] rounded-md lg:w-[13.875rem] xl:w-[18.875rem] w-[12.875rem] h-[2.375rem] text-[#FFFFFF] font-medium font-mont text-sm"
              >
                Checkout
              </button>
              <button className=" font-medium font-mont text-xs">
                Continue Shopping
              </button>
            </div>
            <hr className=" lg:w-[12i2.875rem] h-[0.188rem] rounded-full bg-[#A37B44]" />
          </div>
        </div>
      </ReactModal>
    </>
  );
}
