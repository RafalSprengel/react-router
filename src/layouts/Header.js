import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PopUpLogin from '../components/PopUpLogin'
import '../css/Header.css'
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg'
import siteNotFound from '../images/site-not-found.png';
import { UserContextConsumer } from '../components/contextUser';

const Header = ({ handleLogin }) => {
    const [loginFormPopUp, setloginFormPopUp] = useState(false);
    const handleDialogClose = () => {
        setloginFormPopUp(false)
    }

    return (
        <div>
            <UserContextConsumer>
                {({ loggedUser, handleLogout }) => (
                    <>

                        {loggedUser ?
                            <Button
                                id='log-but'
                                variant="contained"
                                color="primary"
                                endIcon={<ExitToAppIcon />}
                                onClick={() => handleLogout()}
                            >LogOut</Button> :
                            <Button
                                id='log-but'
                                variant="contained"
                                color="primary"
                                startIcon={<PeopleAltIcon />}
                                onClick={() => setloginFormPopUp(!loginFormPopUp)}
                            >Sign-in
                            </Button>

                        }
                    </>
                )}

            </UserContextConsumer>
            {(loginFormPopUp && <PopUpLogin handleDialogClose={handleDialogClose} handleLogin={handleLogin} />)}


            <Switch>
                <Route
                    exact
                    path='/'
                    render={(props) => (<img src={img1} alt='city' />)}
                />
                <Route
                    path='/products'
                    render={(props) => (<img src={img2} alt='city' />)}
                />
                <Route
                    path='/contact'
                    render={(props) => (<img src={img3} alt='city' />)}
                />
                <Route
                    path='/admin'
                    render={(props) => (<img src={img1} alt='city' />)}
                /><Route
                    render={(props) => (<img src={siteNotFound} alt='city' style={{ width: '50%', filter: 'blur(0px)' }} />)}
                />
            </Switch>
        </div>
    )
}
export default Header;