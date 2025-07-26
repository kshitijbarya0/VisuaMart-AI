import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatagory } from '../../../redux/CatagoryProduct';

function ViewSelectedProduct() {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get("catagory").toLowerCase();
    const data = useSelector((state) => state.Catagory.items);

    useEffect(() => {
        if (data.length == 0) {
            dispatch(fetchCatagory({ query }))
        }
    }, [dispatch])
    console.log(data)

    return <>
        <div className='ViewSelectedProduct' style={{ marginTop: "90px" }}>
            <Navbar />
            {data.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.image} alt={item.title} width="100" />
                    <p>₹{item.price}</p>
                </div>
            ))}
        </div>
    </>
}

export default ViewSelectedProduct