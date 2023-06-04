import React from "react";
const Number = ({ header, desc }) => {
  return (
    <>
      {/* Contact Number Start */}
      <section className="text-center md:py-12 py-6 ">
        <section className="md:text-7xl text-3xl font-bold pb-5">
          <h1 className="headingTag">{header}</h1>
        </section>
        <p className="m-5 ">{desc}</p>
      </section>
      {/* Contact Number End */}
    </>
  );
};

export default Number;
