import React from "react";
import bigdata from "../../images/bigdata.jpg";
import "./Home.css";
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
