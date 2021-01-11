import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useLocation } from 'react-router-dom'

export const Auth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

export const Authentication = () => {
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false)
    const { state } = useLocation()
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // dummy login for testing
        if (data.username === 'admin' && data.pw === 'admin'){
            Auth.authenticate(()=>{
                setRedirectToReferrer(true)
            })
        }
    }

    if (redirectToReferrer === true) {
        return <Redirect to={state?.from || '/'} />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul className="form-style-1">
                <li>
                    <label>Username <span className="required">*</span></label>
                    <input type="text" name="username" className="field-long" placeholder="Username" ref={register}/>
                </li>
                <li>
                    <label>Password <span className="required">*</span></label>
                    <input className='field-long' type='password' name='pw' ref={register} placeholder="Password"/>
                </li>
                
                <li>
                    <input type="submit" value="Submit"/>
                </li>
            </ul>
        </form>
    )
}