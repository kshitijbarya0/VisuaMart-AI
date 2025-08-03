import Navbar from "./Navbar"
import Footer from "./footer"
import { useLocation } from "react-router-dom"
import { fetchProducts } from '../../../redux/productsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

export const PaymentOption = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const params = new URLSearchParams(location.search);
    const id = params.get("ProD").toLowerCase();
    const data = useSelector((state) => state.products.items);
    const item = data.filter(data => data.id == id);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch, id])

    return (
        <div>
            <Navbar />

            <div style={{
                paddingTop: '120px',
                padding: '120px 20px 40px 20px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                {item[0] ? (
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '30px',
                        borderRadius: '8px',
                        border: '1px solid #ddd'
                    }}>
                        {/* Product Image */}
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}>
                            <img
                                src={item[0].image}
                                alt={item[0].title}
                                style={{
                                    width: '250px',
                                    height: '250px',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>

                        {/* Product Title */}
                        <h1 style={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#333',
                            marginBottom: '15px',
                            textAlign: 'center'
                        }}>
                            {item[0].title}
                        </h1>

                        {/* Price */}
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '25px'
                        }}>
                            <span style={{
                                fontSize: '28px',
                                fontWeight: 'bold',
                                color: '#007bff'
                            }}>
                                ₹{item[0].price}
                            </span>
                        </div>

                        {/* Size Selection */}
                        <div style={{
                            marginBottom: '25px'
                        }}>
                            <label style={{
                                display: 'block',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#333',
                                marginBottom: '10px'
                            }}>
                                Size:
                            </label>
                            <select style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                backgroundColor: '#fff'
                            }}>
                                <option value="">Select Size</option>
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                            </select>
                        </div>

                        {/* Description */}
                        <div style={{
                            marginBottom: '30px'
                        }}>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#333',
                                marginBottom: '10px'
                            }}>
                                Description:
                            </h3>
                            <p style={{
                                fontSize: '14px',
                                lineHeight: '1.5',
                                color: '#666',
                                margin: '0'
                            }}>
                                {item[0].description}
                            </p>
                        </div>

                        {/* Delivery Address */}
                        <div style={{
                            marginBottom: '30px',
                            padding: '20px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            border: '1px solid #e9ecef'
                        }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#333',
                                marginBottom: '15px'
                            }}>
                                Delivery Address
                            </h3>

                            {/* Address Selection */}
                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '10px' }}>
                                    Select Address
                                </label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        fontSize: '14px',
                                        color: '#333',
                                        padding: '10px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        backgroundColor: '#fff',
                                        cursor: 'pointer'
                                    }}>
                                        <input type="radio" name="address" value="default" defaultChecked style={{ marginRight: '10px', marginTop: '2px' }} />
                                        <div>
                                            <div style={{ fontWeight: '500', marginBottom: '3px' }}>John Doe (Default)</div>
                                            <div style={{ color: '#666', fontSize: '13px' }}>
                                                123 Main Street, Apartment 4B<br />
                                                Bhopal, Madhya Pradesh - 462001<br />
                                                Phone: +91 9876543210
                                            </div>
                                        </div>
                                    </label>

                                    <label style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        fontSize: '14px',
                                        color: '#333',
                                        padding: '10px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        backgroundColor: '#fff',
                                        cursor: 'pointer'
                                    }}>
                                        <input type="radio" name="address" value="new" style={{ marginRight: '10px', marginTop: '2px' }} />
                                        <div style={{ fontWeight: '500' }}>Add New Address</div>
                                    </label>
                                </div>
                            </div>

                            {/* New Address Form (Hidden by default) */}
                            <div id="newAddressForm" style={{ display: 'none', marginTop: '15px', padding: '15px', backgroundColor: '#fff', borderRadius: '4px', border: '1px solid #ddd' }}>
                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                        Full Name
                                    </label>
                                    <input type="text" placeholder="Enter your full name" style={{
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '14px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }} />
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                        Phone Number
                                    </label>
                                    <input type="tel" placeholder="Enter your phone number" style={{
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '14px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }} />
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                        Address
                                    </label>
                                    <textarea placeholder="Enter your complete address" rows="3" style={{
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '14px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box',
                                        resize: 'vertical'
                                    }} />
                                </div>

                                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                                    <div style={{ flex: '1' }}>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                            City
                                        </label>
                                        <input type="text" placeholder="City" style={{
                                            width: '100%',
                                            padding: '10px',
                                            fontSize: '14px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box'
                                        }} />
                                    </div>
                                    <div style={{ flex: '1' }}>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                            PIN Code
                                        </label>
                                        <input type="text" placeholder="PIN Code" style={{
                                            width: '100%',
                                            padding: '10px',
                                            fontSize: '14px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box'
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div style={{
                            marginBottom: '30px',
                            padding: '20px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '4px',
                            border: '1px solid #e9ecef'
                        }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#333',
                                marginBottom: '15px'
                            }}>
                                Payment Details
                            </h3>

                            <div style={{ marginBottom: '15px' }}>
                                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '10px' }}>
                                    Payment Method
                                </label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#333' }}>
                                        <input type="radio" name="payment" value="card" style={{ marginRight: '8px' }} />
                                        Credit/Debit Card
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#333' }}>
                                        <input type="radio" name="payment" value="upi" style={{ marginRight: '8px' }} />
                                        UPI Payment
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#333' }}>
                                        <input type="radio" name="payment" value="cod" style={{ marginRight: '8px' }} />
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>

                            <div id="cardDetails" style={{ display: 'none' }}>
                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                        Card Number
                                    </label>
                                    <input type="text" placeholder="1234 5678 9012 3456" style={{
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '14px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }} />
                                </div>

                                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                                    <div style={{ flex: '1' }}>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                            Expiry Date
                                        </label>
                                        <input type="text" placeholder="MM/YY" style={{
                                            width: '100%',
                                            padding: '10px',
                                            fontSize: '14px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box'
                                        }} />
                                    </div>
                                    <div style={{ flex: '1' }}>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                            CVV
                                        </label>
                                        <input type="text" placeholder="123" style={{
                                            width: '100%',
                                            padding: '10px',
                                            fontSize: '14px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box'
                                        }} />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                        Cardholder Name
                                    </label>
                                    <input type="text" placeholder="Name on card" style={{
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '14px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }} />
                                </div>
                            </div>

                            <div id="upiDetails" style={{ display: 'none' }}>
                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#333', marginBottom: '5px' }}>
                                        UPI ID
                                    </label>
                                    <input type="text" placeholder="yourname@upi" style={{
                                        width: '100%',
                                        padding: '10px',
                                        fontSize: '14px',
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        boxSizing: 'border-box'
                                    }} />
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div style={{
                            marginBottom: '30px',
                            padding: '20px',
                            backgroundColor: '#fff',
                            borderRadius: '4px',
                            border: '1px solid #ddd'
                        }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#333',
                                marginBottom: '15px'
                            }}>
                                Order Summary
                            </h3>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '14px', color: '#666' }}>Product Price:</span>
                                <span style={{ fontSize: '14px', color: '#333' }}>₹{item[0].price}</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '14px', color: '#666' }}>Delivery:</span>
                                <span style={{ fontSize: '14px', color: '#28a745' }}>Free</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <span style={{ fontSize: '14px', color: '#666' }}>Tax:</span>
                                <span style={{ fontSize: '14px', color: '#333' }}>₹{Math.round(item[0].price * 0.18)}</span>
                            </div>

                            <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #eee' }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '16px', fontWeight: '600', color: '#333' }}>Total Amount:</span>
                                <span style={{ fontSize: '16px', fontWeight: '600', color: '#007bff' }}>₹{Math.round(item[0].price * 1.18)}</span>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <button style={{
                            width: '100%',
                            backgroundColor: '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '15px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#0056b3';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#007bff';
                            }}>
                            Place Order
                        </button>

                        <script dangerouslySetInnerHTML={{
                            __html: `
                                document.addEventListener('change', function(e) {
                                    // Handle payment method changes
                                    if (e.target.name === 'payment') {
                                        const cardDetails = document.getElementById('cardDetails');
                                        const upiDetails = document.getElementById('upiDetails');
                                        
                                        // Hide all payment details
                                        cardDetails.style.display = 'none';
                                        upiDetails.style.display = 'none';
                                        
                                        // Show relevant payment details
                                        if (e.target.value === 'card') {
                                            cardDetails.style.display = 'block';
                                        } else if (e.target.value === 'upi') {
                                            upiDetails.style.display = 'block';
                                        }
                                    }
                                    
                                    // Handle address selection changes
                                    if (e.target.name === 'address') {
                                        const newAddressForm = document.getElementById('newAddressForm');
                                        
                                        if (e.target.value === 'new') {
                                            newAddressForm.style.display = 'block';
                                        } else {
                                            newAddressForm.style.display = 'none';
                                        }
                                    }
                                });
                            `
                        }} />
                    </div>
                ) : (
                    <div style={{
                        textAlign: 'center',
                        padding: '50px',
                        color: '#666'
                    }}>
                        <h2>Loading...</h2>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}