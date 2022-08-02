import React from "react";
import Back from "../Common/Back";
import RecentCard from "../Home/Recent/RecentCard";
import img from "../images/about.jpg";
import "../Home/Recent/Recent.css";
const Blog = () => {
  return (
    <>
      <section className="blog-out mb">
        <Back name="Blog" title="Blog -Grid Out Blog" cover={img} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
