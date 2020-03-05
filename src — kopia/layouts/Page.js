import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductsList from '../pages/ProductsList';
import Contact from '../pages/Contact';
import '../css/Page.css'


const Page = ({ handleLogin, handleLogout }) => {
    return (
        <>

            <Switch>
                <Route path='/' exact component={Home} />
                <Route exact path='/products' component={ProductsList} />
                <Route path='/products/:item' component={Product} />
                <Route path='/contact' component={Contact} />
                <Route render={() => ('Nie ma takiej strony')} />
            </Switch>
        </>
    )
}
export default Page;