import React, { createContext, useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { writeBatch, doc } from "firebase/firestore";
import { db } from './FirestoreDB';
import { userStatesInterface } from './Interfaces';


export const
  userStates = createContext(null);

const App: React.FC = () => {
  const
    nav = useNavigate(),
    cookie = new Cookies();
  let
    userStateHolder = cookie.get("userState");
    const
    USD: userStatesInterface = useContext(userStates);

  useEffect(() => {
    console.log(USD);
    console.log(window.location.pathname);
   (!(USD?.uid) && window.location.pathname.includes("/uniconn/profile"))? nav('/uniconn/auth/') : null;
   (USD?.uid && window.location.pathname.includes("/uniconn/auth"))? nav('/uniconn/profile/') : null;
  })
  useEffect(() => {
    (userStateHolder) ?
       () => {
        nav('/uniconn/profile');
        // Get a new write batch
        const batch = writeBatch(db);

        // Set the value of 'NYC'
        const nycRef = doc(db, "cities", "NYC");
        batch.set(nycRef, { name: "New York City" });

         batch.commit();
        console.log("ayy")
      } :
      () => {
        cookie.remove("userState");
        nav('/uniconn/auth');
      console.log("ayy")
      }
  })

  return <userStates.Provider value={{ ...userStateHolder }}>
    <Outlet />
  </userStates.Provider>;

}

export default App;
