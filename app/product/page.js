"use client";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, selectedProduct } from "../redux/actions/productActions";

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.product);

  const handleAddToCart = () => {
    const updatedProducts = [...products];
    updatedProducts.push({
      id: updatedProducts.length + 1,
      name: "New Product",
      price: 100,
    });
    dispatch(setProducts(updatedProducts));
    dispatch(selectedProduct(updatedProducts));
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-900">Product Details</h1>

        <button
          onClick={handleAddToCart}
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
            Add To Cart
          </span>
          <span className="relative invisible"> Add To Cart</span>
        </button>
      </div>
    </>
  );
}
//