import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    //state for user
    const [user, setUser] = React.useState(null)
    return(
        //what we are doing here? we are creating a provider and exporting it 
        //so that other components can access it
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider