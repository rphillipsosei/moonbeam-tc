import { Paper } from "@material-ui/core";


const sectionStyle = {
    
    height: "18vh",
    width: "40vw",
       
  };

  const textStyle = {
      fontFamily: "Comfortaa",
      color: "#000000"
  }

  


export default function EcommmerceCard() {
  return (
    <div style={sectionStyle}>
      
        <h5 style={textStyle} text="align">
          Our goal is to offer our customers a positive online shopping
          experience. Our marketing team works with artisans, designers and
          technologists to create an experience that enables global shopping,
          borderless transactions, and blockchain purchasing.
        </h5>
     
    </div>
  );
}


