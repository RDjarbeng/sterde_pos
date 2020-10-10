import React from 'react'

export function Form() {
    return (
        <form className=' shadow  bg-warning  rounded-lg'>
            <p>Default: client</p>
            <div className='form-group ' >
                <input type='text' className='form-control ' placeholder='Name of customer' required />
                <button className='btn btn-outline-info'>Add</button>
            </div>
            <hr />
            <div className='d-flex'>
                <p className='col-md-4'>Product</p>
                <p className='col-md-4'>Price</p>
                <p className='col-md-4'>Total</p>
            </div>
            <hr />

            <div>
                <p className='bg-info'>placeholder</p>
                <p className='bg-info'>placeholder</p>
                <p className='bg-info'>placeholder</p>
            </div>
            <hr />
            <div className='d-flex p-2 align-items-center align-content-around flex-wrap bg-secondary'>
                <div className='col-md-4'>
                    <button className='btn btn-success'>placeholder</button>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-success'>placeholder</button>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-success'>placeholder</button>
                </div>

                <div className='col-md-4'>
                    <button className='btn btn-success'>placeholder</button>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-success'>placeholder</button>
                </div>
                <div className='col-md-4'>
                    <button className='btn btn-success'>placeholder</button>
                </div>
            </div>
        </form>

    )
}

