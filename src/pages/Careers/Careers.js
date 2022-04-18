import React from "react";
import brickwall from "../../images/brickwall.jpg";
import { useForm} from "@formspree/react";
import { Button } from "theme-ui";
import "./Careers.css";
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
    <FadeIn>
      <main>
        <div className="wrap-text-careers">
          <div className="careers-title-section">
            <h1 align="center" className="title">
              CAREERS
            </h1>
            <h6 align="center">
              <i>Join our diverse, multi-faceted team.</i>
            </h6>
          </div>
          <container className="careers_container">
            <div className="img-area">
              <img className="career-img" src={brickwall}></img>
            </div>
            <div className="careers_text">
              <h2>
                AT MOONBEAM TRADING COMPANY,<br></br> WE HIRE FROM A HOLISTIC
                PERSPECTIVE...
              </h2>
              <br></br>
              <h6>
                We recognize all of the different life transitions that people
                may encounter in life. <br></br>
                We value everyone's opinion, and believe the key to success is
                having a multitude<br></br> of perspectives.
                <br></br>
                <br></br>
                If you have faced any career obstacles relating to
                accessibility, or life challenges<br></br> such as addition,
                incarceration, and/or physical/mental health , you are
                encouraged <br></br>to apply. Tell us your story!
              </h6>
              <a href="careers/apply">
                <Button 
                   type="submit"
                   variant="outlined"
                   
                id="apply-btn">APPLY
                </Button>
              </a>
            </div>
          </container>
        </div>
      </main>
    </FadeIn>
  );
};
export default Careers;


