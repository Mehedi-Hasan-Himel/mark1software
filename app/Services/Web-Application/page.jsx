import React from "react";
import Price from "../../../components/Price/Price";
import Mission from "../../../components/Mission/Mission";
import WebApplicationData from "./Web-Application.json";
const WebApplication = () => {
  return (
    <section>
      <Mission data={WebApplicationData} />

      {/* Pricint Start */}
      <Price />
      {/* Pricint End */}
    </section>
  );
};

export default WebApplication;
