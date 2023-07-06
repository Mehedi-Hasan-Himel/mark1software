import React from "react";
import HomeAbout from "../../components/homeAbout/homeAbout";
import Mission from "../../components/Mission/Mission"
import AboutData from "./AboutData.json"
  
import WhyChooseUs from "../../components/whyChooseUs/whyChooseUs";
const About = () => {
  return (
    <>
      <section className="">
        <HomeAbout
          title="About"
          header="About Us"
          desc="Our goal is to deliver high-quality software that meets the highest standards of performance, reliability, and security, and help our clients achieve success. At Mark One Soft, we are passionate about driving digital
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
        {/* Who we are and mission start*/}
        <Mission data={AboutData} />
        {/* Who we are and mission end*/}

        {/* Who Choose Start */}
        <WhyChooseUs />
        {/* Who Choose End */}
      </section>
    </>
  );
};

export default About;
