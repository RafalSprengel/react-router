import React from 'react';
import { Link } from 'react-router-dom';

const data = ["car", "bike", "motorcycle"];

const ProductsList = () => {
    const productsList = data.map(prod => (
        <li key={prod}>
            <Link to={'/products/' + prod} >{prod}</Link>
        </li>
    ))

    return (
        <>
            <ul id='product-list'>
                {productsList}
            </ul>
        </>
    )
}

export default ProductsList;