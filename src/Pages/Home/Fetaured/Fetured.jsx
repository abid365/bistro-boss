import React from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import feturedImg from "../../../assets/home/featured.jpg";

const Fetured = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/z5HphJT/featured.jpg')] text-white pt-8 my-20 bg-fixed">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check it Out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-900 opacity-80 backdrop-blur">
        <div>
          <img className="" src={feturedImg} alt="featured image" />
        </div>

        <div className="md:ml-10 text-white font-bold">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aliquid sequi delectus inventore soluta harum aliquam rem iure eius
            quasi atque debitis corrupti, ducimus nostrum impedit numquam modi
            tempora, animi dolor, reprehenderit iusto consequuntur? Obcaecati
            ipsum fugit recusandae nostrum doloremque saepe, possimus assumenda
            tenetur maxime beatae ducimus molestiae corporis et.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;
