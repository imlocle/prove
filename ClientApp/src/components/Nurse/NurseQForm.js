import React from 'react';
import { useAlert } from 'react-alert';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import { postReqJsonData } from '../../helper';

import '../Form.css'

// Nurse question form
export const NurseQForm = () => {

    const [redirectToReferrer, setRedirectToReferrer ] = React.useState(false)
    const { register, handleSubmit } = useForm();
    const alert = useAlert()

    // Submiting answers to api
    const onSubmit = (data) => {
        let date = new Date(Date.now());
        // dummy data
        data.id = '8';
        data.patientId = '24';
        data.createdDate = date.toLocaleString();
        // log for testing
        console.log(data)
        postReqJsonData('patient/patientNurseQData', data);
        setRedirectToReferrer(true)
    }

    // After submit, redirect page to home
    if (redirectToReferrer === true){
        return <Redirect to={'/'}/>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="form-style-1">
            <h1>Nurse Form</h1>
            <p>Please fill this form to assist your nurse.</p>
                <li>
                    <label>Full Name <span className="required">*</span></label><input type="text" name="firstName" className="field-divided" placeholder="First" ref={register}/> 
                    <input type="text" name="lastName" className="field-divided" placeholder="Last" ref={register}/>
                </li>
                <li>
                    <label>Date of Birth <span className="required">*</span></label>
                    <input className='field-long' type='date' name='dateOfBirth' ref={register}></input>
                </li>
                <li>
                    <label>Illness or Injury <span className="required">*</span></label>
                    <input className='field-long' type='illness' name='illness' ref={register}></input>
                </li>
                <li>
                    <label>Potential Plaster Cast Needed <span className="required">*</span></label>
                    <input type="radio" name="cast" value="yes" ref={register}/> Yes 
                    <input type="radio" name="cast" value="no" ref={register}/> No
                    <label>If so, we offer cartoon characters and/or sport logos printed on the plaster cast.</label>
                    <p>Please Select: </p>
                    <select name="casttype" ref={register}>
                        <option value="0">Blank</option>
                        <option value="1">Batman</option>
                        <option value="2">Superman</option>
                        <option value="3">Nightwing</option>
                        <option value="4">Los Angeles Lakers</option>
                        <option value="5">Golden State Warriors</option>
                        <option value="6">Los Angeles Dodgers</option>
                    </select>

                </li>
                <li>
                    <label>Detail <span className="required">*</span></label>
                    <p>Please describe your illness or injury.</p>
                    <textarea name="detail" id="field5" className="field-long field-textarea" ref={register}></textarea>
                </li>
                <li>
                    <input type="submit" value="Submit" onClick={()=> alert.show(<div style={{ textTransform: 'initial' }}>Thank you for filling this form.</div>)}/>
                </li>
            </ul>
        </form>
    )
    
}
