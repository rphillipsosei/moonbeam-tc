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
 
    <FadeIn><main>
    <div className="shop_container">
      <div>
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
        <div className="shop_pic_card">
          <img id="img-shopping" src={shopping}></img>
        </div>
        {/* 2 DIVS FLEX OR COLUMN*/}
        <div className="wrapper-shop-text">
          <div className="wrapper_shop_text_inner">
            <h3>Visit our online store and auction</h3>
            <div className="mini_card">
              {/* IMAGE - TEXT */}
              <img src={shopifylogo}></img>
              <div className="mini_card_inner_text">
                {/* TEXT
              SUBTEXT
              BUTTON */}
                <h3>Shopify</h3>
                <h6>
                  <i>Discover a wide variety of products</i>
                </h6>
                <button className="shopify-btn">SHOP NOW</button>
              </div>
            </div>
            <div className="mini_card">
              {/* IMAGE - TEXT */}
              <img src={auctionlogo}></img>
              <div className="mini_card_inner_text">
              <h3>Online auction (COMING SOON)</h3>
              <h6>
                <i>Equipment, Surplus Inventory, and Estate Auctions.</i>
              </h6>
              <button disabled className="auction-btn">SHOP NOW</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
    </main></FadeIn>
  );
};
export default Shop;
{
}
