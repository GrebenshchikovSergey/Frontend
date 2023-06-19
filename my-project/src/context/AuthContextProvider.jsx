import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const AuthContext = createContext("");
const AuthContextProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState(null);
	const value = { userInfo, setUserInfo };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
