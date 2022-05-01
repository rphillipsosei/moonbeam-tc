import React, { useState } from "react";
import classes from "./stay-connected.module.css";
import { Button, Input, Box, Container, Heading, Text } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(email);

    fetch("https://formsubmit.co/ajax/mark.mcdonald@moonbeamtrading.ca", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail("");
        setLoading(false);
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 15000);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Box
      as="section"
      sx={styles.subscribe}
      className={classes.wrapper}
      id="connected"
    >
      <Container>
        <Box
          as="form"
          sx={styles.form}
          className={classes.form}
          onSubmit={handleSubmit}
          action={"zeinabtmohamed@gmail.com"}
        >
          <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            Stay Connected
          </Box>
          <Text as="p">Stay connected with everything Moonbeam</Text>
          <input
            placeholder="Email"
            type="email"
            id="email"
            sx={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" sx={styles.button}>
            {!loading ? (
              `SUBSCRIBE`
            ) : (
              <FontAwesomeIcon icon={faSpinner} className={classes.spinner} />
            )}
          </Button>
          {sent && (
            <div className={classes.sent}>
              Sent Successfully!
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </Box>
      </Container>
      <h6 align="center" className="rights-reserved">
        All Rights Reserved, Moonbeam Trading Company 2022
      </h6>
    </Box>
  );
};

export default Navbar;

const styles = {
  subscribe: {
    py: ["48px", null, null, null, "64px", "80px", "124px"],
    backgroundColor: "#000000",
    h3: {
      textAlign: "center",
      fontSize: ["23px", null, null, null, null, "30px", "36px"],
      lineHeight: [1.5, null, null, "1"],
      color: "#fff",
      letterSpacing: ["-0.5px"],
      mb: ["0px", null, null, "15px"],
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
    },
    p: {
      fontSize: ["25px"],
      opacity: ".6",
      color: "#ffff",
      letterSpacing: ["-0.5px"],
      textAlign: "center",
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
      mt: ["10px", null, null, "0"],
    },
  },
  form: {
    mx: ["auto"],
    display: ["flex"],
    flexDirection: ["column"],
    justifyContent: ["space-between"],
    alignItems: ["center"],
    flexWrap: ["wrap"],
    mt: ["30px", null, null, null, ",60px"],
    backgroundColor: "#000000",
    borderRadius: "8px",
  },
  input: {
    width: ["100%"],
    maxWidth: ["80%", "80%", "80%", "80%"],
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255, .08)",
    outline: "none",
    color: "rgba(255,255,255, .8)",
    fontSize: "16px",
    pl: ["0px", null, null, "30px"],
    mt: ["8px", null, null, "8px"],
    height: ["50px", null, null, "60px"],
    mr: ["0px", null, null, "15px"],
    textAlign: ["center", null, null, "left"],
  },
  button: {
    marginLeft: "-1rem",
    backgroundColor: "#000000",
    border: "#ffff",
    fontWeight: "500",
    fontSize: ["18px"],
    maxWidth: "80%",
    color: "#ffff",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["100%", null, null, "auto"],
    mt: "24px",
    mx: ["auto", null, null, "0"],
    "&:hover": {
      backgroundColor: "#0c79be",
      opacity: "0.8",
    },
  },
};
