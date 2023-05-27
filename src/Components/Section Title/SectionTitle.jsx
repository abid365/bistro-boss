import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-8">
      <p className="text-yellow-600">{subHeading}</p>
      <h1 className="text-3xl uppercase border-y-2 py-4">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
