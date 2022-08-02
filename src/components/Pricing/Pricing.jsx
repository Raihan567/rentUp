import React from "react";
import Back from "../Common/Back";
import img from "../images/pricing.jpg";
import PriceCard from "../Home/Price/PriceCard";
const Pricing = () => {
  return (
    <>
      <section className="pricing mb">
        <Back
          name="30 days money back guarantee"
          title="No Extra Fees. Friendly Support"
          cover={img}
        ></Back>
        <div className="container price">
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;
