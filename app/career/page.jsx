import React from "react";
import Career from "../../components/career/Career";
import Investor from "../../components/career/Investor";
import Mission from "../../components/career/Mission";
import Values from "../../components/career/Values";
import Team from "../../components/career/Team";

const CareerPage = () => {
  return (
    <div>
      <Career />
      <Mission />
      <Values />
      <Team />
      <Investor />
    </div>
  );
};

export default CareerPage;

// export default function page() {
//   return (
//     <>
//       <Career />
//       <Mission />
//       <Values />
//       <Team />
//       <Investor />
//     </>
//   );
// }
