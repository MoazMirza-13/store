"use client";

import ReactModal from "react-modal";
import { useSelector } from "react-redux";

export default function AddToCart({ isopen, onclose }) {
  const cart = useSelector((state) => state.cart);
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
            maxWidth: "90%",
            maxHeight: "90%",
            margin: "auto,",
            zIndex: 1000,
          },
        }}
      >
        <div className="flex justify-center items-center">
          {/* <h1 className="text-2xl">Your Cart Is Empty</h1> */}
          <h1 className="text-2xl">Product: {cart}</h1>
        </div>
      </ReactModal>
    </>
  );
}
