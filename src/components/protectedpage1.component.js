/*
Requirements:
- If not authenticated then redirect to login page with message
- If authentication state changes to false then redirect to login page with message

*/


import React, { useState, useEffect, useContext   } from 'react';
import { useNavigate, useLocation, Navigate } from "react-router-dom";

/* contexts */
import { AuthContext } from "../Context.js";

/* functions */
import checkAuthentication from './../common/checkAuthentication';



const ProtectedPage = () => {
  console.log("ProtectedPage is initializing");

  const [authState, setAuthState] = useContext(AuthContext);

  //check the global authentication status
  if (!authState) {
    console.log("Protected page redirecting because not authenticated");
    return <Navigate to="/noaccess" replace />;
  }

  /*
    check real auth status and update global status if it's negative.
    the global state update will force a rerender of this component which wiill then redirect 
    due to the above.
  */
  if (!checkAuthentication()){

    setAuthState( false );  // partially update global state

    return null;

  }

  return  (
    <div className="component protected"  >
      { console.log("Protected was rendered with authState:", authState)}
      <div className="componentTitle">Protected Page 1</div>
      <div>Protected: authState: { authState ? 'true' : 'false' } </div>
    </div>
    
  )
}

export default ProtectedPage;