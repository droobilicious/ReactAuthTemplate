/*
  Template for using a global text for authentication

  1. create a context
  2. set that context from the App component
  3. scope that context to child components
  4. make that context visible to child components
  5. update child components based on the global state (navbar)
  5. allow the context to be set from a child component
  6. add routing to App to allow page transitions
  7. store login state in local storage (obviously just for testing, you wouldnt just have a locally stored variable for this)
  8. load stored auth state on app load
  9. login page redirects after login without first rerendering
  10. login page redirects if the login page is visited and the user is already logged in 
  11. create a protected page (protectedpage1) - this protected page doesnt check auth status on loading, just reads the global status
  12. protected page container - container checks real auth status
  13. login page displays a message if there is one



  - If app is loaded at the  /login entry point then auth is checked by the App component and if authed the user is redirected.
  - if app is loaded at a protected page then the "Protected Route Denied" message is displayed
  - What if authentication expires during usage.  i.e. how often is check auth run if the app isnt reloaded?   - could make each protected page run the function
  - protected page needs to check auth each time one is loaded.
  - need to move logout to global logic
  - needs to proactively time out when session has expired

*/

import React, { useState, useEffect   } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

/* components */
import Home from './components/home.component';
import NavBar from './components/navbar.component';
import Login from './components/login.component';
import ProtectedPage1 from './components/protectedpage1.component';
import ProtectedPage2 from './components/protectedpage2.component';
import PageNotFound from './components/pagenotfound.component';
import AccessDenied from './components/accessdenied.component';

/* container for protected pages */
import ProtectedRouteWrapper from './common/ProtectedRouteWrapper';

/* other functions */
import checkAuthentication from './common/checkAuthentication';

/* contexts */
import { AppContext } from "./Context.js";

/* style */
import './App.css';


function App() {

  console.log("App about to run checkAuthentication");
  const [globalState, setGlobalState] = useState({isAuthenticated : checkAuthentication(), anotherProperty: '123'});

  const toggleIsAuthorized = () => {
    let updatedState = {};
    updatedState = {isAuthenticated: !globalState.isAuthenticated};
    setGlobalState(globalState => ({...globalState, ...updatedState }) );   
  }

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <div className="App">
        { console.log("App was rendered with globalState:", JSON.stringify(globalState))}
        <div className="componentTitle">App Component</div>
        
        <div>App: globalState: { JSON.stringify(globalState) } </div>

        <button onClick={toggleIsAuthorized}>toggle isAuthorized</button>
        <br />
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected1" element={<ProtectedPage1 />} />

          <Route path="protected2" element={
            <ProtectedRouteWrapper>
              <ProtectedPage2 />
            </ProtectedRouteWrapper>
          }/>

          <Route path="/noaccess" element={<AccessDenied />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

