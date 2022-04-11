import React from "react";
import window from "../../images/window.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import MoonbeamLogo from "../../images/moonbeam-logo.png";
import hex from "../../images/hex.jpg"
import globe from "../../images/globe.jpg"




const Home = () => {
  
  const backgroundStyle = {
    backgroundImage: `url(${globe})`,
    backgroundSize: "cover",
    minHeight: "86vh",
    minWidth: "100vw",
    backgroundPosition: "right"
  }

  const paperStyle1 = {
    margin: "90px",
    marginTop:"170px",
    backgroundColor: "#ffffff",
    opacity: "0%",
    borderRadius: "25px",
    height: "100vh",
    width: "100vw"
  };


  const titleStyle = {
  
    fontFamily: "manrope",
    align: "center",
    marginTop: "70px",
  };

  const buttonStyle = {
    justifyContent: "center",
    marginLeft: "300px",
    marginTop: "30px",
    marginBottom: "30px"
  }



  return (
    <div 
    className="container"
     style={backgroundStyle}
    >

    <h1 className="text-center" style={{paddingTop: "30%"}}>
      Home
    </h1>

  </div>
  );
};
export default Home;
