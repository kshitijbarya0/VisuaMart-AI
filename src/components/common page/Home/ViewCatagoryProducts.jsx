import { useNavigate } from 'react-router-dom';
import SliderBanner from './slider';
function ViewCatagoryProducts() {
    const navigate = useNavigate()
    const categories = [
        {
            id: 1,
            name: "Electronics",
            image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=640&h=480&fit=crop",
        },
        {
            id: 2,
            name: "Men's Clothing",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=640&h=480&fit=crop",
        },
        {
            id: 3,
            name: "Women's Clothing",
            image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=640&h=480&fit=crop",
        },
        {
            id: 4,
            name: "Home & Kitchen",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=640&h=480&fit=crop",
        },
        {
            id: 5,
            name: "Beauty",
            image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=640&h=480&fit=crop",
        },
        {
            id: 6,
            name: "Books",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=640&h=480&fit=crop",
        },
        {
            id: 7,
            name: "Sports",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&h=480&fit=crop",
        },
        {
            id: 8,
            name: "Brands",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=480&fit=crop",
        },
    ];
    return <>
        <div>
            <SliderBanner />
            <div className='viewcatagory-item'>
                {
                    categories.map((item) => (
                        <div key={item.id} className='catagory-item' onClick={() => { navigate(`/viewCatagory-result?catagory=${encodeURIComponent(item.name.trim())}`); }}>
                            <h2>{item.name}</h2>
                            <img src={item.image} alt="categories" />
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}

export default ViewCatagoryProducts