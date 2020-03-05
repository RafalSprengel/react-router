import React from 'react';
import '../css/Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    return (
        <>
            <h3>Product page: </h3>
            {props.match.params.item}
            <br />
            <Link to='/products'>Back to product list</Link>
        </>
    )
}

export default Product;