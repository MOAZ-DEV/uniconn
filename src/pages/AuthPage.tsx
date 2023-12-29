import UCsvg from "../assets/SVGs/UNICONN-Logo.svg";
import UCBGsvg from "../assets/SVGs/UC-BG-vector-light.svg";
import Phonesvg from "../assets/SVGs/COCO/Line/Phone.svg";
import Googlesvg from "../assets/SVGs/Google.svg";
import '../assets/SCSS/AuthPage.scss';

import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../auth/GoogleAuth';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Cookies from "universal-cookie";

export const AuthView = () => {

    const
        [user] = useAuthState(auth),
        cookie = new Cookies(),
        GoogleLogin = async () => {
            try {
                await signInWithPopup(auth, googleProvider);
                cookie.set("userState", user, {});
                nav("/uniconn/profile");
                console.log(user)
            } catch (error) {
                console.error("Error signing in with Google:", error);
            }
        },
        nav = useNavigate();

    return <div className="auth-page">
        <nav>
            <a href="/uniconn/" className="logo"><img src={UCsvg} alt="UniConn" /></a></nav>

        <div className="view">
            <div className="bg-vector-wrap">
                <img src={UCBGsvg} />
            </div>
            <div className="auth-wrap">
                <div className="text-wrap">
                    <h3>Connect. Share. Amplify.</h3>
                    <p> Perfect for business people, developers, designers,
                        and anyone looking to share their links and career-related files.</p>
                </div>
                <div className="third-party-authers">
                    <button type="button" id="btn-apple" onClick={() => GoogleLogin()}>
                        <img src={Googlesvg} />
                        <span>Google</span></button>
                    <button className="add-btn">
                        <img src={Phonesvg} />
                        <span>Phone</span></button>
                </div>
                <p>Trusted third party Authentication process.</p>
            </div>
        </div>
    </div>;
}
