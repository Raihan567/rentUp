import React from "react";
import Back from "../Common/Back";
import "./About.css";
import img from "../images/about.jpg";
import Heading from "../Common/Heading";
const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About-Us" title="About us - Who we are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Out Agency Story"
              subtitle="Check out our company story and work process"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              aliquid quos modi veritatis sit iste ex cum deleniti facilis
              reprehenderit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              aliquid quos modi veritatis sit iste ex cum deleniti facilis
              reprehenderit?
            </p>
            <button className="btn2">More about us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
