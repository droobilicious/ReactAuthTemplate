/*
Requirements:
- If not authenticated then redirect to login page with message
- If authentication state changes to false then redirect to login page with message

*/

import React, { useState, useEffect, useContext   } from 'react';
import { useNavigate, useLocation, Navigate } from "react-router-dom";

/* contexts */
import { AuthContext } from "../Context.js";


const ProtectedPage = () => {

  const [authState, setAuthState] = useContext(AuthContext);

  return  (
    <div className="component protected"  >
      { console.log("Protected Page 2 was rendered with authState:", authState)}
      <div className="componentTitle">Protected Page 2</div>
      <div>Protected: authState: { authState ? 'true' : 'false' } </div>
    </div>
    
  )
}

export default ProtectedPage;