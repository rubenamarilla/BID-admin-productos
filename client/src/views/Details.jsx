import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    let { id } = useParams("");
    let navigate = useNavigate();
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => setProduct({
                ...res.data
            }))
    })

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                setProduct(product.filter(product => product._id !== productId));
            })
        navigate("/");
    }

    return (
        <div className='content'>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/update/" + product._id}>Edit</Link>
            <button onClick={(e)=>deleteProduct(product._id)}>Delete</button>
            <Link to={"/"}>Home</Link>
        </div>
    )
}
export default Details;