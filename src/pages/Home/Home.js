import React from "react";
import bigdata from "../../images/bigdata.jpg";
import "./Home.css";
import { Button } from "@material-ui/core";
import FadeIn from "react-fade-in";

const Home = () => {
  return (
    <FadeIn>
      <main>
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
                    Services that create business, customer,<br></br> and
                    community value.
                  </i>
                </h4>
                <a href="/services" className="learn_link">
                  <button className="learn-btn">LEARN MORE</button>
                </a>
                <br></br>
              </p>
            </div>
          </container>
        </div>

      </main>
    </FadeIn>
  );
};
export default Home;
