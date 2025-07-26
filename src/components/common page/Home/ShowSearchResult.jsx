import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/productsSlice';
import { updateUserCart } from "../../../redux/userCart"
import { message } from 'antd'

function ShowSearchResult() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.items);
    useEffect(() => {
        if (data.length == 0) {
            dispatch(fetchProducts())
        }
    }, [dispatch])
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get("search");
    const res = data.filter(data =>
        data.title.toLowerCase().includes(query.toLowerCase())
    );
    const handleAddToCart = async (item) => {
        try {
            const res = await dispatch(updateUserCart({
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price,
                quantity: 1
            })).unwrap();

            message.success("Successfully added");
        } catch (err) {
            message.error(err || "Something went wrong while adding to cart");
        }

    }
    return <>
        <div className='Showsearch' style={{ marginTop: "100px" }}>
            <Navbar />
            {
                res.length === 0 ? (
                    <h1>Product not found</h1>
                ) : (
                    res.map(item => (
                        <div style={{
                            display: "flex",
                            border: "1px solid #e0e0e0",
                            borderRadius: "8px",
                            padding: "16px",
                            marginLeft: "15rem",
                            margin: "12px 0",
                            backgroundColor: "#fff",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            maxWidth: "900px",
                            fontFamily: "Arial, sans-serif"
                        }}>
                            {/* Product Image */}
                            <div style={{
                                flexShrink: 0,
                                marginRight: "16px"
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        objectFit: "cover",
                                        borderRadius: "4px",
                                        border: "1px solid #f0f0f0"
                                    }}
                                />
                            </div>

                            {/* Product Details */}
                            <div style={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}>
                                {/* Title and Rating */}
                                <div>
                                    <h3 style={{
                                        margin: "0 0 8px 0",
                                        fontSize: "18px",
                                        fontWeight: "500",
                                        color: "#0066c0",
                                        lineHeight: "1.3",
                                        cursor: "pointer"
                                    }}>
                                        {item.title}
                                    </h3>

                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "8px"
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginRight: "8px"
                                        }}>
                                            <span style={{
                                                color: "#ff9900",
                                                fontSize: "14px",
                                                marginRight: "4px"
                                            }}>
                                                {"★".repeat(Math.floor(item.rating.rate))}{"☆".repeat(5 - Math.floor(item.rating.rate))}
                                            </span>
                                            <span style={{
                                                fontSize: "14px",
                                                color: "#0066c0"
                                            }}>
                                                {item.rating.rate}
                                            </span>
                                        </div>
                                        <span style={{
                                            fontSize: "14px",
                                            color: "#565959"
                                        }}>
                                            ({item.rating.count} reviews)
                                        </span>
                                    </div>

                                    <p style={{
                                        margin: "0 0 12px 0",
                                        fontSize: "14px",
                                        color: "#565959",
                                        lineHeight: "1.4",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    }}>
                                        {item.description}
                                    </p>
                                </div>

                                {/* Price and Buttons */}
                                <div>
                                    <div style={{
                                        fontSize: "24px",
                                        fontWeight: "700",
                                        color: "#B12704",
                                        marginBottom: "12px"
                                    }}>
                                        ${item.price}
                                    </div>

                                    <div style={{
                                        display: "flex",
                                        gap: "12px",
                                        flexWrap: "wrap"
                                    }}>
                                        <button
                                            onClick={()=> {handleAddToCart(item)}}
                                            style={{
                                                backgroundColor: "#ff9900",
                                                border: "1px solid #ff9900",
                                                borderRadius: "20px",
                                                padding: "8px 16px",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#000",
                                                cursor: "pointer",
                                                minWidth: "120px",
                                                transition: "all 0.2s"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#e88900";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "#ff9900";
                                            }}
                                        >
                                            Add to Cart
                                        </button>

                                        <button
                                            // onClick={handleBuyNow}
                                            style={{
                                                backgroundColor: "#ff6b35",
                                                border: "1px solid #ff6b35",
                                                borderRadius: "20px",
                                                padding: "8px 16px",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                color: "#fff",
                                                cursor: "pointer",
                                                minWidth: "120px",
                                                transition: "all 0.2s"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#e55a2b";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = "#ff6b35";
                                            }}
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    </>
}

export default ShowSearchResult