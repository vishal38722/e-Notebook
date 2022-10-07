import React from 'react'

const Signup = () => {
    const handleClick = () => {

    }

    const handleChange = () => {

    }

  return (
    <div>
      <div className='container my-4'>
                <h3>Create a new account</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Name</label>
                        <input type="text" placeholder='Enter your Name' className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Email</label>
                        <input type="text" placeholder='Enter your email' className="form-control" id="description" name='description' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Password</label>
                        <input type="text" placeholder='Enter your Password' className="form-control" id="tag" name='tag' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Confirm Password</label>
                        <input type="text" placeholder='Confirm your password' className="form-control" id="tag" name='tag' onChange={handleChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Signup</button>
                </form>
            </div>
    </div>
  )
}

export default Signup
