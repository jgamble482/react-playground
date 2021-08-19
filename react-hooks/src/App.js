import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    setIsLoggedIn(true);
    localStorage.setItem("loginState", "true");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("loginState", "false");
  };

  useEffect(() => {
    const loginState = localStorage.getItem("loginState");
    if (loginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
