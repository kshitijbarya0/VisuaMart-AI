import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e5e7eb',
            padding: '30px 20px',
            marginTop: '40px'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                {/* Main Content */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: '30px',
                    marginBottom: '25px'
                }}>
                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '16px',
                            color: '#111827',
                            marginBottom: '15px',
                            margin: '0 0 15px 0'
                        }}>
                            Quick Links
                        </h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}>
                            {['About', 'Contact', 'Privacy', 'Terms'].map((link) => (
                                <a key={link} href="#" style={{
                                    color: '#6b7280',
                                    textDecoration: 'none',
                                    fontSize: '14px'
                                }}>
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 style={{
                            fontSize: '16px',
                            color: '#111827',
                            marginBottom: '15px',
                            margin: '0 0 15px 0'
                        }}>
                            Categories
                        </h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        }}>
                            {['Electronics', 'Clothing', 'Home', 'Beauty'].map((category) => (
                                <a key={category} href="#" style={{
                                    color: '#6b7280',
                                    textDecoration: 'none',
                                    fontSize: '14px'
                                }}>
                                    {category}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{
                            fontSize: '16px',
                            color: '#111827',
                            marginBottom: '15px',
                            margin: '0 0 15px 0'
                        }}>
                            Contact
                        </h4>
                        <div style={{
                            color: '#6b7280',
                            fontSize: '14px',
                            lineHeight: '1.5'
                        }}>
                            <div>Email: VisuaMart@gmail.com</div>
                            <div>Phone: (+91) 6263879502</div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div style={{
                    borderTop: '1px solid #e5e7eb',
                    paddingTop: '20px',
                    color: '#6b7280',
                    fontSize: '14px'
                }}>
                    © 2025 VisuaMart. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;