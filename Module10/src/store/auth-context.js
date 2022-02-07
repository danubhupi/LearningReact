// import { useState } from "react/cjs/react.production.min";
import React, {useState ,useEffect} from "react";

const AuthContext=React.createContext({
    isLoggedIn:false,
    onLogin:()=>{},
    onLogout:()=>{}
});

export const AuthContextProvider=(props)=>{
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem("isLoggedIn");
    if (userStatus == 1) {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways.set
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };


    return (<AuthContext.Provider value={{isLoggedIn:isLoggedIn,
        onLogin:loginHandler,
        onLogout:logoutHandler}}>
            {props.children}
    </AuthContext.Provider>);
}

export default AuthContext;