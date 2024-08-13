import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/cartSlice";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            Your cart is empty
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 mb-6 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-6"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </Button>
                  <span className="mx-3 text-lg">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="ml-6"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Total: ${total.toFixed(2)}
              </h2>
              <Button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
