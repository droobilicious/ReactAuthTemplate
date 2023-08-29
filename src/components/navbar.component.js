/*
Requirements:
- If authenticated then show additional options
- If authentication state changes then remove the options

*/

import { useState, useEffect, useContext   } from 'react';
import { useNavigate, useLocation, Link} from "react-router-dom";

/* contexts */
import { AuthContext } from "./../Context.js";

const NavBar = () => {

  const [authState, setAuthState] = useContext(AuthContext);

  const navigate = useNavigate(); // for redirection (keep with logout function)  

  /* move this to global function */
  const processLogout = () => {
    console.log("processLogout");

    localStorage.removeItem('isAuthenticated');

    //update global state
    let updatedState = {isAuthenticated: false};
    setAuthState(authState => ({...authState, ...updatedState}) );  // partially update global state

    //redirect may need to run after setAuthState
    console.log("Lougout process is redirecting");
    navigate("/login", {
      state: {
        message: 'You Were logged out'
      }      
    });

  }

  return  (
    <div className="component navbar" >
     { console.log("NavBar was rendered with authState:", authState)} 
      <div className="componentTitle">NavBar Component</div>
      <div>NavBar: authState: { authState ? 'true' : 'false' } </div>
      <div><Link to={"/"} >Home</Link></div>
      { !setAuthState ? <div><Link to={"/login"} >Login</Link></div> : null }
     
      { authState ? <div><Link to={"/protected1"} >Protected Page 1</Link></div> : null }
      { authState ? <div><Link to={"/protected2"} >Protected Page 2</Link></div> : null }      
      { authState ? <div> <button onClick={processLogout}>Logout</button></div> : null }      
    </div>
    
  )
}

export default NavBar;