import React from "react";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import typing from "../../images/typing.jpg";
import protractor2 from "../../images/protractor2.jpg";
import whitenoise from "../../images/whitenoise.jpg";
import { useForm, ValidationError } from "@formspree/react";
import FadeIn from "react-fade-in/lib/FadeIn";

const paperStyle2 = {
  marginBottom: "15px",
  height: "43vh",
  width: "43vw",
  backgroundColor: "rgba(255,255,255,0.1)",
  borderRadius: "147px 31px 147px 50px / 116px 15px 116px 25px",
  border: "5px outset #1c6ea4",
  marginTop: "105px",
  marginLeft: "555px",
  display: "flex",
};

const fieldStyle2 = {
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  width: "640px",
};

const Contact = () => {

  const [state, handleSubmit] = useForm("xknyqvwy");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <div><FadeIn>
    <div className="col contact-page">
      <form onSubmit={handleSubmit}>
        <div id="header-section">
          <h1 align="center" className="title">
            CONTACT US
          </h1>
          <h6 align="center">
            <i>Receive a response within 48 business hours.</i>
          </h6>
        </div>
        <div className="column" id="form-items" align="center">
         <br></br>
            <div class="">
              <h5>Name:</h5>
            </div>
            <div class="">
              <input
                name="name"
                align="center"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                required
                className="input"
              ></input>
            </div>
            <br></br>
            <div class="">
              <h5>Email:</h5>
            </div>
            <div class="">
              <input
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
                className="input"
                type="email"
              ></input>
            </div>
            <br></br>
            <div class="">
              <h5>Message:</h5>
            </div>
            <div class="">
              <textarea
                align="center"
                name="message"
                id="outlined-basic"
                label="Message"
                variant="outlined"
                required
                rows={3}
              ></textarea>
            </div>
            <button className="contact-btn">SUBMIT</button>
          
          
        </div>
      </form>
      <div className="placeholder"></div>
    </div>
    </FadeIn></div>
  );
};
export default Contact;
