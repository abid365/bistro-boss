import React from "react";

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex space-x-2 items-center">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[80px]"
        src={image}
        alt=""
      />
      <div>
        <h1 className="uppercase">{name}----------</h1>
        <p>{recipe}</p>
      </div>
      <small className="text-yellow-500">{price}</small>
    </div>
  );
};

export default MenuItem;
