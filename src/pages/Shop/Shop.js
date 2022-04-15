import React from 'react'
import shopping from "../../images/shopping-cart.jpg"
import shopify from "../../images/shopify.png"
import { Button } from '@mui/material'
import auction from "../../images/auction.png"
import { Paper } from '@mui/material'
import whitenoise from "../../images/whitenoise.jpg"
import shopifylogo from "../../images/shopify-logo.png"
import auctionlogo from "../../images/auction-logo.png"

const image = {
  width: "45%",
  height: "45%",
  borderRadius: "80px",
  marginLeft: "100px",
  marginTop: "100px"

}

const shopifyIcon = {
height: "7%",

}

const auctionIcon = {
  paddingTop: "10px",
  height: "8%",
  
  }

const topFont = {
  marginTop: "7px",
  fontSize: "70px",
  color: "#000000"
}

const textPortion = {
  paddingLeft: "130px",
  paddingTop: "40px",


}

const divSize = {
  width: "25%"
}

const backgroundStyle = {
  backgroundImage: `url(${whitenoise})`,
  backgroundSize: "cover",
  minHeight: "86vh",
  minWidth: "100vw",
  backgroundPosition: "right",
};

const paperStyle = {
  padding: "20px",
  height: "50vh",
  width: "40vw",
  backgroundColor: "rgba(255,255,255,0.1)",
  // opacity: "80%",
  borderRadius: "80px",
  marginTop: "135px",
  marginLeft: "50px"
 
};

const footerStyle = {
  marginTop: "100px"
}
const Shop = () => {

  return (
    
    <div className="column" style={backgroundStyle}>
      <h1 style={topFont} align="center">SHOP</h1>
      <h6 align="center"><i>Browse a collection of fair trade, sustainable items from our partners.</i></h6>
    
    <div className="row">
    <img src={shopping} style={image}  />
    <Paper elevation={10} style={paperStyle}>
   
      <div className="column" style={textPortion}>
    <h3 >Visit our online store and auction</h3>
    <br></br>
    <div className="row"> 
    <div className="column" style={divSize}> 
    <img src={shopifylogo} style={shopifyIcon} />
    <br></br>
    <br></br>
    <img src={auctionlogo} style={auctionIcon} />
    </div>
    <div className="column"> 
    <h5>Shopify</h5>
    <h6><i>Discover a wide variety of products</i></h6>
    <br></br>
    <Button variant="outlined" align="center" color="success">SHOP NOW</Button>
    <br></br>
    <br></br>
    <br></br>
    <h5>Online Auction (COMING SOON)</h5>
    <h6 ><i> Equipment, Surplus Inventory, and Estate Auctions.</i></h6>
    <br></br>
    <Button disabled variant="outlined" align="center" color="success">SHOP NOW</Button>
    <br></br>
    
    </div>
   
    </div>

      </div>
      </Paper>
    </div>
   
    <footer align="center" style={footerStyle}>
  <h6>
  All Rights Reserved, Moonbeam Trading Company2022
  </h6>
  </footer>
  </div>
  )
}
export default Shop;