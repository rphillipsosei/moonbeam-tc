import "./Services.css";
import tractor from "../../images/tractor.jpg";
import warehouse from "../../images/warehouse.jpg";
import shipping from "../../images/shipping.jpg";
import programming from "../../images/web-developer.jpg";
import { useState } from "react";
import EcommerceCard from "./EcommerceCard.js";
import Modal from "../../Components/Modal.js";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Services() {
  const [showShipping, setShowShipping] = useState(false);
  const [showEcommerce, setShowEcommerce] = useState(false);
  const [showAgrifood, setShowAgrifood] = useState(false);
  const [showTech, setShowTech] = useState(false);

  return (
    <div><FadeIn>
    <div className="services-page">
      <div className="services-title">
        <h1 align="center" className="title">
          WHAT WE DO
        </h1>
        <h6 align="center">
          <i>
            We are a team of experts in numerous trades of business, ready to
            reach new frontiers.
          </i>
        </h6>
      </div>
      <div className="popup-container" align="center">
        {showShipping && (
          <div>
            <p className="popup-message" align="center">
              <h4>
                We are increasing our presence in the thriving import and export
                business. Through distributorships and creating new
                import/export relationships, knowledge exchange or the
                introduction of new freight technologies, we are expanding our
                services to focus on creating mutually beneficial commercial
                success. Our purchasing team continuously sources products from
                around the world to meet the demands of our Canadian customers.
              </h4>
            </p>
          </div>
        )}
        {showEcommerce && (
          <div>
            <p className="popup-message" align="center">
              <h4>
                
                We have a goal of offering our customers positive online shopping experiences. Our sales and digital marketing team, working with our partners in ecommerce and drop shipping, allows us to enhance your shopping experience while growing our international ecommerce expansion. We provide increased value and savings to all of our customers.
              </h4>
            </p>
          </div>
        )}
        {showAgrifood && (
          <div>
            <p className="popup-message" align="center">
              <h4>
                We work hard to grow chemical-free and hyper-local food all year
                round. Rapid climate change and localized food insecurity are
                just a few of the challenges we face today, which can be
                addressed in part through the use of advanced agricultural
                technology. Our team of technology and agri-business specialists
                grow our branded product, as well as assist urban and rural
                farmers to realize greater annual yields and improved profits.
              </h4>
            </p>
          </div>
        )}
        {showTech && (
          <div>
            <p className="popup-message" align="center">
              <h4>
                We have a passion for using technology to address current social
                problems while working collaboratively to alleviate societal
                issues. These challenges are complex and require dedication by
                multiple parties. We provide technology services and
                consultation to businesses in a variety of sectors, such as:
                software engineering, Software As A Service (SaaS), predictive
                analytics, machine learning/artificial intelligence.
              </h4>
            </p>
          </div>
        )}
      </div>
      <div class="section">
        <a
          className="hover-button"
          id="ecommerce-button"
          onClick={() => {
            setShowEcommerce(!showEcommerce);

            setShowShipping(false);
            setShowAgrifood(false);
            setShowTech(false);
          }}
        >
          <div class="col grid">
            <img src={warehouse} id="img-services"></img>
            <div class="image-overlay">
              <div class="image__title">eCommerce</div>
            </div>
          </div>
        </a>

        <a
          className="hover-button"
          id="tech-button"
          onClick={() => {
            setShowTech(!showTech);

            setShowEcommerce(false);
            setShowAgrifood(false);
            setShowShipping(false);
          }}
        >
          <div class="col grid">
            <img src={programming} id="img-services"></img>
            <div class="image-overlay">
              <div class="image__title">Technology</div>
            </div>
          </div>
        </a>

        <a
          className="hover-button"
          id="agrifoods-button"
          onClick={() => {
            setShowAgrifood(!showAgrifood);

            setShowEcommerce(false);
            setShowShipping(false);
            setShowTech(false);
          }}
        >
          <div class="col grid">
            <img src={tractor} id="img-services"></img>
            <div class="image-overlay">
              <div class="image__title">Agri-foods</div>
            </div>
          </div>
        </a>
        <a
          className="hover-button"
          id="shipping-button"
          onClick={() => {
            setShowShipping(!showShipping);

            setShowEcommerce(false);
            setShowAgrifood(false);
            setShowTech(false);
          }}
        >
          <div class="col grid">
            <img src={shipping} id="img-services"></img>
            <div class="image-overlay">
              <div class="image__title">Imports/Exports</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    </FadeIn></div>
  );
}
