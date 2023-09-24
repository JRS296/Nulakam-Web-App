import React from 'react'
import {updateBookAndUserCart} from '../api/post'
import '../components/Categories/CSS/categories.css';
import { useNavigate } from 'react-router-dom';

export default function Book({post}) {
    const navigate = useNavigate();

    if (!post) return null;
    const {title, isbn13, publisher, edition, meta, content, slug, author, tags, number, image} = post;
    const handleCartAndUser = async () => {
        if(!localStorage.getItem("token")) alert("User Not Logged In"); 
        else {
            const val = await updateBookAndUserCart(title);
            // console.log(val);
            navigate('/cart');
        }
    }

    return (
        <div>
            <div className="product-box">
                <div className="container1">
                    <div className="image">
                        <img src={image} alt="Sorry, Product Image Unable" />
                    </div>
                    <div className="card-content">
                        <a title={title}>
                            <div className="wrapper">
                                <div className="title">{title}</div>
                                <div className="sub">
                                    <span className="sub-title">{author}</span>
                                </div>
                                <span className="sub-title-2">No of Copies: {number}</span>
                                <div className="sub-title-2">ISBN: {isbn13}</div>
                                <div className="line"></div>
                                <div className="price">₹{Math.round(isbn13 * Math.floor(Math.random() * 100) / Math.pow(10,12))}</div>
                                <div className="btns-container1">
                                    <button className="btn btn3" title="Add to Cart" onClick={handleCartAndUser}>Add to Cart</button>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}