import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Popularmenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/public/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  console.log(menu);
  return (
    <section className="flex flex-col items-center">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn mt-5 btn-outline border-0 border-b-2">
        View Full Menu
      </button>
    </section>
  );
};

export default Popularmenu;
