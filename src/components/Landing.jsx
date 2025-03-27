import React from "react";
import "../styles/Landing.css";
import mylogo from "../Assets/Images/mylogo.png";
import slideimg from "../Assets/Images/slideimg.png"
import { BiSolidTaxi } from "react-icons/bi";

function Landing() {
  return (
    <div className="home">
      <div className="logopage">
        <div className="header-container">
          <img src={mylogo} className="headerimg" />
          <h1 className="heading">
            <span>EASY</span>PAY
          </h1>
        </div>
        <div className="content">
          <h1>
            <br />
            Fast and Secure Rides
            <br /> with flexible Payment Options
          </h1>
          <button className="buttoncontent">Get Started</button>
        </div>
      </div>

      <div className="navpage">
        <nav>
          <ul>
            <li className="list">
              <a href="#home">
                Home<span></span>
              </a>
            </li>
            <li className="list">
              <a href="#about">
                About Us<span></span>
              </a>
            </li>
            <button className="nav_button">
              <a href="/login">SignUp</a>
            </button>
            <button className="nav_button ">
              <a href="/login">Login</a>
            </button>
          </ul>
        </nav>
        <div className="logo_container">
          <img src={slideimg} className="slide_img"/>
        </div>
      </div>
    </div>
  );
}
export default Landing;
{
  /* <header>
        <nav>
          <h1 className="logo">
            <BiSolidTaxi className="icon" />
          </h1>
          <ul>
            <li className="list">
              <a href="#logo">
                <img src={logo} alt="Red Radar Logo" className="navlogo" />
                <span></span>
              </a>
            </li>
            <li className="list">
              <a href="#home">
                Home<span></span>
              </a>
            </li>
            <li className="list">
              <a href="#about">
                About Us<span></span>
              </a>
            </li>
            <button className="signup-button ">
              <a href="#signup">SignUp</a>
            </button>
            <button className="login-button ">
              <a href="#login">Login</a>
            </button>
          </ul>
        </nav>

        <div className="content">
          <h1 className="logoname">EasyPay</h1>
          <div className="landing-page">
            <h1>
              <br />
              Fast and Secure Rides
              <br /> with flexible Payment Options
            </h1>
            <button className="button-content">Get Started</button>
          </div>
          <div>
            <img
              src={landpage_pic}
              alt="Landing page"
              className="feature_img"
            />
          </div>
        </div>
      </header>
    */
}
