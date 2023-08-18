

const ProtectedRouteWarning = () => {

    return (
        <div className="component protectedroutewarning" >
          <div className="componentTitle">Protected Route Denied</div>
          You tried to access a protected route but you are not signed in.
      </div>
    );
  }
   
  export default ProtectedRouteWarning;