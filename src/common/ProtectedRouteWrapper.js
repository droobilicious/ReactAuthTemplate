import { useContext } from 'react';
import { Navigate } from "react-router-dom";

/* contexts */
import { AuthContext } from "../Context.js";

/* functions */
import checkAuthentication from './checkAuthentication';



const ProtectedRouteContainer = ({test,children}) => {
    
    console.log("ProtectedRouteContainer is initializing")

    const [authState, setAuthState] = useContext(AuthContext);

    // redirect if not authenticated
    if (!authState) {
        console.log("ProtectedRouteContainer redirecting because not authenticated");
        return <Navigate to="/noaccess" replace />;
      }

    /*
     If the local check for auth returned false then propagate this to the rest of the app.  
     This component will then rerender (because there was a change in global state) and
     this will cause the redirect above to be triggered
    */
    
    if (!checkAuthentication() ){
        setAuthState( false ); 
        return null;
    }

    return children;

};



export default ProtectedRouteContainer;
