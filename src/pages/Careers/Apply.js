import React from "react";
import { useForm } from "@formspree/react";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import FadeIn from "react-fade-in/lib/FadeIn";
import "./Apply.css";
import * as AiIcons from "react-icons/ai";

const topFont = {
  marginTop: "7px",
  fontSize: "50px",
  color: "#000000",
};
const pdfIcon = {
height:"10%",
width: "10%"
}
const buttonStyle = {
  marginLeft: "450px",
};

const comfortaa = {
  fontFamily: "Comfortaa",
  fontSide: "16px"
}

export default function Apply() {
  const [state, handleSubmit] = useForm("xknyqzly");
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  if (state.succeeded) {
    return (
      <p>
        Submitted sucessfully!
        <h6>
          Return to <a href="/">home page.</a>
        </h6>
      </p>
    );
  }
  return (
    <FadeIn>
      <main className="main-apply">
        {/* <a href="/careers">
          <Button type="submit" variant="outlined" disabled={state.submitting}>
            BACK TO CAREERS
          </Button>
        </a> */}
        <br></br>
        <br></br>
        <br></br>
        <div>
          <h1 style={topFont} align="center">
            SUBMIT AN APPLICATION
          </h1>

          <br></br>

          <h6 align="center">
            <b>SEE OUR CURRENT OPENINGS:</b>
            <br></br>
            <a href="https://uploads.documents.cimpress.io/v1/uploads/1ef18f45-35c6-4a0d-a04f-f9d84fd3b2a3~110/original?tenant=vbu-digital">
              <br></br>Data Scientist - Job ID MTC2101DS
            </a>
          </h6>
          <br></br>

          <h6 align="center" className="career-caption">
            
            <i>
              Think you might not qualify for any of the available positions above? Please apply to the position(s) of your choice using the form below or fill out the following pdf and email it to hiring@moonbeamtrading.ca. At
              Moonbeam, we hire from a holistic perspective and see barriers to
              employment as potential strengths!
            </i>
          </h6>
          <br></br>
          <h6 align="center">
            <b>Click here to view a PDF version of the application</b>
            <br></br>
            <a href="https://docdro.id/MwY5KLs">
              <br></br>
              <AiIcons.AiOutlineFilePdf style={pdfIcon}/>
            </a>
          </h6>
          <br></br>

          <div
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xknyqzly"
            method="post"
          >
            <br></br>

            <h6 align="center" className="apply-instructions">
              Please answer all required questions at the minimum (marked with a
              star). <br></br>You can provide as little or as much detail as you
              would like for the open-ended questions.
            </h6>
            <div className="apply-form">
            <form name="my-form" action="#" method="get" >
              <div class="form-box">
                <label for="First Name"></label>
                <input
                  type="text"
                  name="FirstName"
                  label="First Name:"
                  required
                  placeholder="First Name"
                />
              </div>
              <div class="form-box">
                <label for="Last Name"></label>
                <input type="text" name="LastName" placeholder="Last Name" required />
              </div>

              <div class="form-box">
                <label for="Preferred Name"></label>
                <input type="text" name="PreferredName" placeholder="Preferred Name"/>
              </div>

              <div class="form-box">
                <label for="pronouns"></label>
                <input type="text" name="Pronouns" placeholder="Pronouns"/>
              </div>

              <div class="form-box">
                <label for="Email"></label>
                <input type="email" name="Email" required placeholder="Email"/>
              </div>

              <div class="form-box">
             
                <label for="Phone Number"></label>
                <input
                 placeholder="Phone Number"
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="Phone number"
                />
              </div>

              <div class="form-box">
                <label for="pass"></label>
                <input type="text" name="Address"  placeholder="Address" />
              </div>

              <div class="form-box">
                <label for="pass"></label>
                <input type="text" name="PostalCode"  placeholder="Postal Code" />
              </div>

              <div class="form-box">
                <label for="pass">
                  
                </label>
                <input type="text" name="HighestLevelOfEducation"  placeholder="Highest level of education completed" />
              </div>

              <div class="form-box">
                <label for="pass"></label>
                <input type="text" ame="FieldOfStudy"  placeholder="Field of study"/>
              </div>

              <div class="form-box">
                <label for="pass">
                  
                </label>
                <input type="text" name="BarriersFacedCompletingEducation"  placeholder="What are some obstacles you have faced in your education?"/>
              </div>
              <div class="form-box">
                <label for="pass">
                  
                </label>

                <input
                  type="text"
                  name="IdentifyAsMemberOfVisibleMinority"
                  required
                  placeholder=" Do you identify as a member of a visible minority group?"
                />
              </div>
              <div class="form-box">
                <label for="pass">
                  
                </label>
                <textarea rows={4} id="apply-textarea" type="text" name="BarriersFacedSeekingEmployment"  placeholder="     What are some obstacles you have faced in finding employment?"/>
              </div>
              <div class="form-box">
                <label for="pass">
                 
                </label>
                
                <textarea rows={4} id="apply-textarea" type="text" name="PeriodsOfLifeTransitions"  placeholder="     Have you faced any difficult life-transitions such as
                  homelessness, drug addiction and/or mental health?" />
              </div>
              
              <div class="form-box">
                <label for="pass">
                  
                </label>
                <textarea rows={4}  id="apply-textarea" type="text" name="SuitableForThisRole"  placeholder="     Which of your past experiences would complement this role?"/>
              </div>

              <div class="form-box">
                <label for="pass">
                  
                </label>
                <textarea rows={4}  id="apply-textarea" type="text" name="AdditionalInfo"  placeholder="     Is there any additional information you would like our hiring team to know?"/>
              </div>

              <div class="form-box">
                <label for="pass">
                  
                </label>
                <textarea rows={4} id="apply-textarea" type="text" name="PositionsApplyingFor"  placeholder="     Which position(s) are you applying for?"/>
              </div>

              <h6 className="legal-to-work">Are you legally eligible to work in Canada?</h6>
              <div class="form-box">
                <label for="domain">
                </label>
                <select name="work" >
                <option id="legal" value="legal" disable></option>
                  <option value="Yes" style={comfortaa}>Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div class="form-box"></div>
            </form>
            </div>
            <Button
              style={buttonStyle}
              type="submit"
              variant="outlined"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </div>
        </div>
      </main>
    </FadeIn>
  );
}
