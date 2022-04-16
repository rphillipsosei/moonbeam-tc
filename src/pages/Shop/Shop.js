import React from "react";
import shopping from "../../images/shopping-cart.jpg";
import shopify from "../../images/shopify.png";
import { Button } from "@mui/material";
import auction from "../../images/auction.png";
import { Paper } from "@mui/material";
import whitenoise from "../../images/whitenoise.jpg";
import shopifylogo from "../../images/shopify-logo.png";
import auctionlogo from "../../images/auction-logo.png";
import "./Shop.css";

const Shop = () => {
  return (
    // <div column>
    //   <div className="row" id="white-section">
    //     <div className="title-section">
    //       <h1>SHOP</h1>
          
    //     </div>
       
        // <container className="shop-section">
        //   <div id="shop-section">
        //     <table className="table-styles">
        //       <tbody>
        //         <h3 align="center">Visit our online store and auction</h3>

        //         <br></br>
        //         <tr>
        //           <td className="logo-cell">
        //             <img src={shopifylogo}></img>
        //           </td>
        //           <td>
        //             <h5 className="store-type">Shopify</h5>
        //             <h6 className="description">
        //               Discover a wide variety of products
        //             </h6>
        //           </td>
        //           <button id="btn">SHOP NOW</button>
        //         </tr>
        //         <br></br>
        //         <tr>
        //           <td className="logo-cell">
        //             <img src={auctionlogo}></img>
        //           </td>
        //           <td>
        //             <h5 className="store-type">Online Auction (COMING SOON)</h5>
        //             <h6 className="description">
        //               Equipment, Surplus Inventory, and Estate Auctions.
        //             </h6>
        //           </td>
        //           <td>
        //             <button id="btn-disabled" disabled>
        //               SHOP NOW
        //             </button>
        //           </td>
        //         </tr>
        //       </tbody>
        //     </table>
        //   </div>
        // </container>
    //   </div>
    // </div>
    <div >
    <h1 align="center" className="title">WHO WE ARE</h1>
    <h6 align="center"><i>Our story. Our values. Our successes.</i></h6>
    <br></br>
    <br></br>

    <section className="wrapper-grid">
        <div className="pic-card"><img id="img-shopping" src={shopping}></img></div>
        <div className="text-card">
              <container className="shop-section">
          <div id="shop-section">
            <table className="table-styles">
              <tbody>
                <h3 align="center">Visit our online store and auction</h3>

                <br></br>
                <tr>
                  <td className="logo-cell">
                    <img src={shopifylogo}></img>
                  </td>
                  <td>
                    <h5 className="store-type">Shopify</h5>
                    <h6 className="description">
                      Discover a wide variety of products
                    </h6>
                  </td>
                  <button id="btn">SHOP NOW</button>
                </tr>
                <br></br>
                <tr>
                  <td className="logo-cell">
                    <img src={auctionlogo}></img>
                  </td>
                  <td>
                    <h5 className="store-type">Online Auction (COMING SOON)</h5>
                    <h6 className="description">
                      Equipment, Surplus Inventory, and Estate Auctions.
                    </h6>
                  </td>
                  <td>
                    <button id="btn-disabled" disabled>
                      SHOP NOW
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </container>
          </div>
          
  </section>
  </div>
  );
};
export default Shop;
