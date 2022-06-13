import React from 'react';
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {
    const navigate = useNavigate();
    return (
        <div className="checkout_container">
            <div className="checkout-left">
                <h1>Checkout</h1>
                <div className='checkout-left_content'>
                    <h1><b>1. CUSTOMER INFORMATION</b></h1>
                    <p>Khai Nguyen</p>
                    <p>11/2/2/5 thien phuoc</p>
                    <p>tan binh</p>
                    <p>tphcm</p>
                    <p>vietnam</p>
                    <p>0345 554 458</p>
                </div>
                <div className='checkout-left_content'>
                    <h1><b>2. PAYMENT METHOD</b></h1>
                    <div className="content-infor">
                        <h2><b>Card infomation</b></h2>
                        <p>Khai Nguyen</p>
                        <p>Card ending in 1111</p>
                        <p>Expires 10/2022</p>
                    </div>
                </div>
                <div className='checkout-left_content'>
                    <h1><b>3. CONTACT INFORMATION</b></h1>
                    <p>khai.nguyen99@gmail.com</p>
                </div>
                <div className="checkout-left_container">
                    <button className="btt-left active-color">Place order</button>
                    <button className="btt-left no-color" onClick={() => navigate("/")} >Back to shipping</button>
                </div>
            </div>
            <div className="checkout-right">
                <div className="checkout-right_top">
                    <h1>Order summary</h1>
                    <p>Subtotal:  $300</p>
                    <p>Estimated shipping:  Free</p>
                    <p>Estimated tax:  $25</p>
                    <p>Order total:  $325</p>
                    <p>Amount due: $415</p>
                    <button className="btt-left active-color">Place order</button>
                    <button className="btt-left no-color" onClick={() => navigate("/")}>Back to shipping</button>
                </div>
                <div className="checkout-right_bottom">
                    <h5>Shipping ( 1 item )</h5>
                    <div>
                        <img alt="this is product img"></img>
                        <h1>Vourcher 1</h1>
                        <p>Price: $300</p>
                        <p>Quantity: 1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;