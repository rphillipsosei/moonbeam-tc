import React from "react";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import typing from "../../images/typing.jpg";
import protractor2 from "../../images/protractor2.jpg";
import whitenoise from "../../images/whitenoise.jpg";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xknyqvwy");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="wrapper-grid">
    <div class="form-card"></div>  
      <h1 align="center">CONTACT US</h1>
      <h6 align="center"><i>Receive a response within 48 business hours.</i></h6>
      <div className="row">

        
          <p>
          
      
          <h5 align="center"><i>
          Any suggestions or inquiries? Do not hesitate to get in touch!
        </i></h5>
        </p>
        <div>
        <input
              name="name"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
              
            />
      </div>
      <div>
        <input
              name="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required
             
            />
          <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
            />
      
      </div>
      <div>
        <input
              name="message"
              id="outlined-basic"
              label="Message"
              variant="outlined"
              required
              multiline
              rows={2}
              
            />
      
      </div>
      <Button type="submit" disabled={state.submitting} type="submit" variant="outlined" align="center" >SEND</Button>
         
        <div className="row"> 
    
        </div>
        
        
      </div>
       */}

      {/* </div> */}

      <div>
        <h1 align="center" className="title">
          CONTACT US
        </h1>
        <h6 align="center">
          <i>Receive a response within 48 business hours.</i>
        </h6>
        <br></br>
        <br></br>

        <section className="wrapper-grid">
          <div className="form-card">
            <p>
              <br></br>
              <h3>
                Any suggestions or inquiries? Do not hesitate to get in touch!
              </h3>
              <br></br>
              <form>

              <table>
<tbody>
<tr>
<td> <h5>Name:</h5></td>
<td>  <input className="input" ></input></td>
</tr>
<br></br>
<tr>
<td> <h5>Email Address: </h5></td>
<td><input className="input"></input></td>
</tr>
<br></br>
<tr>
<td><h5>Your message:</h5></td>
<td><input className="input" ></input></td>
</tr>
</tbody>
</table>
           
                <br></br>
                <br></br>
                <button type="submit" align="center">SUBSCRIBE</button>
              </form>
              <br></br>
            </p>
          </div>

        </section>
      </div>
    </form>
  );
};
export default Contact;
