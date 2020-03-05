import React from 'react';

const UserContext = React.createContext();

const UserContextProvider = ({ loggedUser, children }) => (
    <UserContext.Provider
        value={{
            loggedUser,
        }}
    >
        {children}
    </UserContext.Provider>
)
export const UserContextConsumer = UserContext.Consumer;
export default UserContextProvider