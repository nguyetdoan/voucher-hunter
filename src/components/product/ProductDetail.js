import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Product, setProduct] = useState([]);
    

    useEffect(() => {
        axios.get(`https://voucher-hunter.herokuapp.com/api/product/${id}`)
            .then(res => {
                setProduct(res.data)
                console.log(res)
            })
    }, [])
    return (
        <div className="details-container">
            <div className='details-container-left'>
                {Product.images &&  <img src={Product.images[0]} alt="" />  }
            </div>
            <div className="details-container-right">
                <h1>{Product.name}</h1>
                <h3>{Intl.NumberFormat().format(Product.price)} VND</h3>
                <p>{Product.detail}</p>
                <button className="btn btn-primary"><ShoppingCartOutlined /> Add to cart</button>
                <button className="btn btn-primary" onClick={() => navigate("/")}>
                    Return to home</button>
            </div>
        </div >
    );
};


export default ProductDetail;