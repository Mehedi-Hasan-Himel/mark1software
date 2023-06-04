import React from "react";
import CTA from "../../components/cta/page";
import Cards from "../../components/cards/page";
import HomeAbout from "../../components/homeAbout/homeAbout";
import OurServices from "../../components/ourServices/page";
import ExperienceWith from "../../components/ExperienceWith/page";
import Banner from "../../components/banner/Banner";
import CommonBanner from "../../components/commonBanner/commonBanner";
import Number from "../../components/number/Number";
import Button from "../../components/Button/Button";
const HomePage = () => {
  return (
    <>
      <section className="container px-5 py-5 mx-auto text-center">
        <CTA />
        <HomeAbout
          title="About"
          header="About Us"
          desc=" At Mark One Soft, we are passionate about driving digital
                  transformation for businesses. As a trusted IT consultancy and
                  software engineering firm, we specialize in delivering
                  innovative solutions tailored to your specific needs. With our
                  expertise and cutting-edge technologies, we help businesses
                  optimize operations, enhance online presence, and ensure the
                  security of their systems. Partner with us to experience the
                  difference as we propel your business forward in the
                  ever-evolving digital landscape."
          button="Learn More"
        />
        <Cards />
        <OurServices />
        <ExperienceWith />
        <CommonBanner header="We have work with over 850 Clients!" />
        <Banner />
        <Number
          header="+88 017 16 798704"
          desc="Unleash your projects full potential with us! Our expert team is ready to bring your vision to life with exceptional results. Contact us now and lets create something extraordinary together!"
        />
        <Button title="Book Consultation" route="./Contact" />
      </section>
    </>
  );
};

export default HomePage;
