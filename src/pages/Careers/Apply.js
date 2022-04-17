import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import whitenoise from "../../images/whitenoise.jpg";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { FormGroup } from "@mui/material";
import TextField from '@mui/material/TextField'
import FadeIn from "react-fade-in/lib/FadeIn";

const backgroundStyle = {
  backgroundImage: `url(${whitenoise})`,
  backgroundSize: "cover",
  minHeight: "230vh",
  minWidth: "100vw",
  backgroundPosition: "right",
};

const paperStyle = {
  padding: "20px",
  height: "215vh",
  width: "55vw",
  backgroundColor: "rgba(245,245,245,0.6)",
  borderRadius: "80px",
  marginTop: "50px",
  marginLeft: "420px",
};

const topFont = {
  marginTop: "7px",
  fontSize: "50px",
  color: "#000000",
};

const topSpacing = {
  marginTop: "40px",
};

const inputStyle = {
  width: "800px",
 
  size: "small"
};

const buttonStyle = {
  marginLeft: "450px",
};

const shiftQuestions = {
    marginLeft: "90px"
}

const backButton = {
  backgroundColor: "#1c6ea4",
  marginTop: "2em"
}
export default function Apply() {
  const [state, handleSubmit] = useForm("xknyqzly");
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
  if (state.succeeded) {
    return <p>Submitted sucessfully!<h6>Return to <a href="/">home page.</a></h6></p>
    ;
  }
  return (

    <div><FadeIn>
       <a href="/careers"><button style={backButton}>BACK TO CAREERS</button></a>
    <div style={backgroundStyle}>
      <h1 style={topFont} align="center">
        SUBMIT AN APPLICATION
      </h1>
      <h6 align="center">
        {" "}
        <i>Think you might not qualify for any of the available positions? At Moonbeam, we
        hire from a holistic perspective and see barriers to employment as
        potential strengths!</i>

    
      </h6>
      <br></br>
 <h6 align="center"><b>SEE OUR CURRENT OPENINGS:</b><br></br>
        <a
        href="https://uploads.documents.cimpress.io/v1/uploads/1ef18f45-35c6-4a0d-a04f-f9d84fd3b2a3~110/original?tenant=vbu-digital"
        ><br></br>Data Scientist - Job ID MTC2101DS</a></h6><br></br>
      
      <Paper style={paperStyle}>
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xknyqzly"
          method="post"
        >
            <br></br>
            <br></br>
           
            <h6 align="center">
            Please answer all required questions. You can provide as little or as much detail<br></br> as you would like for the open-ended questions.
            <br></br>
            <br></br>
            <i>Click <u>here</u> for an accessible PDF version of this form.</i>
            </h6>
          <div style={shiftQuestions}>
          <div style={topSpacing}>
            {" "}
            
            <br></br>
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="FirstName"
              label="First Name:"
              style={inputStyle}
              required
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField 
              placeholder=""
              type="text"
              name="LastName"
              label="Last Name:"
              style={inputStyle}
              required
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="PreferredName"
              label="Preferred name (if different from above):"
              style={inputStyle}
              
            />
          </div>
          <br></br>
          <div>
            {" "}
           
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="Pronouns"
              label="Pronouns:"
              style={inputStyle}
            />
          </div>
          <br></br>

          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="Email"
              label="Email:"
              style={inputStyle}
              required
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="PhoneNumber"
              label="Phone number:"
              style={inputStyle}
             
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="Address"
              label="Address:"
              style={inputStyle}
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="PostalCode"
              label="Postal code:"
              style={inputStyle}
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="HighestLevelOfEducation"
              label="What is your highest level of education completed?"
              style={inputStyle}
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="FieldOfStudy"
              label="Field of study:"
              style={inputStyle}
            />
          </div>
          <br></br>
          <div>
            {" "}
           
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="BarriersFacedCompletingEducation"
              label="Have you faced any barriers to your education?"
              style={inputStyle}
            />
          </div>
          <br></br>
          <div>
            {" "}
          
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="BarriersFacedSeekingEmployment"
              label="What are some barriers you have faced in seeking employment?"
              style={inputStyle}
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="IdentifyAsMemberOfVisibleMinority"
              label="Do you identify as a member of a visible minority?"
              style={inputStyle}
            />
          </div>
          <br></br>
          <div>
            {" "}
          
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="PeriodsOfLifeTransitions"
              label="Have you faced any difficult life-transitions such as homelessness,
            drug addiction and/or mental health?"
              style={inputStyle}
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="PositionsApplyingFor"
              label="Which position(s) are you applying for?"
              style={inputStyle}
              required
            />
          </div>
          <br></br>
          <div>
            {" "}
            
            <br></br>
            <TextField
              placeholder=""
              type="text"
              name="SuitableForThisRole"
              label="Which of your past experiences would complement this role?"
              style={inputStyle}
              
            />
          </div>
          <br></br>
          <label>
            {" "}
            Are you legally eligible to work in Canada?
            <br></br>
            <select name="work">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <br></br>
          </div>
          <Button
            style={buttonStyle}
            type="submit"
            variant="outlined"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
    </FadeIn></div>
  );
}


