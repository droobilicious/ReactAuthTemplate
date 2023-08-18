/*
Requirements:
- If not authenticated then redirect to login page with message
- If authentication state changes to false then redirect to login page with message

*/


import React, { useState, useEffect, useContext   } from 'react';
import { useNavigate, useLocation, Navigate } from "react-router-dom";

/* contexts */
import { AppContext } from "../Context.js";

/* functions */
import checkAuthentication from './../common/checkAuthentication';



const ProtectedPage = () => {
  console.log("ProtectedPage is initializing");

  const [globalState, setGlobalState] = useContext(AppContext);

  //check the global authentication status
  if (!globalState.isAuthenticated) {
    console.log("Protected page redirecting because not authenticated");
    return <Navigate to="/noaccess" replace />;
  }

  /*
    check real auth status and update global status if it's negative.
    the global state update will force a rerender of this component which wiill then redirect 
    due to the above.
  */
  if (!checkAuthentication()){
    console.log("ProtectedRouteContainer setting Global State")
    let updatedState = {isAuthenticated: false};
    setGlobalState(globalState => ({...globalState, ...updatedState}) );  // partially update global state

    return null;

  }

  return  (
    <div className="component protected"  >
      { console.log("Protected was rendered with globalState:", JSON.stringify(globalState))}
      <div className="componentTitle">Protected Page 1</div>
      <div>Protected: globalState: { JSON.stringify(globalState) } </div>
    </div>
    
  )
}

export default ProtectedPage;