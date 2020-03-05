import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import PasswordField from '../components/PasswordField'
import MyDialog from '../components/MyDialog';
import { UserContextConsumer } from './contextUser';

function PopUpLogin({ handleDialogClose, handleLogin }) {
    const [openPopUpLogin, setOpenPopUpLogin] = useState(true);
    const [errorUserName, setErrorUserName] = useState('');
    const [errorPass, setErrorPass] = useState('')
    const [trySend, setTrySend] = useState(false);
    const [showErrorLoginDialog, setShowErrorLoginDialog] = useState(false);
    const [user, setUser] = useState({
        name: '',
        pass: ''
    });

    const userData = {
        userName: 'Johny',
        pass: 'Cage'
    }
    const useStyles = makeStyles(theme => ({
        textField: { marginTop: '15px', width: 250 },
        button: { margin: '15px 0', textAlign: 'center', display: 'inline' },
        form: { display: 'flex', flexDirection: 'column', margin: '20px 50px', marginTop: 0 },
        formTitle: {
            paddingBottom: 0,
            '& h2': {
                textAlign: 'center'
            }

        }
    }))

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        isPassShort(user.pass)
        if (isUserNameShort(user.name) || isPassShort(user.pass)) { setTrySend(true); return false }
        else {
            if (user.name === userData.userName && user.pass === userData.pass) {
                setUser('');
                setTrySend(false)
                handleLogin(user.name)
            }
            else
                setShowErrorLoginDialog(true)
        }
    }

    const handleDialog = () => {
        setShowErrorLoginDialog(!showErrorLoginDialog)
    }

    const isUserNameShort = (userName) => {
        if (userName.length < 3) {
            setErrorUserName('user name at least 3 chars')
            return true
        } else {
            setErrorUserName('');
            return false
        }
    }

    const isPassShort = (pass) => {
        if (pass.length < 1) {
            setErrorPass('please fill this field')
            return true
        } else {
            setErrorPass('');
            return false
        }
    }

    const handleInputChange = prop => e => {
        e.persist();
        const val = e.target.value
        setUser(prevState => {
            return (
                {
                    ...prevState,
                    [prop]: val
                }
            )
        });
        if (trySend && prop === 'name') isUserNameShort(val);
        if (trySend && prop === 'pass') isPassShort(val);
    };

    return (
        <div>
            <UserContextConsumer>
                {({ loggedUser }) => (
                    <Dialog
                        open={openPopUpLogin && !loggedUser}
                        onExited={handleDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle className={classes.formTitle} id="alert-dialog-title">{"Sign In"}</DialogTitle>
                        <DialogContent>
                            {(showErrorLoginDialog) ? <MyDialog handleDialog={handleDialog} /> : null}
                            <div className={classes.root} >
                                <form onSubmit={handleSubmit} className={classes.form}>
                                    <TextField
                                        className={classes.textField}
                                        onChange={handleInputChange('name')}
                                        variant='outlined'
                                        label='Username'
                                        auto='username'
                                        error={(errorUserName) ? true : false}
                                        helperText={(errorUserName) ? errorUserName : false}
                                    />
                                    <PasswordField
                                        className={classes.textField}
                                        handleInputChange={() => handleInputChange('pass')}
                                        variant='outlined'
                                        label='Password'
                                        error={(errorPass) ? true : false}
                                        helperText={(errorPass) ? errorPass : false}
                                    />
                                    <Button
                                        className={classes.button}
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                    >
                                        Login
                                </Button>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        onClick={() => setOpenPopUpLogin(false)}
                                    >
                                        Cancel
                                </Button>
                                </form>
                            </div>
                        </DialogContent>

                    </Dialog>
                )}

            </UserContextConsumer>
        </div>
    );
}



export default PopUpLogin