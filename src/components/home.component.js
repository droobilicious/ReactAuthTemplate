import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

/* contexts */
import {  AuthContext } from "./../Context.js";

const Home = () => {

  const [authState, setAuthState] = useContext(AuthContext);

  return  (
    <div className="component home" >
      { console.log("Home was rendered with authState:", authState)}
      <div className="componentTitle">Home Component</div>
      <div>Home: authState: { authState ? 'true' : 'false' } </div>
    </div>
    
  )
}

export default Home;