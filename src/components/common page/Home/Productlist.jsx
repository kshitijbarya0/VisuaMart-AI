import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../redux/productsSlice';
import { updateUserCart } from "../../../redux/userCart"
import { message } from 'antd'
function Productlist() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.items);
    useEffect(() => {
        if (data.length == 0) {
            dispatch(fetchProducts())
        }
    }, [dispatch])
    const handleProductList = (item) => {
        dispatch(updateUserCart({
            id: item.id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: 1
        }));
        message.success("Successfully added")
    }
    return (
        <div className='Product-list'>
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
                            <button className="btn cart" onClick={() => { handleProductList(item) }}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Productlist