import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatagory } from '../../../redux/CatagoryProduct';
import { updateUserCart } from "../../../redux/userCart"
function ViewSelectedProduct() {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get("catagory").toLowerCase();
    const data = useSelector((state) => state.Catagory.items);

    useEffect(() => {
        dispatch(fetchCatagory({ query }))
    }, [dispatch, query])
    const [addtocart, setAddtocart] = useState({})
    const handleProductList = async (item) => {
        try {
            const res = await dispatch(updateUserCart({
                id: item.id,
                title: item.title,
                image: item.image,
                price: item.price,
                quantity: 1
            })).unwrap();
            setAddtocart((prev) => ({
                ...prev,
                [item.id]: true
            }));
            setTimeout(() => {
                setAddtocart((prev) => ({
                    ...prev,
                    [item.id]: false
                }));
            }, 2000);
            // message.success("Successfully added");
        } catch (err) {
            // message.error(err || "Something went wrong while adding to cart");
            alert(err)
        }

    }
    return <>
        <div className='ViewSelectedProduct' style={{ marginTop: "90px" }}>
            <Navbar />
            <div style={{ display: 'grid', gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", padding: "10px" }}>
                {data.map(item => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>

                        <div className="price-rating">
                            <span className="price">₹{item.price}</span>
                            <span className="rating">⭐ {item.rating.rate} ({item.rating.count})</span>
                        </div>

                        <p className="product-description">{item.description}</p>
                        {
                            addtocart[item.id] && (
                                <p style={{ color: "green", font: "message-box", fontSize: "14px", marginBottom: "5px" }}>
                                    ✅ Added to cart
                                </p>
                            )
                        }
                        <div className="button-group">
                            <button className="btn buy">Buy Now</button>
                            <button className="btn cart" onClick={() => { handleProductList(item) }}>Add to Cart</button>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    </>
}

export default ViewSelectedProduct