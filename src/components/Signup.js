import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

function Signup() {
    let navigate = useNavigate ();

    const [credentials, setCredentials] = useState({name:"",email:"", password:"", cpassword:""});
    
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API Call
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            navigate("/login")   
        }
    }

  return (
    <div>
      <div className='container my-4'>
                <h3>Create a new account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" placeholder='Enter your Name' className="form-control" id="name" name='name' required aria-describedby="emailHelp" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" placeholder='Enter your email' className="form-control" id="email" name='email' required onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder='Enter your Password' className="form-control" id="password" name='password' required minLength={5} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" placeholder='Confirm your password' className="form-control" id="cpassword" name='cpassword' required minLength={5} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
    </div>
  )
}

export default Signup
