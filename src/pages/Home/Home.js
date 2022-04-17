import React from "react";
import bigdata from "../../images/bigdata.jpg";
import "./Home.css";
import { Button } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <div className="white-section">
        <container className="content-section">
          <img src={bigdata}></img>
          <div className="title-portion">
            <p>
              <h1>
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




      {/* <div>
        <section className="wrapper-grid">
          <div class="pic-card">
            <img id="img-bigdata" src={bigdata}></img>
          </div>

          <div className="text-card">
            <div className="white-section">
              <container className="content-section">
                <img src={bigdata}></img>
                <div className="title-portion">
                  <p>
                    <h1>
                      Welcome to <br></br>Moonbeam Trading<br></br> Company
                    </h1>
                    <br></br>
                    <h4>
                      <i>
                        Services that create business, customer, and community
                        value.
                      </i>
                    </h4>
                  </p>
                </div>
              </container>
            </div>
          </div>
        </section>
      </div> */}

      <div className="black-section">
        <div className="column" id="text-portion">
          <div className="row">
            <h2>Keep up to date with all things Moonbeam:</h2>
            <br></br>
          </div>

          <div className="row">
            <form>
              <input className="input" placeholder="Your email address"></input>
              <button>SUBSCRIBE</button>
            </form>
          </div>
        </div>
        {/* <h6>All Rights Reserved, Moonbeam Trading Company 2022</h6> */}
      </div>
    </div>
  );
};
export default Home;
