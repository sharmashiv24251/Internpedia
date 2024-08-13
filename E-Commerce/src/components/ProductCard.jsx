import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Link to={`/product/${product.id}`}>
            <Button
              variant="outline"
              className="text-blue-600 hover:text-blue-800"
            >
              View Details
            </Button>
          </Link>
          <Button
            onClick={() => dispatch(addToCart(product))}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
