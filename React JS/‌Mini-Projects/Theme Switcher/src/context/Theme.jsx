import { createContext, useContext } from "react";


//create context with default values 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

//create provider for context 
export const ThemeProvider = ThemeContext.Provider


//create custom hook for context 
export default function useTheme(){
    return useContext(ThemeContext)
}