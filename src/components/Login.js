import React from 'react';


function Login() {
    return (
        <div className='d-flex justify-content-center flex-column mx-auto mt-5'>
            <div className='w-50 mx-auto bg-light'>
                <h2 className='display-2'>Sign In</h2>
                <p>Login to your Account</p>
            </div>
            <form className='LoginForm' className='w-50 mx-auto shadow-sm p-4 bg-light'>
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
