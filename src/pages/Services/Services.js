import "./Services.css";
import tractor from "../../images/tractor.jpg";
import warehouse from "../../images/warehouse.jpg";
import shipping from "../../images/shipping.jpg";
import programming from "../../images/web-developer.jpg";
import { useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from '../../Components/Navbar.js'
export default function Services() {
  const [showShipping, setShowShipping] = useState(false);
  const [showEcommerce, setShowEcommerce] = useState(false);
  const [showAgrifood, setShowAgrifood] = useState(false);
  const [showTech, setShowTech] = useState(false);

  const history = useHistory();

  const scrollDown = () => {
    history.push("/services#text_content");
  };

  const scrollUp = () => {
    history.push("/services#services-title-section");
  };

  return (
    <FadeIn>
      <main>
        <div className="services-page">
          
          <div className="services-title-section">
            <h1 align="center" id="title" className="services-title">
              WHAT WE DO
            </h1>
            <h6 align="center" className="services-caption">
              <i>
                We are a team of experts in numerous trades of business, ready
                to reach new frontiers.
              </i>
              <br></br>
              <br></br>
              <u>Select a line of business to learn more:</u>
            </h6>
          </div>
          <div className="wrapper-grid-services">
            <div class="card-image-container">
              <div className="row1">
                <a
                  href="#text_content"
                  className="hover-button"
                  id="ecommerce-button"
                  onClick={() => {
                    setShowEcommerce(!showEcommerce);
                    setShowShipping(false);
                    setShowAgrifood(false);
                    setShowTech(false);
                    scrollDown();
                  }}
                >
                  <div class="col grid">
                    <img
                      src={warehouse}
                      id="img-services"
                      alt="Ecommerce"
                    ></img>
                  </div>
                </a>

                <a
                  href="#text_content"
                  className="hover-button"
                  id="tech-button"
                  onClick={() => {
                    setShowTech(!showTech);
                    scrollDown();
                    setShowEcommerce(false);
                    setShowAgrifood(false);
                    setShowShipping(false);
                  }}
                >
                  <div class="col grid">
                    <img
                      src={programming}
                      id="img-services"
                      alt="Technology"
                    ></img>
                  </div>
                </a>
              </div>

              <div>
                <a
                  href="#text_content"
                  className="hover-button"
                  id="agrifoods-button"
                  onClick={() => {
                    setShowAgrifood(!showAgrifood);
                    scrollDown();
                    setShowEcommerce(false);
                    setShowShipping(false);
                    setShowTech(false);
                  }}
                >
                  <div class="col grid">
                    <img src={tractor} id="img-services" alt="Agrifoods"></img>
                  </div>
                </a>
                <a
                  href="#text_content"
                  className="hover-button"
                  id="shipping-button"
                  onClick={() => {
                    setShowShipping(!showShipping);
                    setShowEcommerce(false);
                    setShowAgrifood(false);
                    setShowTech(false);
                    scrollDown();
                  }}
                >
                  <div class="col grid">
                    <img
                      src={shipping}
                      id="img-services"
                      alt="Imports & Exports"
                    ></img>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="popup-message-container"
              align="center"
              id="text_content"
            >
              {showShipping && (
                

                      <p className="popup-message" align="center">
                   
                      <br></br>
                      <u>IMPORTS/EXPORTS</u>
                     
                      We are increasing our presence in the thriving import and
                    export business. Through distributorships and creating new
                    import/export relationships, knowledge exchange or the
                    introduction of new freight technologies, we are expanding
                    our services to focus on creating mutually beneficial
                    commercial success. Our purchasing team continuously sources
                    products from around the world to meet the demands of our
                    Canadian customers.
                    
                    <br></br>
                    <a
                      align="center"
                      id="back-to-top"
                      href="/services#title"
                      onClick={() => {
                        scrollUp();
                      }}




                    
                  >
                    <Button type="submit" sx={styles.button}>
                      BACK TO TOP
                    </Button>
                  </a>
                </p>
              )}
              {showEcommerce && (
                <div>
                  <p className="popup-message" align="center">
                   
                      <br></br>
                      <u>E-COMMERCE</u>
                     
                      We have a goal of offering our customers positive online
                      shopping experiences. Our sales and digital marketing team
                      working alongside our partners in ecommerce and drop
                      shipping, allow us to enhance your shopping experience
                      while growing our international ecommerce expansion. We
                      provide increased value and savings to all of our
                      customers.
                    
                    <br></br>
                    <a
                      align="center"
                      id="back-to-top"
                      href="/services#title"
                      onClick={() => {
                        scrollUp();
                      }}
                    >
                      <Button type="submit" sx={styles.button}>
                        BACK TO TOP
                      </Button>
                    </a>
                  </p>
                </div>
              )}
              {showAgrifood && (
                <div>
                  <p className="popup-message" align="center">
                 
                      <br></br>
                      <u>AGRI-FOODS</u>
                    
                      We work hard to grow chemical-free and hyper-local food
                      all year round. Rapid climate change and localized food
                      insecurity are just a few of the challenges we face today,
                      which can be addressed in part through the use of advanced
                      agricultural technology. Our team of technology and
                      agri-business specialists grow our branded product, as
                      well as assist urban and rural farmers to realize greater
                      annual yields and improved profits.
                 
                    <br></br>
                    <a
                      align="center"
                      id="back-to-top"
                      href="/services#title"
                      onClick={() => {
                        scrollUp();
                      }}
                    >
                      <Button type="submit" sx={styles.button}>
                        BACK TO TOP
                      </Button>
                    </a>
                  </p>
                </div>
              )}
              {showTech && (
                <div>
                  <p className="popup-message" align="center">
             
                      <br></br>
                     <u>TECHNOLOGY</u>
                     
                      We have a passion for using technology to address current
                      social problems while working collaboratively to alleviate
                      societal issues. These challenges are complex and require
                      dedication by multiple parties. We provide technology
                      services and consultation to businesses in a variety of
                      sectors, such as: software engineering, Software As A
                      Service (SaaS), predictive analytics, machine learning/
                      artificial intelligence.
                  
                    <br></br>

                    <a
                      align="center"
                      id="back-to-top"
                      href="/services#title"
                      onClick={() => {
                        scrollUp();
                      }}
                    >
                      <br></br>
                      <Button type="submit" style={styles.button}>
                        BACK TO TOP
                      </Button>
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </FadeIn>
  );
}

const styles = {
  button: {
    fontFamily: "Comfortaa",
    backgroundColor: "#000",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["14px"],
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
