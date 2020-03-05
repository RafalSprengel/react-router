import React from 'react';
import LoginForm from '../components/LoginForm';
import { UserContextConsumer } from '../components/contextUser'
import '../css/Admin.css';
const Admin = ({ handleLogin, handleLogout }) => {

    const userPanel = <div>You are logged in.
        <span onClick={handleLogout} id='logout'>Log Out</span> </div>

    return (
        <>
            <UserContextConsumer>
                {({ loggedUser }) => (
                    (loggedUser) ?
                        userPanel :
                        <LoginForm
                            handleLogin={handleLogin}
                            handleLogout={handleLogout}
                        />

                )
                }

            </UserContextConsumer>
        </>
    )
}

export default Admin;