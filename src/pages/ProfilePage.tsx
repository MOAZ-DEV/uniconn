import { useContext, useEffect } from "react";
import { userStates } from "../App";
import "../assets/SCSS/ProfilePage.scss";
import UCsvg from "../assets/SVGs/UNICONN-Logo.svg";
import Phonesvg from "../assets/SVGs/COCO/Line/Call - Calling.svg";
import Emailsvg from "../assets/SVGs/COCO/Line/Message.svg";
import Linksvg from "../assets/SVGs/COCO/Line/Export.svg";
import Plussvg from "../assets/SVGs/COCO/Line/Plus.svg";
import { userStatesInterface } from "../Interfaces";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const
    USD: userStatesInterface = useContext(userStates);


  return <div className="profile-page">
    <nav>
      <a className="logo"><img src={UCsvg} alt="UniConn" /></a>
      <span></span></nav>

    <div className="view">
      <div className="user-hero">
        <img loading="lazy" src={USD.photoURL} alt="" />
        <span className="img-stack"></span>
        <div className="text-wrap">
          <span>{USD.uid}</span>
          <h3>{USD?.displayName}</h3>
          <p>{ }</p>
        </div>
      </div>

      <span className="divider">
        Contact</span>

      <div className="contact-wrap">
        <button>
          <img src={Phonesvg} />
          <span>Phone</span>
        </button>
        <button>
          <img src={Emailsvg} />
          <span>Email</span>
        </button>
      </div>

      <span className="divider">
        <p>Connects & Links</p></span>

      <div className="connects-wrap">
        {[
          { type: "Github", userid: "MOAZ-DEV" },
          { type: "Instagram", userid: "moaazallaelden" },
          { type: "Spotify", userid: "Moaaz" }].map(
            (_c: { type: string; userid: string; }) => {
              return <button className="connection">
                <img loading="lazy" src={`/public/SocialMediaLogosColored/${_c.type}.svg`} alt="" />
                {_c.userid}
                <img className="backset" loading="lazy" src={`/public/SocialMediaLogosColored/${_c.type}.svg`} alt="" />
                <img className="link" loading="lazy" src={Linksvg} alt="" />
              </button>
            })}
        
      </div>
    </div>

  </div>;
}

export default ProfilePage;
/**/