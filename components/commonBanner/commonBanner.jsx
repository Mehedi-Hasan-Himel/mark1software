import React from "react";
import Link from "next/image";
import Button from "../Button/Button";
const commonBanner = ({header}) => {
  return (
    <>
      {/* Work Samples Start */}
      <section className="text-center lg:my-12 py-6 bg-primary">
        <section className="lg:text-8xl font-bold pb-5">
          <h1 className="px-5">
            {header}
          </h1>
        </section>
        <p></p>

        <Button title="Request for work Sample" route="./Contact" />
      </section>
      {/* Work Samples End */}
    </>
  );
};

export default commonBanner;
