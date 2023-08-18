/*
Requirements:
- If authenticated then redirect without first  rendering
- If login is succesful then set global context and redirect 
- If a message has been received by the redirecting page then display that message

*/

import { useState, useEffect , useContext   } from 'react';
import { Navigate, useNavigate, useLocation } from "react-router-dom";

/* contexts */
import {  AppContext } from "./../Context.js";


const Login = () => {

  const location = useLocation(); //for reading location info (and message sent by other pages)


  const [globalState, setGlobalState] = useContext(AppContext);
  const [message, setMessage] = useState();  

  // check if the user is authenticated and direct if so
  if (globalState.isAuthenticated) {
    console.log("Login redirecting because authenticated");
    return <Navigate to="/protected1" replace />;
  }

  //if a message has been passed, then update the local message (if it is different)
  if (((location || {}).state || {}).message){ 
      console.log("LoginForm Message:", location.state.message);
      if (message != location.state.message){
        setMessage(location.state.message);
      }
  }


  /*
  useEffect(() => { 
    console.log("Login saw a change in global state. ", JSON.stringify(globalState));
    if (globalState.isAuthenticated)
    {
        console.log("Login saw isAuthenticated become true");
    }
  },[globalState]);*/

  
  const processLogin = () => {
    console.log("processLogin");    

    //record the auth status locally
    localStorage.setItem('isAuthenticated', true );

    let updatedState = {isAuthenticated: true};
    setGlobalState(globalState => ({...globalState, ...updatedState}) );  // partially update global state
    //setGlobalState({isAuthenticated: true, "adifferentproperty": 999}); //completely replace global state in this way

  }


  return  (
    <div className="component login">
      { console.log("Login was rendered with globalState:", JSON.stringify(globalState))}
      <div className="componentTitle">Login Component</div>
      <div>Login: globalState: { JSON.stringify(globalState) } </div>
      { message ? <div className="error">{message}</div> : null }
      <button onClick={processLogin}>Login</button>

    </div>
    
  )
}

export default Login;



/*
useEffect(() => { 

  if (isAuthenticated) { 
    console.log("LoginForm - Redirecting");

    
    navigate("/me/profile", {
      state: {
        message: (message ? message : "You are already logged on")
      }

    }); 
  
  }else{
    console.log("Not redirecting");

  }
 },[isAuthenticated]);
 */