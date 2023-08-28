import React from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    title: "Shoes Olahraga",
    image: "/images/shoes1.jpg",
    price: "Rp 200.000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi.",
  },
  {
    id: 1,
    title: "Shoes Olahraga",
    image: "/images/shoes1.jpg",
    price: "Rp 200.000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi.",
  },
  {
    id: 1,
    title: "Shoes Olahraga",
    image: "/images/shoes1.jpg",
    price: "Rp 200.000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi.",
  },
  {
    id: 1,
    title: "Shoes Olahraga",
    image: "/images/shoes1.jpg",
    price: "Rp 200.000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi.",
  },
  
];
function Products() {
  return (
    <div className="flex justify-center py-5 gap-5 max-md:4">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.title}>
            {product.desc}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}/>
        </CardProduct>
      ))}
    </div>
  );
}

export default Products;
