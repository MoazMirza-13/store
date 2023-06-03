"use client";

import ReactModal from "react-modal";

import { useSelector } from "react-redux";

export default function AddToCart({ isopen, onclose }) {
  const products = useSelector((state) => state.allProducts.selectedProduct);

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
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id}>
                <h1 className="text-2xl">
                  Product: {product.name}, Number: {product.id}
                </h1>
              </div>
            ))
          ) : (
            <h1>Your Cart is Empty</h1>
          )}
        </div>
      </ReactModal>
    </>
  );
}
