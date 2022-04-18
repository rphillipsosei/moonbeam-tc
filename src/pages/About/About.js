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
import growth from "../../images/growth.jpg";
import aboutbg from "../../images/about--bg.jpeg";
import whitenoise from "../../images/whitenoise.jpg";
import "./About.css";
import FadeIn from "react-fade-in/lib/FadeIn";

const About = () => {
  return (
    <div>
      <FadeIn>
        <main>
        <h1 align="center" className="title">
          WHO WE ARE
        </h1>
        <h6 align="center">
          <i>Our story. Our values. Our successes.</i>
        </h6>
        <br></br>
        <br></br>

        <section className="wrapper-grid">
          <div className="pic-card">
            <img className="about-img" id="img-growth" src={growth}></img>
          </div>
          <div className="text-card">
            <div className="about-description" id="growth-desc">
            
                <h6>
                  <br></br>
                  <br></br>
                  <h3 >OUR BACKGROUND</h3> <br></br>
                  2018 to Q1 2020 brought early success and a foundation for
                  growth; 
                  <br></br>
                  <br></br>
                  Moonbeam Trading Company was founded in 2018 by former tech
                  sector executive Mark McDonald 
                  <br></br>
                  <br></br>
                  We have a strong belief in combining the power of agriculture,
                  technology, trade and human development to create sustainable
                  economics, shared wealth, equity and environmental
                  stewardship.
                  <br></br>
                  <br></br>We aim to inspire the world by showing this is
                  possible.
                  <br></br>
                  <br></br>
                  <br></br>
                  <h3>EARLY SUCCESS</h3> 
                  <br></br>
                  2018 to Q1 2020 brought early success and a foundation for
                  growth; 
                  <br></br>
                  <br></br>
                  <i>
                    - Google / Sidewalk Labs project<br></br>- Letter of intent
                    to acquire $10M company <br></br>- New import suppliers -
                    South America<br></br>- Staffing expansion plan<br></br>-
                    New location warehouse expansion <br></br>- eCommerce
                    partnership<br></br>- technology partnership<br></br>
                  </i>
                  <br></br>
                </h6>
              
            </div>
          </div>
          <div class="pic-card">
            <img
              id="img-helping-hands"
              className="about-img"
              src={helpinghands}
            ></img>
          </div>
          <div className="text-card">
            {" "}
            <div className="about-description" id="mission-desc">
              <p>
                <h1>
                  <b>OUR VALUES</b>
                </h1>
                <br></br>

                <h6 >
                  We strive to provide world-class business and technology
                  services in Canada, with the help of our valued employees and
                  advancing technology.
                  <br></br>
                  <br></br>
                  Our goal is to achieve this by using sustainable products to
                  initiate social change through community partnerships,
                  collaboration, fair trading, ethical farming, and support of
                  living wages. Most importantly, we will continue to care for
                  and support the communities and the environment that we are a
                  part of.
                  <br></br>
                  <br></br>
                  We want to have a positive social impact wherever we do
                  business.
                </h6>
              </p>
            </div>
          </div>
          <div className="pic-card">
            <img id="img-collage" className="about-img" src={collage}></img>
          </div>
          <div className="text-card">
            <p>
              <h3>
                <b align="center">
                  <i>LAND ACKNOWLEDGEMENTS</i>
                </b>
              </h3>
              <br></br>
              <i>
                <div className="about-description" id="acknowledgement-desc">
                  <h6 align="center" >
                    We would like to acknowledge the fact that the land on which
                    we gather, and operate our business, is part of the Treaty
                    Lands and Territory of the Mississaugas of the Credit. For
                    thousands of years, Indigenous peoples inhabited and cared
                    for this land. In particular we acknowledge the territory of
                    the Anishinabek, Huron-Wendat, Haudenosaunee and
                    Ojibway/Chippewa peoples; the land that is home to the
                    Metis; and most recently, the territory of the Mississaugas
                    of the Credit First Nation who are direct descendants of the
                    Mississaugas of the Credit. We are grateful to have the
                    opportunity to work on this land, and by doing so, give our
                    respect to its first inhabitants
                    <br></br>
                    <br></br>
                    We would like to acknowledge the African Diaspora, its
                    elders, their descendants and the lands upon which they
                    live. For thousands of years African Indigenous peoples
                    inhabited and cared for the land with a spiritual and
                    cultural connection to the earth. In particular we
                    acknowledge the continuing efforts to reconnect and reclaim
                    African Indigenous ways of being and doing. We are grateful
                    for the opportunity and responsibility to embrace our
                    heritage, and by doing so, give our respect to the
                    ancestors.
                  </h6>
                </div>
              </i>
            </p>
          </div>
        </section>
        </main>
      </FadeIn>
    </div>
  );
};
export default About;
