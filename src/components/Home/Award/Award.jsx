import React from "react";
import "./Award.css";
import Heading from "../../Common/Heading";
import { awards } from "../../Data/Data";
const Award = () => {
  return (
    <>
      <div className="awards padding">
        <div className="container">
          <Heading
            title="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
"
            subtitle="our awards"
          ></Heading>
          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <div>
                    {/* <span>{val.icon}</span> */}
                    <h1>{val.num}</h1>
                    <p>{val.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
