import UCsvg from "../assets/SVGs/UNICONN-Logo.svg";
import '../assets/SCSS/RegisterDataPage.scss';
import Cookies from "universal-cookie/es6/Cookies";
import { useEffect } from "react";

export const RegisterData = () => {

    const
        cookie = new Cookies(),
        submitAction = (event) => {event.preventDefault();
            console.log(event);
            cookie.set("userData", {...event, "g":"gg"});
            

        }, prevent = (e)=> {
        } 
        useEffect(()=>{
            let x = cookie.get("userData");
            console.log(x)
        })
    return <div className="register-data-page">

        <nav>
            <a href="/uniconn/" className="logo"><img src={UCsvg} alt="UniConn" /></a></nav>

        <div className="view">
            <div className="text-wrap">
                <p> Provide some details about yourself and any other pertinent indivation.</p>
            </div>
            <form  onSubmit={submitAction} autoComplete="">
                <label htmlFor="Basic">Display details.</label>
                <div className="box pic" onSubmit={() => { }}>
                    <div className="warper">
                        <p>Profile photo</p>
                        <span className="text">Recommended 500 x 650</span>
                        <div className="btns-wrap">
                            <button>Change</button>
                            <button>Remove</button>
                        </div></div>
                    <img src="" alt="" />
                </div>
                <div className="box">
                    <div className="warper">
                        <p>Your info.</p><br />
                        <span className="text">Like in your ID card we recommend.</span>
                        <input type="text" required inputMode="text" placeholder="Example: Moaaz AllaElden" />
                        <span className="text">Header.</span>
                        <input type="text" contextMenu="good bye" inputMode="text" placeholder="Example: Front-end developer" />
                    </div>
                </div>
                <div className="box">
                    <div className="warper">
                        <p>Contact info.</p><br />
                        <span className="text">Country code followed by your number.</span>
                        <input
                            type="number" minLength={11} maxLength={13}
                            inputMode="numeric" datatype="username"
                            required placeholder="+20 100 000 0000" />
                        <span className="text">Email, Private one Recommended.</span>
                        <input type="email" required inputMode="email"
                            placeholder="example@email.com" />
                        <span className="text">Write carefully because it's the only way to get in touch with you.</span>
                    </div>
                </div>
                <div className="box">
                    <div className="warper">
                        <p>Username.</p><br />
                        <span className="text">Will be used in your uniconn link.</span>
                        <input
                            type="text" minLength={8} maxLength={16}
                            inputMode="decimal" datatype="username"
                            required placeholder="Example: uniconn.com/moaazallaelden" />
                    </div>
                </div>
                <div className="submit-wrap">
                    <button type="submit">Save</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
    </div>;
}