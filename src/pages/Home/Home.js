import React from 'react'
import window from "../../images/window.jpg"

const Home = () => {
  
  const backgroundStyle = {
    backgroundImage: `url(${window})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundPosition: "right"
  };

  return (
    <div 
    className="container"
     style={backgroundStyle}
    >

    <h1 className="text-center" style={{paddingTop: "30%"}}>
      Home
    </h1>
    
  </div>
  )
}
export default Home;