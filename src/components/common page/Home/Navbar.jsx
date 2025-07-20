import React, { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'antd';
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { Plus } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, updateUser } from "../../../redux/userSlice"
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { email, phone, address } = useSelector((state) => state.user);

    const [newEmail, setNewEmail] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newAddress, setNewAddress] = useState("");

    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);

    const [searchItem, setSearchItem] = useState("")


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);
    return (
        <div className='nav-bar'>
            <div><h1 style={{ cursor: "pointer" }} onClick={() => { navigate("/") }}><IoStorefrontSharp /></h1></div>
            <div>
                <form style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }} onSubmit={(e) => {
                    e.preventDefault();
                    if (searchItem.trim() !== "") {
                        navigate(`/search-result?search=${encodeURIComponent(searchItem.trim())}`);
                        setSearchItem("");
                    }
                }}>
                    <input
                        type="text"
                        placeholder='search store name or product'
                        value={searchItem}
                        onChange={(e) => { setSearchItem(e.target.value) }}
                        required
                    />
                    <span style={{ fontSize: "20px", cursor: "pointer" }} onClick={() => {
                        if (searchItem.trim() !== "") {
                            navigate(`/search-result?search=${encodeURIComponent(searchItem.trim())}`);
                            setSearchItem("");
                        }
                    }}><FaSearch /></span>
                </form>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                <h2 style={{ cursor: "pointer" }} onClick={() => { navigate("/cart") }}><FaShoppingCart /></h2>
                <h2 style={{ cursor: "pointer" }} onClick={showModal}><FaUserCircle /></h2>
            </div>

            <Modal
                closable
                open={isModalOpen}
                onOk={handleOk}
                width={600}
                onCancel={handleCancel}
            >
                <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '32px' }}>Profile details</h1>

                    {/* Email Section */}
                    <div style={{ marginBottom: '24px' }}>
                        <div>Email</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{email}</span>
                            <span style={{ fontSize: '12px', color: 'gray' }}>Primary</span>
                        </div>
                        {isEditingEmail ? (
                            <div style={{ display: "flex", gap: "5px", marginTop: '10px' }}>
                                <Input
                                    style={{ width: '200px' }}
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    placeholder="Enter new email"
                                />
                                <Button onClick={() => {
                                    dispatch(updateUser({ email: newEmail }));
                                    setNewEmail("");
                                    setIsEditingEmail(false);
                                }}>Update</Button>
                            </div>
                        ) : (
                            <div style={{ display: "flex", gap: "10px", cursor: 'pointer', marginTop: '10px' }} onClick={() => setIsEditingEmail(true)}>
                                <Plus size={16} />
                                <p>Update Email</p>
                            </div>
                        )}
                    </div>

                    {/* Address Section */}
                    <div style={{ marginBottom: '24px' }}>
                        <div>Address</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{address}</span>
                            <span style={{ fontSize: '12px', color: 'gray' }}>Primary</span>
                        </div>
                        {isEditingAddress ? (
                            <div style={{ display: "flex", gap: "5px", marginTop: '10px' }}>
                                <Input
                                    style={{ width: '200px' }}
                                    value={newAddress}
                                    onChange={(e) => setNewAddress(e.target.value)}
                                    placeholder="Enter new address"
                                />
                                <Button onClick={() => {
                                    dispatch(updateUser({ address: newAddress }));
                                    setNewAddress("");
                                    setIsEditingAddress(false);
                                }}>Update</Button>
                            </div>
                        ) : (
                            <div style={{ display: "flex", gap: "10px", cursor: 'pointer', marginTop: '10px' }} onClick={() => setIsEditingAddress(true)}>
                                <Plus size={16} />
                                <p>Update Address</p>
                            </div>
                        )}
                    </div>

                    {/* Phone Section */}
                    <div style={{ marginBottom: '24px' }}>
                        <div>Phone</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span>{phone}</span>
                            <span style={{ fontSize: '12px', color: 'gray' }}>Primary</span>
                        </div>
                        {isEditingPhone ? (
                            <div style={{ display: "flex", gap: "5px", marginTop: '10px' }}>
                                <Input
                                    style={{ width: '200px' }}
                                    value={newPhone}
                                    onChange={(e) => setNewPhone(e.target.value)}
                                    placeholder="Enter new phone"
                                />
                                <Button onClick={() => {
                                    dispatch(updateUser({ phone: newPhone }));
                                    setNewPhone("");
                                    setIsEditingPhone(false);
                                }}>Update</Button>
                            </div>
                        ) : (
                            <div style={{ display: "flex", gap: "10px", cursor: 'pointer', marginTop: '10px' }} onClick={() => setIsEditingPhone(true)}>
                                <Plus size={16} />
                                <p>Update Phone</p>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Navbar;
