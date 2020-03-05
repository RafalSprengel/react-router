import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    withoutLabel: {
        marginTop: theme.spacing(1),
    },
    textField: {
        width: 250,
        marginTop: 15
    },
    eye: {
        padding: '1px 6px !important',
        border: '0px !important',
        marginTop: '0px !important',
        marginRight: '0px !important',
        '&:hover': {
            backgroundColor: '#838383 !important'
        }
    },
    onFocus: {
        color: 'red',
    }
}));

export default function PasswordField({
    className,
    onChange,
    variant,
    label,
    value,
    error,
    helperText,
    handleInputChange
}) {
    const [showPass, setShowPass] = useState(false);
    const classes = useStyles();

    const handleClickShowPassword = () => {
        setShowPass(!showPass)
    };

    return (
        <FormControl className={`${classes.textField} ${classes.onFocus}`} variant={variant} >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                className={(error) ? `${classes.onFocus}` : null}
                id="outlined-adornment-password"
                type={showPass ? 'text' : 'password'}
                value={value}
                onChange={handleInputChange('pass')}
                label={label}
                error={error}
                autoComplete='current-password'
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            className={classes.eye}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPass ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
            <FormHelperText error={error}
            >
                {helperText}
            </FormHelperText>
        </FormControl >

    );
}
