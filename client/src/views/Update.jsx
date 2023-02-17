import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Upadate = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    let { id } = useParams("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id).then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        });
    });
    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:8000/api/product/" + id, {
                title,
                price,
                description,
            })
            .then((res) => console.log(res));
    };
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                </p>
                <button type="submit">Update</button>
            </form>
            <Link to={"/"}>Home</Link>
        </div>
    );
};

export default Upadate;
