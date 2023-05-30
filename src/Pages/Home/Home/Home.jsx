import React from "react";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Popularmenu from "../Popular Menu/Popularmenu";
import Fetured from "../Fetaured/Fetured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <Popularmenu></Popularmenu>
      <Fetured></Fetured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
