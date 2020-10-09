import React from 'react';


function Login() {
/* todo: track state, change to controlled form */
    return (
        <div className='d-flex justify-content-center flex-column mx-auto mt-5'>
            
            <form className='LoginForm' className='w-25 mx-auto shadow p-3 bg-light rounded-lg'>
                <div className=' mx-auto bg-light'>
                    <h2 className='display-4'>Sign In</h2>
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
                
            </form>
        </div>
    );
}

export default Login;
