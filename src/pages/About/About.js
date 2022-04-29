import React from "react";
import collage from "../../images/collage3.jpg";
import helpinghands from "../../images/helping-hands.jpg";
import growth from "../../images/growth.jpg";
import "./About.css";
import FadeIn from "react-fade-in/lib/FadeIn";

const About = () => {
  return (
    <main className="about-main">
      <div>
        <FadeIn>
          <div className="row about-title-section">
            <h1 align="center" className="about-title" id="about-title">
              WHO WE ARE
            </h1>
            <h6 align="center" className="about-caption">
              <i>Our story. Our values. Our successes.</i>
            </h6>
          </div>
          <br></br>
          <br></br>
          <section>
            <div className="pic-card">
              <img className="about-img" id="img-growth" src={growth}></img>
            </div>
            <div className="text-card">
              <p>
                <h3>OUR BACKGROUND</h3> <br></br>
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
                economics, shared wealth, equity and environmental stewardship.
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
                  - Google / Sidewalk Labs project<br></br>- Letter of intent to
                  acquire $10M company <br></br>- New import suppliers - South
                  America<br></br>- Staffing expansion plan<br></br>- New
                  location warehouse expansion <br></br>- eCommerce partnership
                  <br></br>- technology partnership<br></br>
                </i>
              </p>
              <br></br>
            </div>
            <br></br>
            <div class="pic-card">
              <img
                id="img-helping-hands"
                className="about-img"
                src={helpinghands}
              ></img>
            </div>

            <div className="text-card">
              <h1 className="about-headers">
                <b>OUR VALUES</b>
              </h1>
              <br></br>
              <p>
                We strive to provide world-class business and technology
                services in Canada, with the help of our valued employees and
                advancing technology.
                <br></br>
                <br></br>
                Our goal is to achieve this by using sustainable products to
                initiate social change through community partnerships,
                collaboration, fair trading, ethical farming, and support of
                living wages. Most importantly, we will continue to care for and
                support the communities and the environment that we are a part
                of.
                <br></br>
                <br></br>
                We want to have a positive social impact wherever we do
                business.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <div className="pic-card">
                <img id="img-collage" className="about-img" src={collage}></img>
              </div>
              <br></br>
            </div>
            <div className="text-card" id="acknowledgement-desc">
              <h3 className="about-headers">
                <b align="center">
                  <i>LAND ACKNOWLEDGEMENTS</i>
                </b>
              </h3>
              <br></br>
              <p>
                <i>
                  We would like to acknowledge the fact that the land on which
                  we gather, and operate our business, is part of the Treaty
                  Lands and Territory of the Mississaugas of the Credit. For
                  thousands of years, Indigenous peoples inhabited and cared for
                  this land. In particular we acknowledge the territory of the
                  Anishinabek, Huron-Wendat, Haudenosaunee and Ojibway/Chippewa
                  peoples; the land that is home to the Metis; and most
                  recently, the territory of the Mississaugas of the Credit
                  First Nation who are direct descendants of the Mississaugas of
                  the Credit. We are grateful to have the opportunity to work on
                  this land, and by doing so, give our respect to its first
                  inhabitants
                  <br></br>
                  <br></br>
                  We would like to acknowledge the African Diaspora, its elders,
                  their descendants and the lands upon which they live. For
                  thousands of years African Indigenous peoples inhabited and
                  cared for the land with a spiritual and cultural connection to
                  the earth. In particular we acknowledge the continuing efforts
                  to reconnect and reclaim African Indigenous ways of being and
                  doing. We are grateful for the opportunity and responsibility
                  to embrace our heritage, and by doing so, give our respect to
                  the ancestors.
                </i>
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
};
export default About;
