import React from 'react';
import "./Login.css";
import Logo from '../images/logo.png'

const Login = () => {
    return (
        <div className='login-section'>
            <main className="form-signin w-100 m-auto">
                <form>
                    <img className="mb-4" src={Logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-bold text-uppercase">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2022</p>
                </form>
            </main>
        </div>
    )
}

export default Login
