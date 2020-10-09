import React, { Component } from 'react'
import Form from './Home_left'

class Home extends Component{
    constructor() {
        super()
    }
    render() {
        
        return (
            <div className='d-flex justify-content-center flex-column '>
                <h1>POS</h1>
                <div className='col-md-6 border border-dark p-0'>
                <Form />                
                </div>
                <div className='col-md-6 border border-dark p-0'>
                                    </div>
            </div>
        );
    }
}

export default Home;
