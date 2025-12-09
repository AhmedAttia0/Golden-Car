import React, { useContext, createContext, useState, useReducer } from "react";

const UserContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};
export default function UserProvider({ children }) {
  const [user, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("user"))
  );
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  return useContext(UserContext);
}
