import React from "react";
import Award from "./Award/Award";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Location from "./Location/Location";
import Price from "./Price/Price";
import Recent from "./Recent/Recent";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Feature></Feature>
      <Recent></Recent>
      <Award></Award>
      <Location></Location>
      <Team></Team>
      <Price></Price>
    </div>
  );
};

export default Home;
