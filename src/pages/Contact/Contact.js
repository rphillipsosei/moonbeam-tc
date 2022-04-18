import React from "react";
import { Button } from "@mui/material";
import { useForm } from "@formspree/react";
import FadeIn from "react-fade-in/lib/FadeIn";

const paperStyle2 = {
  marginBottom: "15px",
  height: "43vh",
  width: "43vw",
  backgroundColor: "rgba(255,255,255,0.1)",
  borderRadius: "147px 31px 147px 50px / 116px 15px 116px 25px",
  border: "5px outset #1c6ea4",
  marginTop: "105px",
  marginLeft: "555px",
  display: "flex",
};

const fieldStyle2 = {
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  width: "640px",
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xknyqvwy");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <main>
      <div>
        <FadeIn>
          <div className="col contact-page">
            <form onSubmit={handleSubmit}>
              <div id="header-section">
                <h1 align="center" className="title">
                  CONTACT US
                </h1>
                <h6 align="center">
                  <i>Receive a response within 48 business hours.</i>
                </h6>
              </div>
              <div className="column" id="form-items" align="center">
                <br></br>
                <div class="">
                  <form name="my-form" action="#" method="get">
                    <div class="form-box">
                      <label for="Name">Name:</label>
                      <input type="text" name="Name" label="Name:" required />
                    </div>

                    <div class="form-box">
                      <label for="Email">Email:</label>
                      <input type="email" name="Email" required />
                    </div>

                    <div class="form-box">
                      <label for="Message Name">Message:</label>
                      <input type="text" name="Message" />
                    </div>
                  </form>
                </div>
                <Button
                  type="submit"
                  variant="outlined"
                  disabled={state.submitting}
                >
                  Submit
                </Button>
              </div>
            </form>
            <div className="placeholder"></div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
};
export default Contact;
