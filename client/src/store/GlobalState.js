import React, {createContext, useReducer} from "react";

import AppReducer from "./AppReducer";

const initialState = {
    username: "",
    password: "",
    user: []
};

//create context
export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider
        value={{
            username:state.username,
            password: state.password
        }}>
            {children}
        </GlobalContext.Provider>
    )
};

