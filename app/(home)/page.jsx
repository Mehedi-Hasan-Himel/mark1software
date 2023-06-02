import React from "react";
import CTA from "../../components/cta/page";
import Cards from "../../components/cards/page";
import HomeAbout from "../../components/homeAbout/homeAbout";
import OurServices from "../../components/ourServices/ourServices"


const HomePage = () => {
  return (
    <section className="container px-5 py-5 mx-auto ">
      <CTA />
      <HomeAbout />
      <Cards />
      <OurServices/>
    </section>
  );
};

export default HomePage;
