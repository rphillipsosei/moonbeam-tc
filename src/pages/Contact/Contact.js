import React from 'react'
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import typing from "../../images/typing.jpg"
import protractor2 from "../../images/protractor2.jpg"
import whitenoise from "../../images/whitenoise.jpg"

const Contact = () => {

  const backgroundStyle = {
    backgroundImage: `url(${whitenoise})`,
    backgroundSize: "cover",
    minHeight: "87vh",
    minWidth: "100vw",
    backgroundPosition: "right",
  };

const topFont = {
  fontSize: "70px",
  color: "#000000",
  paddingTop: "20px"
}

const paperStyle = {
  marginBottom: "15px",
  height: "43vh",
  width: "43vw",
  backgroundColor: "rgba(60,60,60,0)",
  borderRadius: "50px 20px",
  marginTop: "15px",
  marginLeft:"150px",
  marginRight: "40px"
  
};

const paperStyle2 = {
  marginBottom: "15px",
  height: "43vh",
  width: "43vw",
  backgroundColor: "rgba(255,255,255,0.1)",
  borderRadius: "50px 20px",
  marginTop: "105px",
  marginLeft: "555px"
  
};

const titleStyle = {
  fontFamily: "manrope",
  color: "#000000",
  marginTop: "25px",
};

const fieldStyle = {
  marginTop: "110px",
  marginLeft: "80px",
  backgroundColor: "white",
  width: "640px"
};

const fieldStyle2 = {
  marginTop: "10px",
  marginLeft: "80px",
  backgroundColor: "white",
  width: "640px"
};

const buttonStyle = {
marginTop: "65px",
marginLeft: "335px"

}

const buttonStyle2 = {
  marginTop: "15px",
  marginLeft: "370px"
  }

const imageStyle = {
  width: "88vw",
  height: "20vh",
  marginLeft: "133px"
}

const footerStyle = {
  paddingTop: "20px"
}

const textStyle = {
  marginTop: "65px"
}

  return (
    <form
  action="https://formspree.io/f/xknyqvwy"
  method="POST"
>
    <div className="column" style={backgroundStyle}>
      <h1 style={topFont} align="center">CONTACT US</h1>
      <h6 align="center"><i>Receive a response within 48 business hours.</i></h6>
      <div className="row">

          <Paper elevation={10} style={paperStyle2}>
          <p>
          
      
          <h5 style={textStyle} align="center"><i>
          Any suggestions or inquiries? Do not hesitate to get in touch!
        </i></h5>
        </p>
        <div>
        <TextField
              name="name"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              style={fieldStyle2}
            />
      </div>
      <div>
        <TextField
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
              style={fieldStyle2}
            />
      
      </div>
      <div>
        <TextField
              name="message"
              id="outlined-basic"
              label="Message"
              variant="outlined"
              required
              multiline
              rows={2}
              style={fieldStyle2}
            />
      
      </div>
      <Button type="submit" variant="outlined" align="center" style={buttonStyle2}>SEND</Button>
          </Paper>
        <div className="row"> 
    
        </div>
        
      </div>
      {/* <img src={typing} style={imageStyle} align="center"/> */}

      <footer align="center" style={footerStyle}>

  <h6>
  All Rights Reserved, Moonbeam Trading Company 2022
  </h6>
  </footer>
    </div>
    </form>
        );
}
export default Contact;