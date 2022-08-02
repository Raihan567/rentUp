import React from "react";
import "./Location.css";
import Heading from "../../Common/Heading";
import { location } from "../../Data/Data";
const Location = () => {
  return (
    <>
      <div className="location padding">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="Determine if your area of interest (AOI) is available for your purpose by researching what is currently happening on the land. You can customize the map view by selecting the appropriate Category of Interest from the dropdown menu in Step 1."
          ></Heading>

          <div className="content  mtop grid3">
            {location.map((item, index) => (
              <div className="box shadow" key={index}>
                <img src={item.cover} alt="" />
                <div className="overlay">
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
