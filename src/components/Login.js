import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

class Login extends Component {

    state = {
        username: '',
        password: ''
    }
    
    handleChange = ({ target: { name, value } }) => { this.setState({ [name]: value }) }
/* todo: track state, change to controlled form */
    handleSubmit=(e)=> {
        //stop page reload
        e.preventDefault();
        //clear input fields
        this.setState({username:'', password:''})
    }
    render() {
        const { username, password } = this.state
        
        
        return (
            
            
            <div className='d-flex justify-content-center flex-column mx-auto mt-5'>
                
                <form className=' mx-auto shadow p-4 bg-light rounded-lg' onSubmit={this.handleSubmit}>
                    <div className=' mx-auto bg-light'>
                        <h2 className='text-lg'>Sign In</h2>
                        <p>Login to your Account</p>
                    </div>
                    <div className='form-group ' >
                        <TextField 
                            type='text'
                            name='username' 
                            className='form-control'
                            label='Username'
                            value={username}
                            onChange={this.handleChange}                            
                            required />
                        
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">Please enter your username.</div>
                    </div>
                    <div className='form-group ' >
                        <TextField 
                        type='password'
                         name='password'
                         className='form-control' 
                            label='Password'
                            value={password}
                            onChange={this.handleChange}
                            required
                         />
                    </div>
                    <button className="btn btn-outline-primary btn-block mt-4">Login</button>
                    
                    <div className='mt-2'>
                        <span className='text-secondary'>Dont have an account?<Link to='/signup' > Register</Link> </span>
                    </div>
                </form>

            </div>
            
        );
    }
}

export default Login;
