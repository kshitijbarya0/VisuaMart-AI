import React, { useEffect, useState } from 'react'
import SliderBanner from './slider';
import axios from 'axios';
function Productlist() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
        setData(res.data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='Product-list'>
            <SliderBanner />
            <div className="product-container">
                {data.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>

                        <div className="price-rating">
                            <span className="price">${item.price}</span>
                            <span className="rating">⭐ {item.rating.rate} ({item.rating.count})</span>
                        </div>

                        <p className="product-description">{item.description}</p>

                        <div className="button-group">
                            <button className="btn buy">Buy Now</button>
                            <button className="btn cart">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Productlist