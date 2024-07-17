import SigninForm from 'components/Common/SigninForm'
import React from 'react'

export default function signinApi() {
    return (
        <div>
            <h1>Login</h1>
            <SigninForm />
            <p>
                Or <Link to="/register">register</Link>
            </p>
        </div>
    )
}
