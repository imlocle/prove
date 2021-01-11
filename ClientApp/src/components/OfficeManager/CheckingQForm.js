import React from 'react';
import { postReqJsonData } from '../../helper';
import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert'
import { useForm } from "react-hook-form";
import '../Form.css'

export const CheckingQForm = () => {

    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false)
    const { register, handleSubmit } = useForm();
    const alert = useAlert();

    let covidAlert = false;
    let emergencyAlert = false;

    const onSubmit = (data) => {
        let date = new Date(Date.now());
        // dummy data
        data.id = '8';
        data.patientId = '24';
        data.createdDate = date.toLocaleString();
        // log for testing
        console.log(data)
        postReqJsonData('patient/patientCheckingQData', data);
        setRedirectToReferrer(true)
    }

    if (redirectToReferrer === true){
        return <Redirect to={'/'}/>
    }

    let hospLink ="https://www.google.com/maps/place/Summerlin+Hospital+Medical+Center/@36.1671086,-115.3285036,14z/data=!4m5!3m4!1s0x80c8bfc522f7d661:0x5e329facaa38d052!8m2!3d36.1810516!4d-115.3174138";
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="form-style-1">
            <h1>Patient Form</h1>
            <p>Please fill this form before coming into your appointment.</p>
                <li>
                    <label>Full Name <span className="required">*</span></label><input type="text" name="firstName" className="field-divided" placeholder="First" ref={register}/> 
                    <input type="text" name="lastName" className="field-divided" placeholder="Last" ref={register}/>
                </li>
                <li>
                    <label>Date of Birth <span className="required">*</span></label>
                    <input className='field-long' type='date' name='dateOfBirth' ref={register}></input>
                </li>
                <li>
                    <label>Severity Level <span className="required">*</span></label>
                    <p>If this is an Emergency, please go to the ER.</p>
                    <select name="severityLevel" className="field-select" ref={register} onChange={(x)=>{
                        if (x.target.value === '5'){
                            emergencyAlert=true
                        } else{
                            emergencyAlert=false
                        }
                    }}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4 (Illness)</option>
                        <option value="5">5 (Emergency)</option>
                    </select>
                </li>
                <li>
                    <label>COVID-19 <span className="required">*</span></label>
                    <p>Do you have COVID-19 or have been in contact with someone with it?</p>
                    <p>If so, please go to the <a href={hospLink} target="_blank" rel="noopener noreferrer">East Entrance</a> for COVID-19 protocol.</p>
                    <input type="radio" name="covid19" value="yes" ref={register} onClick={()=>{covidAlert=true}}/> Yes
                    <input type="radio" name="covid19" value="no" ref={register} onClick={()=>{covidAlert=false}}/> No
                </li>
                <li>
                    <label>Illness or Injury <span className="required">*</span></label>
                    <textarea name="illness" id="field5" className="field-long field-textarea" ref={register}></textarea>
                </li>
                <li>
                    <input type="submit" value="Submit" onClick={()=>{
                        if (covidAlert || emergencyAlert){
                            alert.show(<div style={{ textTransform: 'initial' }}>Please go to the <a href={hospLink} target="_blank" rel="noopener noreferrer">East Entrance</a> of the clinic at the designated COVID Protocol area. Thank you.</div>)
                        }
                        else {
                            alert.show(<div style={{ textTransform: 'initial' }}>Thank you for filling this form. We will see you soon!</div>)
                        }
                    }}/>
                </li>
            </ul>
        </form>
    )
}
