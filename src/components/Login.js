import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

function Login() {
    let navigate = useNavigate ();

    const [credentials, setCredentials] = useState({email:"", password:""});
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");
    
    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
        // setEmail(...email, [e.target.name], e.target.value);
        // setPassword(...password, [e.target.name], e.target.value);
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email:credentials.email, password:credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            navigate("/")   
        }
        console.log(credentials.email, "  ", credentials.password);
    }


    return (
        <div>
            <div className='container my-4'>
                <h3>Login to your account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" placeholder='Enter your email' className="form-control" value={credentials.email} id="email" name='email' aria-describedby="emailHelp" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder='Enter your password' className="form-control" value={credentials.password} id="password" name='password' onChange={handleChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
