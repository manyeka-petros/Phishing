import React from 'react'

const LogIn = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 bordered round shadow p-4 mt-3'>
                <div>
                    <h2>Log In</h2>
                    <form className='form-group row mb-3'>
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


                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default LogIn
