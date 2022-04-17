import React from "react";
import bigdata from "../../images/bigdata.jpg";
import "./Home.css";
import { Button } from "@material-ui/core";
import FadeIn from 'react-fade-in'

const Home = () => {
  return (
    <div>
      <FadeIn>
      <div className="white-section">
        <container className="content-section">
          <img className="home-img" src={bigdata}></img>
          <div className="title-portion">
            <p>
              <h1 className="title-style">
                Welcome to <br></br>Moonbeam Trading<br></br> Company
              </h1>
              <br></br>
              <h4>
                <i>
                  Services that create business, customer, and community value.
                </i>
              </h4>
              <br></br>
              <div className="btn-section">
                <a href="/services">
              <button className="learn-btn">LEARN MORE</button>
              </a>
              </div>
            </p>
          </div>
        </container>
      </div>



      </FadeIn>
    </div>
  );
};
export default Home;
