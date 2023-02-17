import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = props => {
    return (
        <div className='content'>
            <h2>Products</h2>
            {props.products.map((item, index)=> 
                <div>
                    <p key={index}>Title: {item.title}, Price: {item.price}, Description: {item.description}</p>
                    <Link to={`/${item._id}`}>Details</Link>
                </div>
            )}
        </div>
    )
}

export default ProductList;