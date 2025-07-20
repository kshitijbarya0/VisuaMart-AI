import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCart, Inc_Dec, removeItemFromCart } from "../../../redux/userCart";
import { Button, message } from "antd";

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    useEffect(() => {
        if (cartItems.length === 0) {
            dispatch(fetchUserCart());
        }
    }, [dispatch, cartItems.length]);

    const handleIncrease = (id) => {
        dispatch(Inc_Dec({ id, operand: "Add" }));
    };

    const handleDecrease = (id) => {
        dispatch(Inc_Dec({ id, operand: "Sub" }));
    };

    const handleRemove = (id) => {
        dispatch(removeItemFromCart(id));
        message.success("Successfully removed")
    };

    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    return (
        <>
            <Navbar />
            {
                cartItems.length === 0 ? (<h2 style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>Cart is empty!</h2>) : (
                    <div style={{ padding: "2rem" , marginTop:"40px"}}>
                        <h2 style={{margin:"2px", padding:"2rem 0"}}>Shopping Cart</h2>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    border: "1px solid #e0e0e0",
                                    borderRadius: "8px",
                                    padding: "1rem",
                                    marginBottom: "1rem",
                                    background: "#fff",
                                }}
                            >
                                {/* Left Section */}
                                <div style={{ display: "flex", gap: "1rem" }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{
                                            height: "70px",
                                            width: "90px",
                                            objectFit: "cover",
                                            borderRadius: "5px",
                                        }}
                                    />
                                    <div>
                                        <h4 style={{ margin: 0 }}>{item.title}</h4>
                                        <p style={{ margin: "5px 0" }}>Quantity: {item.quantity}</p>
                                        <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                                            ₹{Number(item.price).toFixed(2)}
                                        </p>
                                        <p style={{ margin: 0 }}>
                                            Total: ₹{(item.quantity * Number(item.price)).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Section */}
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <button
                                        onClick={() => handleDecrease(item.id)}
                                        style={qtyBtnStyle}
                                    >
                                        -
                                    </button>
                                    <span style={{ minWidth: "20px", textAlign: "center" }}>
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => handleIncrease(item.id)}
                                        style={qtyBtnStyle}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        style={removeBtnStyle}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Cart Total */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                textAlign: "left",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                marginTop: "2rem",
                                padding: "1rem",
                                background: "#f8f8f8",
                                borderRadius: "8px",
                            }}
                        >
                            <p>
                                Cart Total: ₹{calculateTotal()}
                            </p>
                            <Button>Checkout</Button>
                        </div>
                    </div>
                )
            }
        </>
    );
}

// Button Styles
const qtyBtnStyle = {
    padding: "5px 10px",
    borderRadius: "50%",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
};

const removeBtnStyle = {
    padding: "5px 10px",
    backgroundColor: "#ffe6e6",
    color: "#cc0000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

export default Cart;
