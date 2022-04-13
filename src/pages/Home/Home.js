import React from "react";
import window from "../../images/window.jpg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import MoonbeamLogo from "../../images/moonbeam-logo.png";
import hex from "../../images/hex.jpg";
import globe from "../../images/globe.jpg";
import bigdata from "../../images/bigdata.jpg";
import { Stack } from "@mui/material";
import { TextField } from '@mui/material';

const Home = () => {
  const paperStyle = {
    padding: "20px",
    height: "30vh",
    width: "50vw",
    backgroundColor: "rgba(60,60,60,0.5)",
    borderRadius: "50px 20px",
    marginTop: "275px",
    marginLeft: "500px",
  };
  const paperStyle2 = {
    marginBottom: "15px",
    height: "36vh",
    width: "43vw",
    backgroundColor: "rgba(60,60,60,0)",
    borderRadius: "50px 20px",
    marginTop: "25px",
    marginLeft:"525px",
    marginRight: "40px"
    
  };

  const fieldStyle = {
    marginTop: "30px",
    marginLeft: "80px",
    backgroundColor: "white",
    width: "640px"
  };

  const buttonStyle = {
    justifyContent: "center",
    color: "#ffff",

    backgroundColor: "rgba(60,60,60,0.5)",
    border: "#000000",
  };

  const buttonStyle2 = {
    marginTop: "25px",
    marginLeft: "335px"
    
    }

  const backgroundStyle = {
    backgroundImage: `url(${bigdata})`,
    backgroundSize: "cover",
    minHeight: "86vh",
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
    color: "#000000",
    paddingTop: "70px",
  };

  const sloganStyle = {
    fontFamily: "manrope",
    color: "#ffff",
    opacity: "100%",
  };

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
      </div>


      <div className="row">
      <Paper elevation={10} style={paperStyle2}>
      <p>
        <h2 style={titleStyle2} align="center">
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
          </Paper>
        </div>
    </div>
  );
};
export default Home;
