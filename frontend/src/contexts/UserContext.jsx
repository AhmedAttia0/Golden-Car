import React, {
  useContext,
  useEffect,
  createContext,
  useState,
  useReducer,
} from "react";
import { resumeSession } from "../api/http";
export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const setUser = (user) => {
    setCurrentUser(user);
  };
  useEffect(() => {
    const checkSession = async () => {
      console.log("Attempting to resume session on app load...");
      const result = await resumeSession();

      if (result.success) {
        // Session resumed: Set user data
        setUser(result.user);
        console.log("Session resumed successfully.");
      } else {
        // Session failed: Ensure user state is null
        setUser(null);
        console.log("No active session found.");
      }
      // Mark loading as complete regardless of success
      setIsLoading(false);
    };

    checkSession();
  }, []);
  return (
    <UserContext.Provider value={{ user: currentUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
