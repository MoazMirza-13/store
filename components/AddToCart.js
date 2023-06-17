"use client";

import ReactModal from "react-modal";

import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../app/redux/actions/productActions";

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
  //

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
        <div>
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <button onClick={() => handleIncreaseQuantity(item)}>
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleDecreaseQuantity(item)}>
                    -
                  </button>
                  <span>Total: {item.price * item.quantity}</span>
                  <button onClick={() => handleRemoveItem(item)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </ReactModal>
    </>
  );
}
