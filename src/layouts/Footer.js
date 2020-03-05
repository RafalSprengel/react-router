import React from 'react';
import '../css/Footer.css'
import { Route } from 'react-router-dom';

const Foot = (props) => {
    return (
        <>
            <br />
            you are in: {props.match.url}
        </>
    )
}

const Footer = () => {
    return (
        <>
            <footer>
                <Route exact path='/' component={() => <div style={{ color: 'white' }}>This website has been made just for training purpose by Rafal Sprengel</div>} />
            </footer>
            <Foot />
        </>
    )
}
export default Footer;