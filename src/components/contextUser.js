import React from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ loggedUser, handleLogout, children }) => (
    <UserContext.Provider
        value={{
            loggedUser,
            handleLogout
        }}
    >
        {children}
    </UserContext.Provider>
)
export const UserContextConsumer = UserContext.Consumer;
export default UserContextProvider