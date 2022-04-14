import React from "react";
import brickwall from "../../images/brickwall.jpg"
import walksoflife from "../../images/walksoflife.jpg";
import diversity from "../../images/diversity.jpg"
import aboutbg from "../../images/about--bg.jpeg"

const imageProperties = {
  marginTop: "40px",
  marginLeft: "540px",
  height: "40%",
  width: "40%",
  alignItems: "center",
  justifyContent: "center",
};

const accessStatement = {
  marginLeft: "30px",
  marginTop: "60px"
}

const backgroundStyle = {
  backgroundImage: `url(${aboutbg})`,
  backgroundSize: "cover",
  minHeight: "205vh",
  minWidth: "100vw",
  backgroundPosition: "right",
};


const divStyle = {
  width: "100vw",
  height: "100vh",
}


const Careers = () => {
  return (
    <div class="column" style={backgroundStyle}>
      <h1 align="center"><i>Careers @ Moonbeam</i></h1>
      <div class="row" style={accessStatement}>
        <h5>
          AT MOONBEAM TRADING COMPANY, WE HIRE FROM A HOLISTIC PERSPECTIVE...
          <br></br>
          <p>
            <br></br>
            We recognize all the different life transitions that you may have
            had to encounter. <br></br>
            We value everyone's opinion, and believe the key to success is
            having a multitude<br></br> of perspectives.
            <br></br>
            <br></br>
           
            If you have faced any career obstacles relating to accessibility or life
            challenges<br></br> or such as addition,  incarceration,or physical/mental
            health , you are encouraged <br></br>to apply, and we would love to hear your story!
          </p>
        </h5>
      </div>
      <div class="row" align="center">
        <img src={brickwall} style={imageProperties}></img>
      </div>
      
    </div>
  );
};
export default Careers;
