import SignupForm from 'components/Common/SignupForm'
import React from 'react'

export default function signupApi() {
    return (
        <div>
            <h1>Register</h1>
            <SignupForm />
            <p>
                Already have an account? <Link to="/login">Sign in</Link>   
            </p>            
        </div>
    )
}
