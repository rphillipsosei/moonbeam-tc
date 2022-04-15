import React from "react";
import brickwall from "../../images/brickwall.jpg"
import walksoflife from "../../images/walksoflife.jpg";
import diversity from "../../images/diversity.jpg"
import aboutbg from "../../images/about--bg.jpeg"
import whitenoise from "../../images/whitenoise.jpg"
import { useForm, ValidationError } from '@formspree/react';
import { Paper } from "@mui/material";
import { Button } from "theme-ui";
import { Link } from "react-router-dom";

const imageProperties = {

   height: "90%",
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "40px",
  borderRadius: "80px"
};

const accessStatement = {
 
  marginTop: "10px"
}

const backgroundStyle = {
  backgroundImage: `url(${whitenoise})`,
  backgroundSize: "cover",
  minHeight: "100vh",
  minWidth: "100vw",
  backgroundPosition: "right",
};

const buttonStyle = {
  marginLeft: "390px",
  backgroundColor: "#89AEB3",
  marginBottom: "10px"
}
const divStyle = {
  width: "100vw",
  height: "100vh",
}

const topFont = {
  marginTop: "7px",
  fontSize: "70px",
  color: "#000000"
}

const footerStyle = {
  paddingTop: "20px",
  fontColor: "#ffff"
}

const paperStyle = {
  padding: "20px",
  height: "70vh",
  width: "45vw",
  backgroundColor: "rgba(245,245,245,0.6)",
  borderRadius: "80px",
  marginTop: "20px",
  marginLeft: "500px"
 
};

const Careers = () => {

  const [state, handleSubmit] = useForm("xknyqzly");
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
  if (state.succeeded) {
      return <p>Submitted sucessfully!</p>;
      
  }
  return (
    <div style={divStyle}>
    <div class="column" style={backgroundStyle}>
      
      <h1 align="center" style={topFont}>CAREERS</h1>
      <h6 align="center"><i>Join our diverse, multi-faceted team.</i></h6>
      <Paper style={paperStyle}>
      <div class="row" style={accessStatement}>
        <p align="center"><h3>
          AT MOONBEAM TRADING COMPANY, WE HIRE FROM A HOLISTIC PERSPECTIVE...
          </h3>
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
          </h6></p>
          <Link to="/careers/apply">
        <Button variant="outlined" align="center" style={buttonStyle}>GO</Button>
        </Link>
      </div>
      <div class="row" align="center">
        <img align="center" src={brickwall} style={imageProperties}></img>
      </div>
      </Paper>
      <footer align="center" style={footerStyle}>
<h6>
All Rights Reserved, Moonbeam Trading Company 2022
</h6>
</footer>
    </div>
    </div>
  );
};
export default Careers;
