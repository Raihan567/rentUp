import React from "react";
import Heading from "../../Common/Heading";
import "./Price.css";
import PriceCard from "./PriceCard";
const Price = () => {
  return (
    <>
      <div className="price padding">
        <div className="container">
          <Heading
            title="Select Your Package"
            subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
          ></Heading>
          <PriceCard />
        </div>
      </div>
    </>
  );
};

export default Price;
