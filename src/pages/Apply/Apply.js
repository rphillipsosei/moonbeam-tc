import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";


const Apply = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PreferredName, setPreferredName] = useState('');
  const [Pronouns, setPronouns] = useState('');
  const [LegallyEligibleToWork, setLegallyEligibleToWork] = useState({work: ''});
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [PostalCode, setPostalCode] = useState('');
  const [HighestLevelOfEducation, setHighestLevelOfEducation] = useState('');
  const [FieldOfStudy, setFieldOfStudy] = useState('');
  const [BarriersFacedCompletingEducation, setBarriersFacedCompletingEducation] = useState('');
  const [BarriersFacedSeekingEmployment, setBarriersFacedSeekingEmployment] = useState('');
  const [IdentifyAsMemberOfVisibleMinority, setIdentifyAsMemberOfVisibleMinority] = useState('');
  const [PeriodsOfLifeTransitions, setPeriodsOfLifeTransitions] = useState('');
  const [PositionApplyingFor, setPositionApplyingFor] = useState('')
  const [SuitableForThisRole, setSuitableForThisRole] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    console.log(FirstName, LastName, PreferredName, Pronouns, LegallyEligibleToWork, Email, PhoneNumber, Address, PostalCode, HighestLevelOfEducation, FieldOfStudy, BarriersFacedCompletingEducation, BarriersFacedSeekingEmployment, IdentifyAsMemberOfVisibleMinority, PeriodsOfLifeTransitions, PositionApplyingFor, SuitableForThisRole)

    fetch("https://formsubmit.co/ajax/zeinabtmohamed@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          FirstName,
          LastName,
          PreferredName,
          Pronouns,
          LegallyEligibleToWork,
          Email,
          PhoneNumber,
          Address,
          PostalCode,
          HighestLevelOfEducation,
          FieldOfStudy,
          BarriersFacedCompletingEducation,
          BarriersFacedSeekingEmployment,
          IdentifyAsMemberOfVisibleMinority,
          PeriodsOfLifeTransitions,
          PositionApplyingFor,
          SuitableForThisRole,

      })
  })
      .then(response => response.json())
      .then(data => {
        setFirstName('')
        setLastName('')
        setPreferredName('')
        setPronouns('')
        setLegallyEligibleToWork('')
        setEmail('')
        setPhoneNumber('')
        setAddress('')
        setPostalCode('')
        setHighestLevelOfEducation('')
        setFieldOfStudy('')
        setBarriersFacedCompletingEducation('')
        setBarriersFacedSeekingEmployment('')
        setIdentifyAsMemberOfVisibleMinority('')
        setPeriodsOfLifeTransitions('')
        setPositionApplyingFor('')
        setSuitableForThisRole('')

        setLoading(false)
        setSent(true)
        setTimeout(() => {
          setSent(false)
        }, 15000)
        console.log(data)
      })
      .catch(error => console.log(error));

  }


  return (
    <>

      
        <h3 >Thank you for applying to Moonbeam trading company. We want to hear your story. Please take a few moments to reflect and complete this form. </h3>
        <h3> If you are having trouble viewing this form, you can fill out the PDF form here and email it to example@example.com </h3>
        <div as="form"   onSubmit={handleSubmit} action={'moonbeamtradingco@gmail.com'}>
          <div as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            Please fill out the application below 
          </div>

          <div  > First Name:
          <input
            placeholder=""
            type="text"
            id="FirstName"
            
            value={FirstName}
            onChange={e => setFirstName(e.target.value)}
          />
          </div>

          <div  > Last Name:
          <input
            placeholder=""
            type="text"
            id="LastName"
            
            value={LastName}
            onChange={e => setLastName(e.target.value)}
          />
          </div>

          <div  > Preferred name (if different from above)
          <input
            placeholder=""
            type="text"
            id="PreferredName"
            
            value={PreferredName}
            onChange={e => setPreferredName(e.target.value)}
          />
          </div>
          
          <div  > Pronouns 
          <input
            placeholder=""
            type="text"
            id="Pronouns"
            
            value={Pronouns}
            onChange={e => setPronouns(e.target.value)}
          />
          </div>

          <label > Are you legally eligible to work in Canada?
            <select 
            onChange={e => setLegallyEligibleToWork(e.target.value)} 
            name ="work"
            
            value={LegallyEligibleToWork}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>             
            </select>
          </label>

          <div  > Email: 
          <input
            placeholder=""
            type="text"
            id="Email"
            
            value={Email}
            onChange={e => setEmail(e.target.value)}
          />
          </div>

          <div  > Phone number: 
          <input
            placeholder=""
            type="text"
            id="PhoneNumber"
            
            value={PhoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          </div>

          <div  > Address: 
          <input
            placeholder=""
            type="text"
            id="Address"
            
            value={Address}
            onChange={e => setAddress(e.target.value)}
          />
          </div>

          <div  > Postal code: 
          <input
            placeholder=""
            type="text"
            id="PostalCode"
            
            value={PostalCode}
            onChange={e => setPostalCode(e.target.value)}
          />
          </div>

          <div  > What is your highest level of education completed? 
          <input
            placeholder=""
            type="text"
            id="HighestLevelOfEducation"
            
            value={HighestLevelOfEducation}
            onChange={e => setHighestLevelOfEducation(e.target.value)}
          />
          </div>

          <div  > Field of study:
          <input
            placeholder=""
            type="text"
            id="FieldOfStudy"
            
            value={FieldOfStudy}
            onChange={e => setFieldOfStudy(e.target.value)}
          />
          </div>

          <div  > What are some barriers that you have faced in completing your education? 
          <input
            placeholder=""
            type="text"
            id="BarriersFacedCompletingEducation"
            
            value={BarriersFacedCompletingEducation}
            onChange={e => setBarriersFacedCompletingEducation(e.target.value)}
          />
          </div>

          <div  > What are some barriers you have faced in seeking employment?
          <input
            placeholder=""
            type="text"
            id="BarriersFacedSeekingEmployment"
            
            value={BarriersFacedSeekingEmployment}
            onChange={e => setBarriersFacedSeekingEmployment(e.target.value)}
          />
          </div>
          
          <div  > Do you identify as a member of a visible minority?
          <input
            placeholder=""
            type="text"
            id="IdentifyAsMemberOfVisibleMinority"
            
            value={IdentifyAsMemberOfVisibleMinority}
            onChange={e => setIdentifyAsMemberOfVisibleMinority(e.target.value)}
          />
          </div>

          <div  > Have you faced periods of life-transitions such as homelessness, drug addiction and/or mental health?
          <input
            placeholder=""
            type="text"
            id="PeriodsOfLifeTransitions"
            
            value={PeriodsOfLifeTransitions}
            onChange={e => setPeriodsOfLifeTransitions(e.target.value)}
          />
          </div>

          <div  > Which position(s) are you applying for?
          <input
            placeholder=""
            type="text"
            id="PositionsApplyingFor"
            
            value={PositionApplyingFor}
            onChange={e => setPositionApplyingFor(e.target.value)}
          />
          </div>

          <div  > What makes you suitable for this role?
          <input
            placeholder=""
            type="text"
            id="SuitableForThisRole"
            
            value={SuitableForThisRole}
            onChange={e => setSuitableForThisRole(e.target.value)}
          />
          </div>


          <button type="submit" >
            {!loading ? `APPLY NOW!` : <FontAwesomeIcon icon={faSpinner}  />}
          </button>
         {sent && <div >Sent Successfully!<FontAwesomeIcon icon={faCheck} /></div>}
        </div>
      

    </>    
)}

export default Apply;

