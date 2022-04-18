import React from "react";
import shopping from "../../images/shopping-cart.jpg";
import { Button } from "@material-ui/core";
import shopifylogo from "../../images/shopify-logo.png";
import auctionlogo from "../../images/auction-logo.png";
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
       
        <div className="wrapper-shop-text">
          <div className="wrapper_shop_text_inner">
            <h3>Visit our online store and auction</h3>
            <div className="mini_card">
             
              <img src={shopifylogo}></img>
              <div className="mini_card_inner_text">
               
                <h3>Shopify</h3>
                <h6>
                  <i>Discover a wide variety of products</i>
                </h6>
                <Button 
                type="submit"
                variant="outlined"
                className="shopify-btn">SHOP NOW</Button>
              </div>
            </div>
            <div className="mini_card">
              
              <img src={auctionlogo}></img>
              <div className="mini_card_inner_text">
              <h3>Online auction (COMING SOON)</h3>
              <h6>
                <i>Equipment, Surplus Inventory, and Estate Auctions.</i>
              </h6>
              <Button disabled className="auction-btn">SHOP NOW</Button>
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
