import React from "react";
import Back from "../Common/Back";
import img from "../images/services.jpg";
import FeatureCard from "../Home/Feature/FeatureCard";
import '../Home/Feature/Feature.css'
const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back name="Services" title="Services -All Services" cover={img} />
        <div className="feature container">
          <FeatureCard />
        </div>
      </section>
    </>
  );
};

export default Services;
