import React from 'react';
import { Link } from "react-router-dom";

function Login() {
/* todo: track state, change to controlled form */
    return (
        <div className='d-flex justify-content-center flex-column mx-auto mt-5'>
            
            <form className=' mx-auto shadow p-4 bg-light rounded-lg'>
                <div className=' mx-auto bg-light'>
                    <h2 className='text-lg'>Sign In</h2>
                    <p>Login to your Account</p>
                </div>
                <div className='form-group ' >
                    <input type='text' className='form-control' placeholder='Username' required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please enter your username.</div>
                </div>
                <div className='form-group ' >
                    <input type='text' className='form-control' placeholder='Password' />
                </div>
                <button className="btn btn-outline-primary btn-block">Login</button>
                <div className='mt-2'>
                    <span className='text-secondary'>Dont have an account?<Link to='/signup' > Register</Link> </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
