import React from 'react';
import '../css/Footer.css'
import { Route } from 'react-router-dom';

const Foot = (props) => {
    return (
        <>
            jesteśmy w : {props.match.url}<br />
            scieżka: {props.match.url}
        </>
    )
}
const Footer = () => {
    return (
        <footer>
            <Route exact path='/' component={() => <div>You are on main page</div>} />
            <Route exact path='/:el1/' component={Foot} />
            <Route exact path='/:el1/:el2' component={Foot} />
            <Route exact path='/:el1/:el2/:el3' component={Foot} />
        </footer>
    )
}
export default Footer;