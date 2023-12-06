import UCsvg from "../assets/SVGs/UNICONN-Logo.svg";
import UCBGsvg from "../assets/SVGs/UC-BG-vector-light.svg";
import Applesvg from "../assets/SVGs/Apple-Dark.svg";
import Googlesvg from "../assets/SVGs/Google.svg";
import '../assets/SCSS/AuthPages.scss';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { AppStatues } from "../App";
import { useGoogleLogin } from '@react-oauth/google';



export const AuthView = () => {

  const GoogleLogin = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });

    const AS = useContext(AppStatues),
        nav = useNavigate();
    useEffect(() => {
        (!AS.state.username) ?
            nav("/") : console.log('nope');
    }, [true])
    return <div className="auth-page">

        <nav>
            <span className="logo"><img src={UCsvg} alt="UniConn" /></span></nav>

        <div className="view">
            <div className="bg-vector-wrap">
                <img src={UCBGsvg} />
            </div>
            <div className="text-wrap">
                <h3>Connect. Share. Amplify.</h3>
                <p> Perfect for business people, developers, designers,
                    and anyone looking to share their links and career-related files.</p>
            </div>
            <div className="auth-wrap">
                <div className="third-party-authers">
                    <button type="button" id="btn-apple">
                        <img src={Googlesvg} />
                        <span>Google</span></button>
                    <button type="button" id="btn-google"
                    onClick={()=> {
                      GoogleLogin();
                          
                    }}>
                        <img src={Applesvg} />
                        <span>Apple</span></button>
                </div>
                <p>Trusted third party Authentication process.</p>
            </div>
        </div>
    </div>;
}, RegisterAuth = () => {

    return <div className="auth-Page">

        <nav>
            <span className="logo"><img src={UCsvg} alt="UniConn" /></span></nav>

        <div className="view">
            <div className="text-wrap">
                <h3>Connect. Share. Amplify.</h3>
                <p> Join our bio link sharing app and
                    unlock your online presence.</p>
            </div>
            <form className="auth-form" onSubmit={() => { }}>
                <input type="text" />
                <input type="email" name="" id="" placeholder="Email" />
                <input type="password" name="" id="" placeholder="Password" />
                <button>Register</button>
            </form>
            <span>
                <p>Already have an account? <a href="/">Log in</a>.</p>
            </span>
        </div>
    </div>;
}
/**
 
moaazallaelden@gmail.com
Password
Log in
Forgot password?
Or
Register
 */