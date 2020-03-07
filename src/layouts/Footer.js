import React from 'react';
import '../css/Footer.css'
import { Route } from 'react-router-dom';

const Foot = ({ routeProps }) => {
    console.log('props:');
    console.log(routeProps)
    return (
        <span style={{ color: 'white' }}>
            you are in: <strong>{routeProps.match.params.page}</strong>
        </span>
    )
}

const Footer = () => {
    return (
        <>
            <footer>
                <Route exact path='/' component={(props) =>
                    <div style={{ color: 'white' }}>
                        This website has been made just for training purpose by Rafal Sprengel
                    </div>} />

                <Route path="/:page" component={(props) => <Foot routeProps={props} />} />
            </footer>

        </>
    )
}
export default Footer;