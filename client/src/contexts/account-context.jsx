import React, { useState } from "react";

const AccountDefaultState = {
  name: "",
  company: "",
  title: "",
  email: "",
  isLoggedIn: false
};

const AccountContext = React.createContext(AccountDefaultState);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState(AccountDefaultState);
  const login = ({ username, password }) => {
    // Do a fetch here
    setAccount({
      name: username,
      company: "ePixelation",
      title: "Senior Director",
      email: "john.smith@email.com",
      image: "https://i.imgur.com/ZloNbMJ.png",
      isLoggedIn: true
    });
  };
  const logout = () => {
    setAccount(AccountDefaultState);
  };

  
  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        login,
        logout
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export { AccountProvider, AccountContext, AccountDefaultState };
