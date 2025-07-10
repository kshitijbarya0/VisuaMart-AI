import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { User, Mail, Phone, Plus } from "lucide-react";
function Navbar() {
    const [email, setEmail] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [isEditing2, setIsEditing2] = useState(false)
    const [isEditing3, setIsEditing3] = useState(false)


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleCart = () => {

    }
    return (
        <div className='nav-bar'>
            <div>
                <h1><IoStorefrontSharp /></h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <input
                    type="text"
                    placeholder='search store name or product'
                />
                <span style={{ fontSize: "20px", cursor: "pointer" }}><FaSearch /></span>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                <h2 style={{ cursor: "pointer" }} onClick={() => { handleCart() }}><FaShoppingCart /></h2>
                <h2 style={{ cursor: "pointer" }} onClick={showModal}><FaUserCircle /></h2>
            </div>
            <Modal

                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                width={600}
                height={300}
                onCancel={handleCancel}
            >
                <div style={{
                    minHeight: '90vh',
                    padding: '20px 20px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                    <div style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '32px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}>
                        {/* Header */}
                        <h1 style={{
                            fontSize: '24px',
                            fontWeight: '600',
                            color: '#1f2937',
                            marginBottom: '32px',
                            margin: '0 0 32px 0'
                        }}>
                            Profile details
                        </h1>

                        {/* Profile Section */}
                        <div style={{ marginBottom: '40px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px'
                            }}>
                                <span style={{
                                    color: '#374151',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    minWidth: '80px'
                                }}>
                                    Profile
                                </span>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        backgroundColor: '#e5e7eb',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGM0Y0RjYiLz4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyMCIgcj0iOCIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNOCAzNmMwLTggOC04IDE2LThzMTYgMCAxNiA4IiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=")',
                                        backgroundSize: 'cover'
                                    }}>
                                    </div>
                                    <span style={{
                                        color: '#1f2937',
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}>
                                        Kshitij kishore barya
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Email addresses Section */}
                        <div style={{ marginBottom: '40px' }}>
                            <div style={{
                                color: '#374151',
                                fontSize: '16px',
                                fontWeight: '500',
                                marginBottom: '16px'
                            }}>
                                Email addresses
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#1f2937', fontSize: '15px' }}>Kshitijkishore@gmail.com</span>
                                    <span style={{
                                        backgroundColor: '#f3f4f6',
                                        color: '#6b7280',
                                        fontSize: '12px',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontWeight: '500'
                                    }}>
                                        Primary
                                    </span>
                                </div>
                            </div>

                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#374151',
                                fontSize: '15px',
                                fontWeight: '500',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                marginTop: '16px',
                                padding: '8px 0'
                            }}
                                onClick={() => { setEmail(prev = !prev) }}
                            >
                                {isEditing2 ? (
                                    <div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onBlur={() => setIsEditing2(false)}
                                            placeholder="Enter email"
                                        />
                                        add
                                    </div>

                                ) : (
                                    <div style={{ display: "flex", gap: "12px" }} onClick={() => setIsEditing2(true)}>
                                        <Plus size={16} />
                                        <p>Add email address</p>
                                    </div>
                                )}
                            </button>
                        </div>

                        {/* Phone number Section */}
                        <div style={{ marginBottom: '40px' }}>
                            <div style={{
                                color: '#374151',
                                fontSize: '16px',
                                fontWeight: '500',
                                marginBottom: '16px'
                            }}>
                                Address
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <span style={{ color: '#1f2937', fontSize: '15px' }}>Shivaji Colony, 491995</span>
                                <span style={{
                                    backgroundColor: '#f3f4f6',
                                    color: '#6b7280',
                                    fontSize: '12px',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontWeight: '500'
                                }}>
                                    Primary
                                </span>
                            </div>

                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#374151',
                                fontSize: '15px',
                                fontWeight: '500',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '8px 0'
                            }}>
                                {isEditing3 ? (
                                    <div style={{ display: "flex", gap: "5px" }}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setAddress(e.target.value)}
                                            onBlur={() => setIsEditing3(false)}
                                            placeholder="Enter Address with pincode"
                                        />
                                        <div>
                                            <button>add</button>
                                        </div>
                                    </div>

                                ) : (
                                    <div style={{ display: "flex", gap: "12px" }} onClick={() => setIsEditing3(true)}>
                                        <Plus size={16} />
                                        Update address
                                    </div>
                                )}
                            </button>
                        </div>
                        <div style={{ marginBottom: '40px' }}>
                            <div style={{
                                color: '#374151',
                                fontSize: '16px',
                                fontWeight: '500',
                                marginBottom: '16px'
                            }}>
                                Phone number
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                                <span style={{ color: '#1f2937', fontSize: '15px' }}>+91 6262626262</span>
                                <span style={{
                                    backgroundColor: '#f3f4f6',
                                    color: '#6b7280',
                                    fontSize: '12px',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontWeight: '500'
                                }}>
                                    Primary
                                </span>
                            </div>

                            <button style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: '#374151',
                                fontSize: '15px',
                                fontWeight: '500',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '8px 0'
                            }}>
                                {isEditing ? (
                                    <div>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setPhonel(e.target.value)}
                                            onBlur={() => setIsEditing(false)}
                                            placeholder="Enter phone"
                                        />
                                        add
                                    </div>

                                ) : (
                                    <div style={{ display: "flex", gap: "12px" }} onClick={() => setIsEditing(true)}>
                                        <Plus size={16} />
                                        Add phone number
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar