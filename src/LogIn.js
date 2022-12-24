import React from 'react'
import './LogIn.css'
const LogIn = () => {
  return (
    <div className='bg-dark'>
    <div className='container '>
        <div className='row'>
            <div className='col-md-6 offset-md-4 bordered round shadow p-4 mt-3'>
                <div>
                    <h2 className='text-white'>Log In</h2>
                    <form className='form-group row mb-3 bg-secondary'>
                        <input
                        type= 'text'
                        className='form-control m-3 p-2'
                        name = 'username'
                        value  
                        placeholder = "username"
                        />
                        <input
                        type= 'text'
                        className='form-control m-3 p-2'
                        name = 'password'
                        value  
                        placeholder = 'password'
                        />
                        <p className='text-white'>
                            Forget your Account?

                        </p>

                        <button className='btn btn-secondary text-white '>Log In</button>
                        <p className='text-white'>Remeber Me</p>
                        <button className='btn btn-success W-70'>Log with google</button>


                    </form>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default LogIn
