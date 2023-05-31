import React from "react";
import CTA from "../../components/cta/page.jsx";
import Cards from "../../components/cards/page.jsx";
import HomeAbout from "../../components/homeAbout/homeAbout.jsx";

const HomePage = () => {
  return (
    <section className="container px-5 py-5 mx-auto ">
      <CTA />
      <HomeAbout/>
      <Cards />
    </section>
  );
};

export default HomePage;
