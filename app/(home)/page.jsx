import React from "react";
import CTA from "../../components/cta/page";
import Cards from "../../components/cards/page";
import HomeAbout from "../../components/homeAbout/homeAbout";
import OurServices from "../../components/ourServices/page";
import ExperienceWith from "../../components/ExperienceWith/page";

const HomePage = () => {
  return (
    <section className="container px-5 py-5 mx-auto ">
      <CTA />
      <HomeAbout />
      <Cards />
      <OurServices />
      <ExperienceWith />
    </section>
  );
};

export default HomePage;
