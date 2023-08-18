import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

/* contexts */
import {  AppContext } from "./../Context.js";

const Home = () => {

  const [globalState, setGlobalState] = useContext(AppContext);

  return  (
    <div className="component home" >
      { console.log("Home was rendered with globalState:", JSON.stringify(globalState))}
      <div className="componentTitle">Home Component</div>
      <div>Home: globalState: { JSON.stringify(globalState) } </div>
    </div>
    
  )
}

export default Home;