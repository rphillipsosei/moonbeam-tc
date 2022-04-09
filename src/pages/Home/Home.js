import React from "react";
import window from "../../images/window.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import MoonbeamLogo from "../../images/moonbeam-logo.png";
import hex from "../../images/hex.jpg"


const Home = () => {
  
const imageStyle = {
justifyContent: "center",
maxHeight:"135%",
maxWidth: "135%"
  };



  const paperStyle1 = {
    margin: "90px",
    marginTop:"170px",
    backgroundColor: "#ffffff",
    opacity: "60%",
    borderRadius: "25px",
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
    <div className="column"  >
   
      <div className="row">  
      <h1>Moonbeam Trading Company</h1> 
      </div>
      <div className="row" >
        <img src={hex} style={imageStyle}></img>
        </div>
    </div>
  );
};
export default Home;
