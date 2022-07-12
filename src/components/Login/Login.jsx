import React, { useState } from 'react';
import "./Login.css";
import Logo from '../../images/logo.png';
import User from '../../data/users.json'
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const data = User

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (e) => {
        setUserName(e.currentTarget.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        let searchUser = data.filter(
            (item) => item.username === userName && item.password === password
        );
        if (searchUser.length > 0) {
            sessionStorage.setItem("user", userName);
            navigate("/home");
        } else {
            window.alert("Enter correct Username Or Password");
        }
    }

    return (
        <div className='login-section'>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src={Logo} alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-bold text-uppercase">Please sign in</h1>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="Username"
                            value={userName}
                            onChange={(e) => usernameHandler(e)} />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => passwordHandler(e)}
                        />
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
