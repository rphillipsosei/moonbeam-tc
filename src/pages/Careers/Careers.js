import React from "react";
import brickwall from "../../images/brickwall.jpg";
import walksoflife from "../../images/walksoflife.jpg";
import diversity from "../../images/diversity.jpg";
import aboutbg from "../../images/about--bg.jpeg";
import whitenoise from "../../images/whitenoise.jpg";
import { useForm, ValidationError } from "@formspree/react";
import { Paper } from "@mui/material";
import { Button } from "theme-ui";
import { Link } from "react-router-dom";
import "./Careers.css"
import FadeIn from "react-fade-in/lib/FadeIn";

const Careers = () => {
  const [state, handleSubmit] = useForm("xknyqzly");
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  if (state.succeeded) {
    return <p>Submitted sucessfully!</p>;
  }
  return (
    <div><FadeIn>
     
    <div className="careers-title-section">
        <h1 align="center" className="title">
          CAREERS
        </h1>
        <h6 align="center">
          <i>
          Join our diverse, multi-faceted team.
          </i>
        </h6>
       
      </div>
      <container className="content-section-careers">
      <div className="img-section">
    <img className="careers-img" src={brickwall}></img>
    <div className="intro-text">
      
      <p>
        <h2>
        AT MOONBEAM TRADING COMPANY,<br></br> WE HIRE FROM A HOLISTIC PERSPECTIVE...
        </h2>
        <br></br>
        <h6>
            We recognize all of the different life transitions that people may encounter in life. <br></br>
            We value everyone's opinion, and believe the key to success is
            having a multitude<br></br> of perspectives.
            <br></br>
            <br></br>
           
            If you have faced any career obstacles relating to accessibility, or life
            challenges<br></br> such as addition,  incarceration, and/or physical/mental
            health , you are encouraged <br></br>to apply. Tell us your story!
          </h6>
      </p>
      </div>
      <div className="btn-section">
        <a href="careers/apply">
       <button id="apply-btn">APPLY</button></a>
        </div>
    </div>
  </container>
  </FadeIn>
  </div>
  );
};
export default Careers;
