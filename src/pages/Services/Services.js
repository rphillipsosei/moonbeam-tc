import React, { useState } from "react";
import { Box, Container, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import BlockTitle from "./block-title";
import Image from "./image";
import { AiFillUsb, AiOutlineSwap } from "react-icons/ai";
import { FaCarrot, FaShoppingCart } from "react-icons/fa";
import programming from "../../images/web-developer.jpg";
import ecommerce from "../../images/e-commerce.jpg";
import shipping from "../../images/shipping.jpg";
import agrifood from "../../images/agrifood.jpg";
import warehouse from "../../images/warehouse.jpg";
import FeaturedCard from "./featured-card.js";
import classes from './featured.module.css'
import tractor from "../../images/tractor.jpg"
import aboutbg from "../../images/about--bg.jpeg"
import whitenoise from "../../images/whitenoise.jpg"


const Services = () => {
  const [tab, setTab] = useState({
    active: "technology"
  });

  const handleTab = (tab) => {
    if (tab === "technology") {
      setTab({
        ...tab,
        active: "technology"
      });
    }
    if (tab === "trade") {
      setTab({
        ...tab,
        active: "trade"
      });
    }
    if (tab === "ecommerce") {
      setTab({
        ...tab,
        active: "ecommerce"
      });
    }
    if (tab === "agri") {
      setTab({
        ...tab,
        active: "agri"
      });
    }
  };

const imageStyle = {
  height: "280%",
  width: "28%",
  borderRadius: "80px"
}

const backgroundStyle = {
  backgroundImage: `url(${whitenoise})`,
  backgroundSize: "cover",
  minHeight: "85vh",
  minWidth: "100vw",
  backgroundPosition: "right",
};

const footerStyle = {
  paddingTop: "20px",
  fontColor: "#ffff"
}

  return (
    <div id="more" className={classes.featured} style={backgroundStyle}>
   
        <Container sx={styles.container}>
          <BlockTitle
            title="WHAT WE DO"
            text="We are a team of experts in numerous trades of business, ready to consult in your business endeavors"
          />
          <Box sx={styles.tabButtonTopWrapper}>
            <Box sx={styles.tabButtonWrapper}>
              <Button
                onClick={() => handleTab("technology")}
                className={`${tab.active === "technology" ? "active" : ""}`}
              >
                <AiFillUsb />
                Technology
              </Button>
              <Button
                onClick={() => handleTab("trade")}
                className={`${tab.active === "trade" ? "active" : ""}`}
              >
                <AiOutlineSwap />
                Trade
              </Button>
              <Button
                onClick={() => handleTab("ecommerce")}
                className={`${tab.active === "ecommerce" ? "active" : ""}`}
              >
                <FaShoppingCart />
                E-commerce
              </Button>
              <Button
                onClick={() => handleTab("agri")}
                className={`${tab.active === "agri" ? "active" : ""}`}
              >
                <FaCarrot />
                Agri-Food
              </Button>
            </Box>
          </Box>
          <Box sx={styles.tabContent}>
            <div className={classes.contentWrapper}>
              {tab.active === "technology" && (
                <Image style={imageStyle} src={programming} alt="tab image" className="tabImage" />
              )}
              {tab.active === "technology" && (
                <FeaturedCard content={"We have a passion for using technology to address current social problems while working collaboratively to alleviate societal issues. These challenges are complex and require dedication by multiple parties. We provide technology services and consultation to businesses in a variety of sectors, such as: software engineering, Software As A Service (SaaS), predictive analytics, machine learning/artificial intelligence."}
                />
              )}
              {tab.active === "agri" && (
                <Image style={imageStyle} src={tractor} alt="agri image" className="tabImage" />
              )}
              {tab.active === "agri" && (<FeaturedCard content="We work hard to grow chemical-free and hyper-local food all year round. Rapid climate change and localized food insecurity are just a few of the challenges we face today, which can be addressed in part through the use of advanced agricultural technology. Our team of technology and agri-business specialists grow our branded product, as well as assist urban and rural farmers to realize greater annual yields and improved profits." />)}
              {tab.active === "trade" && (
                <Image style={imageStyle} src={shipping} alt="tab image" className="tabImage" />
              )}
              {tab.active === "trade" && (<FeaturedCard content="We are increasing our presence in the thriving import and export business. Through distributorships and creating new import/export relationships, knowledge exchange or the introduction of new freight technologies, we are expanding our services to focus on creating mutually beneficial commercial success. Our purchasing team continuously sources products from around the world to meet the demands of our Canadian customers."

/>)}
              {tab.active === "ecommerce" && (
                <Image
                style={imageStyle}
                  src={warehouse}
                  alt="ecomm image"
                  className="tabImage"
                />
              )}
              {tab.active === "ecommerce" && (
                <FeaturedCard content="Our marketing team works with artisans,
                designers and technologists to create an experience that enables 
                global shopping, borderless transactions, and blockchain purchasing." />
              )}
            </div>
          </Box>
        </Container>
        <footer align="center" style={footerStyle}>
<h6>
All Rights Reserved, Moonbeam Trading Company 2022
</h6>
</footer>
    </div>
  );
};

export default Services;


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  featured: {
    pt: ["20px", null, null, null, "80px", null, "100px"],
    backgroundColor: "#F9FAFC"
  },
  container: {
    position: "relative",
    mt: "40px"
  },
  tabButtonTopWrapper: {
    overflowY: ["hidden", null, null, null, null, "inherit"],
    overflowX: ["auto", null, null, null, null, "inherit"]
  },
  tabButtonWrapper: {
    width: ["700px", null, null, null, null, "100%"],
    mx: ["auto", null, null, null, null, "0"],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid rgba(1,7,13,.1)",
    mb: "35px",
    button: {
      display: "flex",
      alignItems: "center",
      pb: ["15px", null, null, null, "35px"],
      px: ["15px", null, null, null, "30px"],
      flexShrink: "0",
      border: 0,
      backgroundColor: "rgba(0,0,0,0)",
      color: "#0F2137",
      fontSize: ["14px", null, null, null, "18px"],
      fontWeight: 500,
      lineHeight: 1,
      position: "relative",
      transition: "all 500ms ease",
      svg: {
        fontSize: ["18px", null, null, null, "30px"],
        color: "#ADBDD0",
        opacity: 0.7,
        mr: "15px",
        transition: "all 500ms ease"
      },
      "&:hover, &.active": {
        backgroundColor: "rgba(0,0,0,0)",
        color: "#0F2137",
        svg: {
          color: "#0F2137",
          opacity: 1
        },
        "&::before": {
          transform: "scale(1,1)"
        }
      },
      "&::before": {
        content: "''",
        position: "absolute",
        bottom: "-2px",
        backgroundColor: "#0F2137",
        left: 0,
        width: "100%",
        height: "3px",
        transform: "scale(0,1)",
        transition: "transform 500ms ease"
      }
    }
  },
  tabContent: {
    minHeight: ["190px", null, "300px", "385px", null, "600px"],
    position: "relative",
    "&::before": {
      content: "''",
      width: "302px",
      height: "347px",
      position: "absolute",
      bottom: "-30px",
      right: "-40px",
      display: ["none", null, null, null, null, "block"]
    },
    ".tabImage": {
      position: "relative",
      animation: `${fadeIn} 0.8s linear`,
      width: '60%'
    },
    fontFamily: "DM Sans"
  }
};
