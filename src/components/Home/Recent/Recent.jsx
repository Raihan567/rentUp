import React from "react";
import Heading from "../../Common/Heading";
import "./Recent.css";
import RecentCard from "./RecentCard";
const Recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Property is any item that a person or a business has legal title over. Property can be tangible items, such as houses, cars, or appliances, or it can refer to intangible items that carry the promise of future worth, such as stock and bond certificates."
          ></Heading>
          <RecentCard></RecentCard>
        </div>
      </section>
    </>
  );
};

export default Recent;
