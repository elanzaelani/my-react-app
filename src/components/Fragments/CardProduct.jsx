import React from "react";
import Button from "../Elements/Button";

function CardProduct(props) {
  const { children } = props;
  return (
    <div>
      <div className="w-full max-w-sm bg-gray-800 border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between h-full">
        {children}
      </div>
    </div>
  );
}

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 ">
      <a href="">
        <h5 className="text-white fonts-semibold text-xl tracking-tight">
          {title}
        </h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-S font-bold text-white">{price}</span>
      <Button variant="bg-blue-600">Add to Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
