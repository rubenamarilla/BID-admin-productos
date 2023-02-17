import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Product } from '../components/Product'
import ProductList from '../components/ProductList';
import "./Main.css"



const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/product")
        .then((response) => {
            setProducts(response.data);
            setLoaded(true);
        })
        .catch((error) => console.log(error));
    }, [])
    return (
        <div className='Main'>
            <Product />
            <hr/>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}
export default Main;