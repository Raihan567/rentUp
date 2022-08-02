import React from "react";
import "./Footer.css";
import lightLogo from "../../../img/logo-light.png";
import { footer } from "../../Data/Data";
const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="box">
            <div className="flex send">
              <div className="text">
                <h1>Do You Have Any Questions?</h1>
                <p>We'll help you to grow your career and growth.</p>
              </div>
              <button className="btn5">Contact us today</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={lightLogo} alt="/" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className="flex input">
                <input type="text" placeholder="Enter Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2021 RentUP. Designed By Raihan.</span>
      </div>
    </>
  );
};

export default Footer;
