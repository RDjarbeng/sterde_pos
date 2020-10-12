import React from 'react';
import { Link } from "react-router-dom"
import TextField from "@material-ui/core/TextField";

function SignUp() {
    /* todo: track state, change to controlled form */
    return (
        <div className='d-flex justify-content-center flex-column mx-auto mt-5'>

            <form  className=' mx-auto shadow p-4 bg-light rounded-lg'>
                <div className='w-50 mx-auto bg-light'>
                    <h2 className='text-lg'>Sign Up</h2>
                    <p>Let's create your Account</p>
                </div>
                <div className='form-group ' >
                    <TextField type='text' className='form-control' label='Email' required />
                    
                </div>

                <div className='form-group ' >
                    <TextField type='password' className='form-control'label='Password' required />
                    
                </div>
                
                <div className='form-group ' >
                    <TextField type='text' className='form-control' label='Confirm your Password' />
                </div>
                <div className='form-group ' >
                    <input type='checkbox' className='' /><label> I have read and agree to Sterde terms and conditions</label>
                </div>
                <button className="btn btn-outline-primary btn-block">Register</button>
                <div className='mt-2'>
                    <span className='text-secondary'>Have an account?<Link  to='/login' > Sign in</Link> </span>
                </div>
            </form>
            
        </div>
    );
}

export default SignUp;
