import React, {useState} from 'react';
import classes from "./SignUp.module.css";
import {useDispatch} from "react-redux";
import {getAuth} from 'firebase/auth'
const SignUp = ({title, handleClick}) => {

    const [email, setEmail] = useState('');
    const [pass, setPass]  = useState('')

    return (
        <div className={classes.container}>
            <div className={classes.sign_up}>
                <form>
                    <h1>Create Account</h1>
                    <div className={classes.social_icons}>
                        <a href="#" className={classes.icon}><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className={classes.icon}><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className={classes.icon}><i className="fa-brands fa-github"></i></a>
                        <a href="#" className={classes.icon}><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    {/*<span>or use your email for registeration</span>*/}
                    {/*<input type="text" placeholder="Name"/>*/}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Password"
                    />
                    <button onClick={() => handleClick(email, pass)}>{title}</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
