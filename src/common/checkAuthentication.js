const checkAuthentication = () => {

    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    if (storedAuthStatus == "true"){
      return true;
    }
  
    return false;
  }
  

  
export default checkAuthentication;


