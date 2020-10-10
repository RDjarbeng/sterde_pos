import React, { Component } from 'react'
import { Form as LeftForm } from './POS_Left_Form'
import { Form as RightForm }  from './POS_Right_Form'

class POS extends Component{
    // constructor() {
    //     super()
    // }
    render() {
        
        return (
            <div className=' '>
                <h1>POS</h1>
                <div className='d-flex'>
                    <LeftForm />
                <div className='col-md-5 border border-dark p-0'>
                                
                </div>
                <div className='col-md-7 border border-dark p-0'>
                    <RightForm />
                </div>
                </div>
            </div>
        );
    }
}

export default POS;
