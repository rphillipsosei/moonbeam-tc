import React from "react";
import shopping from "../../images/shopping-cart.jpg";
import shopify from "../../images/shopify.png";
import { Button } from "@mui/material";
import auction from "../../images/auction.png";
import { Paper } from "@mui/material";
import whitenoise from "../../images/whitenoise.jpg";
import shopifylogo from "../../images/shopify-logo.png";
import auctionlogo from "../../images/auction-logo.png";
import { Link } from "react-router-dom";
import "./Shop.css";
import FadeIn from "react-fade-in/lib/FadeIn";

const Shop = () => {
  return (
    
    <div><FadeIn>
      <div className="shop-title-section">
        <h1 align="center" className="title">
          SHOP
        </h1>
        <h6 align="center">
          <i>
            Browse a collection of fair trade, sustainable items from our
            partners.
          </i>
        </h6>
        <br></br>
        <br></br>
      </div>
      <section className="wrapper-grid-shop">
        <div className="pic-card">
          <img id="img-shopping" src={shopping}></img>
        </div>

        <div className="text-card2">
          <div className="text-card2-heading">
            <h3>Visit our online store and auction</h3>
          </div>
          <br></br>
          <div className="mini-card">
            <img className="mini-card-image" src={shopifylogo} />

            <div className="mini-card-text">
              <p className="mini-card-text-heading">
                Shopify
                <h6 className="mini-card-text-desc">
                  <i>Discover a wide variety of products</i>
                </h6>
              </p>
              <div className="minicard-text-button">
              <a href="https://moonbeam-trading-company.myshopify.com/">
                <button className="shopify-btn">SHOP NOW</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="mini-card">
            <img className="mini-card-image" src={auctionlogo} />

            <div className="mini-card-text">
              <p className="mini-card-text-heading" id="auction-section">
                Online Auction (COMING SOON)
                <h6 className="mini-card-text-desc">
                  <i>Equipment, Surplus Inventory, and Estate Auctions.</i>
                </h6>
              </p>
              <div className="minicard-text-button">
                <button className="auction-btn" disabled>
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>
    </div>
  );
};
export default Shop;
{
}
