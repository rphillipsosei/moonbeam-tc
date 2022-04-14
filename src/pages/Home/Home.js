import React from "react";
import window from "../../images/window.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import MoonbeamLogo from "../../images/moonbeam-logo.png";
import hex from "../../images/hex.jpg";
import globe from "../../images/globe.jpg";
import bigdata from "../../images/bigdata2.jpg";
import { Stack } from "@mui/material";
import { TextField } from '@mui/material';

const Home = () => {
  const paperStyle = {
    padding: "20px",
    height: "30vh",
    width: "50vw",
    backgroundColor: "rgba(60,60,60,0.5)",
    borderRadius: "50px 20px",
    marginTop: "190px",
    marginLeft: "500px",
  };
  const paperStyle2 = {
    marginBottom: "15px",
    height: "26vh",
    width: "30vw",
    backgroundColor: "rgba(60,60,60,0.7)",
    
    marginTop: "25px",
    marginLeft:"705px",
    marginRight: "40px"
    
  };

  const fieldStyle = {
    marginTop: "15px",
    marginLeft: "60px",
    backgroundColor: "white",
    width: "440px"
  };

  const buttonStyle = {
    justifyContent: "center",
    color: "#ffff",

    backgroundColor: "rgba(60,60,60,0.5)",
    border: "#000000",
  };

  const buttonStyle2 = {
    marginTop: "15px",
    marginLeft: "235px",
    color: "#ffff",
    }

  const backgroundStyle = {
    backgroundImage: `url(${bigdata})`,
    backgroundSize: "cover",
    minHeight: "170vh",
    minWidth: "100vw",
    backgroundPosition: "right",
  };

  const titleStyle = {
    fontFamily: "manrope",
    color: "#ffff",
    marginTop: "60px",
  };
  const titleStyle2 = {
    fontFamily: "manrope",
    color: "#ffff",
    paddingTop: "20px",
  };

  const sloganStyle = {
    fontFamily: "manrope",
    color: "#ffff",
    opacity: "100%",
  };

  const footerStyle = {
    paddingTop: "20px",
    fontColor: "#ffff"
  }


  const divStyle = {
    marginTop: "725px"
  }
  //cdn.corporatefinanceinstitute.com/assets/Types-of-Businesses-Opener_v2.jpeg"

  https: return (
    
    <div className="column">
      <div className="row" style={backgroundStyle}>
        <Paper elevation={10} style={paperStyle}>
          <Stack direction="column" alignItems="center" spacing={2}>
            <h1 style={titleStyle} align="center">
              <b>Welcome to Moonbeam Trading Company</b>
            </h1>
            <h3 style={sloganStyle} align="center">
              <i>Services that create business, customer, and community value</i>
            </h3>
            <Button variant="contained" style={buttonStyle}>
              <b>LEARN MORE</b>
            </Button>
          </Stack>
        </Paper>
          <div className="row">
            <div style={divStyle}>
      <Paper elevation={10} style={paperStyle2}>
      <form
        action="https://formspree.io/f/xvolwbpy"
        method="POST"
        >
      <p style={titleStyle2}>
        <h2  align="center">
          <b>STAY IN THE KNOW</b>
        </h2>
        <h5 align="center"><i>
          Keep up to date with all things Moonbeam
          </i>
          </h5>
        </p>
        <div>
        <TextField
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              style={fieldStyle}
            />
      
      </div>
      <Button variant="outlined" align="center" style={buttonStyle2}>SUBSCRIBE</Button>
      </form>
          </Paper>
        </div>
        </div>
      </div>


      <footer align="center" style={footerStyle}>
<h6>
All Rights Reserved, Moonbeam Trading Company 2022
</h6>
</footer>

    </div>
    
  );
};
export default Home;
