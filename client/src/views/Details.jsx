import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const Details = () => {
    let { id } = useParams("");
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setProduct({
                ...res.data
            }))
    })
    return (
        <div className='content'>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
export default Details;