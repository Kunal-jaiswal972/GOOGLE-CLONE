import { createContext, useState } from "react";

export const DarkThemeContext = createContext({});

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toogleDarkTheme = () =>{
    setDarkTheme(!darkTheme);
  }
  return (
    <DarkThemeContext.Provider
      value={{ darkTheme, toogleDarkTheme }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};
