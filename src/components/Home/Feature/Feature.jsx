import React from "react";
import Heading from "../../Common/Heading";
import "./Feature.css";
import FeatureCard from "./FeatureCard";
const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="container">
          <Heading
            title="Featured Property Types"
            subtitle="Find All Type of Property."
          />
          <FeatureCard></FeatureCard>
        </div>
      </div>
    </>
  );
};

export default Feature;
