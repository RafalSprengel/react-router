import React from 'react';
import { Prompt } from 'react-router-dom';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import '../css/Contact.css';

const useStyles = makeStyles(theme => ({

    textField: {
        width: '100%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        margin: '20px'
    }


}))

const Contact = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('')
    }

    return (
        <div className='contact'>
            <form onSubmit={handleSubmit} className={classes.form}>
                <h2>Text to us:</h2>
                <TextField
                    className={classes.textField}
                    label="Your message"
                    multiline
                    rows="10"
                    placeholder='tap here your message'
                    variant="outlined"
                    value={value}
                    onChange={handleChange}
                />
                <Button
                    className={classes.button}
                    variant='contained'
                    color='primary'
                    type='submit'
                >Send</Button>
            </form>

            <Prompt
                when={Boolean(value)}
                message="Are you sure you want to leave this page?"
            />
        </div>
    )
}
export default Contact;