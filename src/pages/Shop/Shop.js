import React from 'react'
import shopping from "../../images/shopping-cart.jpg"
import shopify from "../../images/shopify.png"
import { Button } from '@mui/material'
import auction from "../../images/auction.png"
import { Paper } from '@mui/material'

const image = {
  width: "35%",
  height: "35%",
  marginLeft: "260px",
  paddingTop: "130px"

}

const shopifyIcon = {
height: "15%"
}

const auctionIcon = {
  height: "16%"
  }

const topFont = {
  marginTop: "30px",
  fontSize: "90px",
  color: "#000000"
}

const textPortion = {
  paddingLeft: "130px",
  paddingTop: "40px"

}

const divSize = {
  width: "25%"
}

const backgroundStyle = {
  backgroundImage: `url(${shopping})`,
  backgroundSize: "cover",
  minHeight: "86vh",
  minWidth: "100vw",
  backgroundPosition: "right",
};

const paperStyle = {
  padding: "20px",
  height: "70vh",
  width: "40vw",
  backgroundColor: "#ffff",
  opacity: "70%",
  borderRadius: "50px 20px",
  marginTop: "80px",
  marginLeft: "1100px",
};

const Shop = () => {

  return (
    
    <div className="column" style={backgroundStyle}>
     
    <div className="row">
    {/* <img src={shopping} style={image}  /> */}
    <Paper elevation={10} style={paperStyle}>
    <h1 style={topFont} align="center">SHOP</h1>
      <div className="column" style={textPortion}>
    <h3 >Visit our online store and auction</h3>
    <br></br>
    <div className="row"> 
    <div className="column" style={divSize}> 
    <img src={shopify} style={shopifyIcon} />
    <br></br>
    <br></br>
    <img src={auction} style={auctionIcon} />
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
   
    <footer align="center">
  <h6>
  © Moonbeam Trading Company, 2022
  </h6>
  </footer>
  </div>
  )
}
export default Shop;