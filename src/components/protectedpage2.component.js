/*
Requirements:
- If not authenticated then redirect to login page with message
- If authentication state changes to false then redirect to login page with message

*/


import { useState, useEffect , createContext, useContext   } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";

import { AppContext } from "../Context.js";

const ProtectedPage = () => {

  const [globalState, setGlobalState] = useContext(AppContext);

  return  (
    <div className="component protected"  >
      { console.log("Protected Page 2 was rendered with globalState:", JSON.stringify(globalState))}
      <div className="componentTitle">Protected Page 2</div>
      <div>Protected: globalState: { JSON.stringify(globalState) } </div>
    </div>
    
  )
}

export default ProtectedPage;