import React from "react";
import brickwall from "../../images/brickwall.jpg"
import walksoflife from "../../images/walksoflife.jpg";
import diversity from "../../images/diversity.jpg"
import aboutbg from "../../images/about--bg.jpeg"
import whitenoise from "../../images/whitenoise.jpg"
import { useForm, ValidationError } from '@formspree/react';

const imageProperties = {
  marginTop: "40px",
  marginLeft: "540px",
  height: "40%",
  width: "40%",
  alignItems: "center",
  justifyContent: "center",
};

const accessStatement = {
  marginLeft: "30px",
  marginTop: "60px"
}

const backgroundStyle = {
  backgroundImage: `url(${whitenoise})`,
  backgroundSize: "cover",
  minHeight: "205vh",
  minWidth: "100vw",
  backgroundPosition: "right",
};


const divStyle = {
  width: "100vw",
  height: "100vh",
}

const topFont = {
  marginTop: "7px",
  fontSize: "70px",
  color: "#000000"
}

const footerStyle = {
  paddingTop: "20px",
  fontColor: "#ffff"
}

const Careers = () => {

  const [state, handleSubmit] = useForm("xknyqzly");
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
  if (state.succeeded) {
      return <p>Submitted sucessfully!</p>;


  }
  return (
    <div class="column" style={backgroundStyle}>
    <form onSubmit={handleSubmit}
      action="https://formspree.io/f/xknyqzly"
      method="post">
      <label htmlFor="email">
        Email Address
      </label>
      <input
        name="email"
        type="email" 
        
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        name="message"
       
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <div  > First Name:
          <input
            placeholder=""
            type="text"
            name="FirstName" 
          />
          </div>

          <div  > Last Name:
          <input
            placeholder=""
            type="text"
            name="LastName"         
          />
          </div>

          <div  > Preferred name (if different from above)
          <input
            placeholder=""
            type="text"
            name="PreferredName"
          />
          </div>
          
          <div  > Pronouns 
          <input
            placeholder=""
            type="text"
            name="Pronouns"
          />
          </div>

          <label > Are you legally eligible to work in Canada?
            <select 
            name ="work">
              <option value="Yes">Yes</option>
              <option value="No">No</option>             
            </select>
          </label>

          <div> Email: 
          <input
            placeholder=""
            type="text"
            name="Email"
          />
          </div>

          <div> Phone number: 
          <input
            placeholder=""
            type="text"
            name="PhoneNumber"
          />
          </div>

          <div  > Address: 
          <input
            placeholder=""
            type="text"
            name="Address"
          />
          </div>

          <div  > Postal code: 
          <input
            placeholder=""
            type="text"
            name="PostalCode"
          />
          </div>

          <div  > What is your highest level of education completed? 
          <input
            placeholder=""
            type="text"
            name="HighestLevelOfEducation"
          />
          </div>

          <div  > Field of study:
          <input
            placeholder=""
            type="text"
            name="FieldOfStudy"
          />
          </div>

          <div  > What are some barriers that you have faced in completing your education? 
          <input
            placeholder=""
            type="text"
            name="BarriersFacedCompletingEducation"
          />
          </div>

          <div  > What are some barriers you have faced in seeking employment?
          <input
            placeholder=""
            type="text"
            name="BarriersFacedSeekingEmployment"
          />
          </div>
          
          <div  > Do you identify as a member of a visible minority?
          <input
            placeholder=""
            type="text"
            name="IdentifyAsMemberOfVisibleMinority"
          />
          </div>

          <div  > Have you faced periods of life-transitions such as homelessness, drug addiction and/or mental health?
          <input
            placeholder=""
            type="text"
            name="PeriodsOfLifeTransitions"
          />
          </div>

          <div  > Which position(s) are you applying for?
          <input
            placeholder=""
            type="text"
            name="PositionsApplyingFor"
          />
          </div>

          <div  > What makes you suitable for this role?
          <input
            placeholder=""
            type="text"
            name="SuitableForThisRole"
          />
          </div>

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
</div>
    
  );
};
export default Careers;
