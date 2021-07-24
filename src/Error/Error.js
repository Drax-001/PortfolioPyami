import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
      <div>
        <h1 className="heading">Oops!</h1>
        <p className="error-message">We can't find the page you are lokking for</p>
        <Link to="/" id="back_btn">Back Home</Link>
      </div>
    );
}

export default Error
