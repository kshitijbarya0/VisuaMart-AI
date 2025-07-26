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
    const handleProductList = async (item) => {
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