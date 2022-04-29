import React from "react";
import brickwall from "../../images/brickwall.jpg";
import { useForm } from "@formspree/react";
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
            <h1 align="center" className="careers-title">
              CAREERS
            </h1>
            <h6 align="center">
              <i className="careers-caption">
                Join our diverse, multi-faceted team.
              </i>
            </h6>
          </div>
          <br></br>
          <container className="careers_container">
            <div className="img-area">
              <img className="career-img" src={brickwall}></img>
            </div>
          
              <h2 className="careers-header-text">
                AT MOONBEAM TRADING COMPANY,<br></br> WE HIRE FROM A HOLISTIC
                PERSPECTIVE...
                <br></br><br></br>
              </h2>
              <br></br>
              <h6 className="careers-text">
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
                <br></br>
                <Button className="careers-button"type="submit" sx={styles.button}>
                  APPLY
                </Button>
              </a>
            
          </container>
        </div>
      </main>
    </FadeIn>
  );
};
export default Careers;

const styles = {
  button: {
    fontFamily: "Comfortaa",
    backgroundColor: "#000",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["18px"],
    maxWidth: "80%",
    color: "#fff",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["100%", null, null, "auto"],
    mt: "24px",
    mx: ["auto", null, null, "0"],
    "&:hover": {
      backgroundColor: "#000",
      opacity: "0.8",
    },
  },
};
