import React, { useState } from "react";
import classes from "./contact.module.css";
import { Button, Box, Container, Heading, Text } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(name, message, email);

    fetch("https://formsubmit.co/ajax/moonbeamtradingco@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmail("");
        setMessage("");
        setName("");
        setLoading(false);
        setSent(true);
        setTimeout(() => {
          setSent(false);
        }, 15000);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };


  const contact = {
    fontSize: "33px",
    marginTop: "-2.15rem"

  }
  return (
    <Box
      as="section"
      sx={styles.subscribe}
      className={classes.wrapper}
      id="contact"
    >
      <Container>
        <Heading as="h3" id="contact-title" style={contact}>
          CONTACT US
        </Heading>
        <Text as="p" className={classes.white}>
          Any questions or inquiries? Contact us to get more information!
        </Text>
        <Box
          as="form"
          sx={styles.form}
          className={classes.form}
          onSubmit={handleSubmit}
          action={"zeinabtmohamed@gmail.com"}
        >
          <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            <h2 style={sendEmail}>Send Us an Email</h2>
          </Box>
          <input
            placeholder="Name"
            type="text"
            id="name"
            sx={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            id="email"
            sx={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <textarea
            placeholder="Please type a message"
            id="message"
            sx={styles.input}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" sx={styles.button}>
            {!loading ? (
              `Submit`
            ) : (
              <FontAwesomeIcon icon={faSpinner} className={classes.spinner} />
            )}
          </Button>
          {sent && (
            <div className={classes.sent}>
              Thanks for reaching out!
              <FontAwesomeIcon icon={faCheck} />
            </div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

const styles = {
  subscribe: {
    py: ["80px", null, null, null, "80px", "100px", "140px"],
    backgroundColor: "#fff",
    h3: {
      fontFamily: "Comfortaa",
      textAlign: "center",
      fontSize: ["3em", null, null, null, null, "30px", "36px"],
      lineHeight: [1.5, null, null, "1"],
      color: "#000",
      letterSpacing: ["-0.5px"],
      mb: ["0px", null, null, "15px"],
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
    },
    p: {
      fontFamily: "Manrope",
      fontStyle: "Italic",
      fontSize: ["1em"],
      letterSpacing: ["-0.5px"],
      textAlign: "center",
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
      mt: ["15px", null, null, "0"],
    },
  },
  form: {
    fontFamily: "Comfortaa",
    mx: ["auto"],
    display: ["flex"],
    flexDirection: ["column"],
    justifyContent: ["space-between"],
    alignItems: ["center"],
    flexWrap: ["wrap"],
    backgroundColor: "white",
    borderRadius: "8px",
  },
  input: {
    fontFamily: "Comfortaa",
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
    fontFamily: "Comfortaa",
    backgroundColor: "#000",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["18px"],
    maxWidth: "80%",
    color: "#fff",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["100%", null, null, "auto"],
    mt: "24px",
    mx: ["auto", null, null, "0"],
    "&:hover": {
      backgroundColor: "#000",
      opacity: "0.8",
    },
  },
};

const sendEmail = {
  fontFamily: "Comfortaa",
  color: "#000000",
};
