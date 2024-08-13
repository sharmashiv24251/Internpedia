import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Button } from "@/components/ui/button";

const dummyProducts = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    price: 999.99,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000",
    description:
      "The ultimate iPhone experience with our most advanced camera system and fastest chip ever.",
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 999.99,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000",
    description:
      "Our thinnest, lightest notebook, completely transformed by the Apple M1 chip.",
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799.99,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126613000",
    description:
      "The ultimate iPad experience with the most advanced technology.",
  },
  {
    id: 4,
    name: "Apple Watch Series 7",
    price: 399.99,
    image:
      "https://www.apple.com/in/watch/images/overview/consider_modals/connectivity/modal_connectivity_wallet__cei8pmbtq4k2_xlarge.jpg",
    description:
      "The most durable Apple Watch ever, with our largest, most advanced display.",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {product.name}
          </h1>
          <p className="text-2xl font-medium mb-6 text-gray-700">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-lg mb-8 text-gray-600 leading-relaxed">
            {product.description}
          </p>
          <Button
            onClick={() => dispatch(addToCart(product))}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
