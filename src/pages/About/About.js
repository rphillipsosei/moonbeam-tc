import React from "react";
// import farmers from "../../images/farmers.jpg";
import reflection from "../../images/reflection.jpg";
import bridge from "../../images/bridge.jpg";
// import indigenous from "../../indigenous.png";
// import family from "../../black-family.jpg";
import hex from "../../images/hex.jpg";
import { Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import darkstripes from "../../images/dark-stripes.png";
import aboutus from "../../images/about-us.jpg";
import collage from "../../images/collage3.jpg";
import background from "../../images/about-background.png";
import protractor from "../../images/protractor.jpg";
import mission from "../../images/mission.jpg";
import helpinghands from "../../images/helping-hands.jpg";
import growth from "../../images/growth.jpg"
import aboutbg from  "../../images/about--bg.jpeg"


const backgroundStyle = {
  backgroundImage: `url(${aboutbg})`,
  backgroundSize: "cover",
  minHeight: "205vh",
  minWidth: "100vw",
  backgroundPosition: "right",
};

const paperStyle = {
  paddingBottom: "20px",
  height: "56vh",
  width: "40vw",
  backgroundColor: "rgba(60,60,60,0)",
  borderRadius: "50px 20px",
  marginTop: "60px",
  marginLeft: "150px",
};

const buttonStyle = {
  backgroundColor: "#5081a1",

  width: "100vw",
  height: "100vh",
};

const titleStyle = {
  fontFamily: "manrope",
  color: "#000000",
  marginTop: "25px",
};

const captionStyle = {
  fontFamily: "manrope",
  color: "#000000",
  opacity: "100%",
};

const statementStyle = {
  fontFamily: "manrope",
  color: "#000000",
  opacity: "100%",
  paddingRight: "20px",
  paddingLeft: "20px",
};

const image = {
  width: "82%",
  height: "58vh",
  marginTop: "50px",
  marginLeft: "150px",
};


const divSize = {
  width: "60vw"
}

const image3 = {
  width: "37vw",
  height: "50vh",
  marginTop: "145px",
  marginLeft: "70px",
};

const image2 = {
  backgroundImage: `url(${aboutus})`,
  width: "82%",
  height: "60%",
  marginTop: "50px",
  marginLeft: "150px",
  marginBottom: "50px",
};

const paperStyle2 = {
  padding: "20px",
  height: "20%",
  width: "82%",
  backgroundColor: "rgba(240,240,240,0.5)",
  borderRadius: "50px 20px",
  marginTop: "150px",
  marginLeft: "150px",
};

const paperStyle3 = {
  padding: "20px",
  height: "95%",
  width: "45vw",
  backgroundColor: "rgba(240,240,240,0.5)",
  borderRadius: "50px 20px",
  marginTop: "20px",
  marginLeft: "150px",
};
const topFont = {
  fontSize: "70px",
  color: "#000000",
};

const About = () => {
  return (
    <div className="column" style={backgroundStyle}>
      
      
      <div className="row">
        <div className="column" >
        <Paper elevation={10} style={paperStyle3}>
          <p>
           <h5 style={statementStyle}>
              <h1 style={topFont} align="center">
                WHO ARE WE?
              </h1>
              <br></br>
              Moonbeam Trading Company was founded in 2018 by former tech sector
              executive Mark McDonald <br></br>
              <br></br>
              We have a strong belief in combining the power of agriculture,
              technology, trade and human development to create sustainable
              economics, shared wealth, equity and environmental stewardship.
              <br></br>
              <br></br>We aim to inspire the world by showing this is possible.
              <br></br>
              <br></br>
              <br></br>
              <h3 align="center">EARLY SUCCESS</h3> <br></br>
              2018 to Q1 2020 brought early success and a foundation for growth; <br></br><br></br>
              <i>
             
              - Google / Sidewalk Labs project<br></br>
              - Letter of intent to acquire $10M company <br></br>
              - New import suppliers - South America<br></br>
              - Staffing expansion plan<br></br>
              - New location warehouse expansion <br></br>
              - eCommerce partnership<br></br> 
              - technology partnership<br></br> 
              </i>
              <br></br>
            </h5>
          </p>
        </Paper>
        </div>
        <img src={growth} style={image3} />
      </div>
    
    


      <div>
        <Paper elevation={10} style={paperStyle2}>
          <p>
            <h1 style={titleStyle} align="center">
              <b>OUR VALUES</b>
            </h1>
            <br></br>
            <h5 style={captionStyle} align="center">
              We strive to provide world-class business and technology services
              in Canada, with the help of our valued employees and advancing
              technology.
              <br></br>
              <br></br>
              Our goal is to achieve this by using sustainable products to
              initiate social change through community partnerships,
              collaboration, fair trading, ethical farming, and support of
              living wages. Most importantly, we will continue to care for and
              support the communities and the environment that we are a part of.
              <br></br>
              <br></br>
              We want to have a positive social impact wherever we do business.
            </h5>
          </p>
        </Paper>
      </div>


      <div className="row">
        <img src={helpinghands} style={image} />
      </div>
   


      <div>
        <Paper elevation={10} style={paperStyle2}>
          <p>
            <h1 style={titleStyle} align="center">
              <b>LAND ACKNOWLEDGEMENTS</b>
            </h1>
            <br></br>
            <h6 style={captionStyle} align="center">
              We would like to acknowledge the fact that the land on which we
              gather, and operate our business, is part of the Treaty Lands and
              Territory of the Mississaugas of the Credit. For thousands of
              years, Indigenous peoples inhabited and cared for this land. In
              particular we acknowledge the territory of the Anishinabek,
              Huron-Wendat, Haudenosaunee and Ojibway/Chippewa peoples; the land
              that is home to the Metis; and most recently, the territory of the
              Mississaugas of the Credit First Nation who are direct descendants
              of the Mississaugas of the Credit. We are grateful to have the
              opportunity to work on this land, and by doing so, give our
              respect to its first inhabitants
              <br></br>
              <br></br>
              We would like to acknowledge the African Diaspora, its elders,
              their descendants and the lands upon which they live. For
              thousands of years African Indigenous peoples inhabited and cared
              for the land with a spiritual and cultural connection to the
              earth. In particular we acknowledge the continuing efforts to
              reconnect and reclaim African Indigenous ways of being and doing.
              We are grateful for the opportunity and responsibility to embrace
              our heritage, and by doing so, give our respect to the ancestors.
            </h6>
          </p>
        </Paper>
      </div>


      <div className="row">
        <img src={collage} style={image2} />
      </div>


      <footer align="center">
        <h6>© Moonbeam Trading Company, 2022</h6>
      </footer>


    </div>


  );
};
export default About;
