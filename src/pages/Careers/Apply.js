import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import whitenoise from "../../images/whitenoise.jpg";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { FormGroup } from "@mui/material";
import TextField from '@mui/material/TextField'
import FadeIn from "react-fade-in/lib/FadeIn";
import "./Apply.css"
import * as AiIcons from "react-icons/ai";
// const backgroundStyle = {
//   backgroundImage: `url(${whitenoise})`,
//   backgroundSize: "cover",
//   minHeight: "230vh",
//   minWidth: "100vw",
//   backgroundPosition: "right",
// };

// const paperStyle = {
//   padding: "20px",
//   height: "215vh",
//   width: "55vw",
//   backgroundColor: "rgba(245,245,245,0.6)",
//   borderRadius: "80px",
//   marginTop: "50px",
//   marginLeft: "420px",
// };

const topFont = {
  marginTop: "7px",
  fontSize: "50px",
  color: "#000000",
};

// const topSpacing = {
//   marginTop: "40px",
// };

// const inputStyle = {
//   width: "800px",
 
//   size: "small"
// };

const buttonStyle = {
  marginLeft: "450px",
};

// const shiftQuestions = {
//     marginLeft: "90px"
// }

const backButton = {
  backgroundColor: "#1c6ea4",
  marginTop: "2em",
  color: "#ffff"
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

    <FadeIn><main>
       <a href="/careers"><button style={backButton}>BACK TO CAREERS</button></a>
       <br></br>
       <br></br>
       <br></br>
    <div >
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
      
      
      <br></br>
 <h6 align="center"><b>Click here to view a PDF version of the application</b><br></br>
        <a
        href="https://docdro.id/psBZ148"
        ><br></br><AiIcons.AiOutlineFilePdf/></a></h6><br></br>



        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xknyqzly"
          method="post"
        >
            <br></br>
            <br></br>
           
            <h6 align="center">
            Please answer all required questions at the minimum (marked with a star). <br></br>You can provide as little or as much detail as you would like for the open-ended questions.
            
            </h6>
        <form name="my-form" action="#" method="get">
<div class="form-box">
<label for="First Name">First Name:</label>
<input  
type="text"
name="FirstName"
label="First Name:"
required />
</div>
<div class="form-box">
<label for="Last Name">Last Name:</label>
<input 
 type="text"
name="LastName"
required
/>
</div>

<div class="form-box">
<label for="Preferred Name">Preferred Name:</label>
<input 
type="text"
name="PreferredName"
/>
</div>

<div class="form-box">
<label for="pronouns">Pronouns:</label>
<input 
 type="text"
 name="Pronouns"
/>
</div>


<div class="form-box">
<label for="Email">Email:</label>
<input 
 type="email"
 name="Email"
required/>
</div>


<div class="form-box">
<label for="Phone Number">Phone Number:</label>
<input 
type="tel" 
pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="Phone number" 
/>
</div>

<div class="form-box">
<label for="pass">Address</label>
<input 
 type="text"
 name="Address" />
</div>

<div class="form-box">
<label for="pass">Postal Code:</label>
<input 
  type="text"
  name="PostalCode"
/>
</div>

<div class="form-box">
<label for="pass">What is your highest level of education completed?</label>
<input 
type="text"
name="HighestLevelOfEducation"
/>
</div>

<div class="form-box">
<label for="pass">Field of study:</label>
<input 
type="text"
ame="FieldOfStudy"
/>
</div>

<div class="form-box">
<label for="pass">What are some barriers you faced to your education?</label>
<input 
type="text"
name="BarriersFacedCompletingEducation"
/>
</div>
<div class="form-box">
<label for="pass">What are some barriers you have faced in seeking employment?</label>
<input 
type="text"
name="BarriersFacedSeekingEmployment"
/>
</div>
<div class="form-box">
<label for="pass">Do you identify as a member of a visible minority group?</label>
<input 
type="text"
name="IdentifyAsMemberOfVisibleMinority"
required/>
</div>
<div class="form-box">
<label for="pass">Have you faced any difficult life-transitions such as homelessness,
drug addiction and/or mental health?</label>
<input 
type="text"
name="PeriodsOfLifeTransitions"
/>
</div>
<div class="form-box">
<label for="pass">Which position(s) are you applying for?</label>
<input 
type="text"
name="PositionsApplyingFor"
/>
</div>

<div class="form-box">
<label for="pass">Which of your past experiences would complement this role?</label>
<input 
type="text"
name="SuitableForThisRole"/>
</div>

<div class="form-box">
<label for="domain">Are you legally eligible to work in Canada?</label>
<select  name="work">
    <option value="Yes">Yes</option>
    <option value="No">No</option>
    
</select>
</div>
<div class="form-box">

</div>
</form>

          <Button
            style={buttonStyle}
            type="submit"
            variant="outlined"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </form>
    
    </div>
   
    </main></FadeIn>


        
  );
}


