import "./Footer.css";
import Button from "@material-ui/core/Button";

const buttonStyle = {
color: "#ffff",
borderRadius: "10px",
display: "flex",
textAlign: "center",
marginLeft: "0.5em",


}

export default function Navbar() {

  return (
    <div className="footer-section">
      
        <h2 className="up-to-date">
          Keep up to date with all things Moonbeam: 
        </h2>
        <div className="row">
        <input
          className="subscribe-input"
          placeholder="Your email address"
        ></input>
        <Button variant="outlined" style={buttonStyle}>SUBSCRIBE</Button></div>
        <br></br>

       
      
      
        <h6 align="center" className="rights-reserved">
          All Rights Reserved, Moonbeam Trading Company 2022
        </h6>
      
    </div>
  );
}
