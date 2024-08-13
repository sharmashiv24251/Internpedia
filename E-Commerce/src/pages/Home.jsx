import React from "react";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    price: 999.99,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000",
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 999.99,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1633027804000",
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799.99,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126613000",
  },
  {
    id: 4,
    name: "Apple Watch Series 7",
    price: 399.99,
    image:
      "https://www.apple.com/in/watch/images/overview/consider_modals/connectivity/modal_connectivity_wallet__cei8pmbtq4k2_xlarge.jpg",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
