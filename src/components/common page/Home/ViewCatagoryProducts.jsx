import React, { useEffect } from 'react'
import SliderBanner from './slider';
function ViewCatagoryProducts() {
    const categories = [
        {
            id: 1,
            name: "Electronics",
            image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144",
        },
        {
            id: 2,
            name: "Men's Clothing",
            image: "https://images.unsplash.com/photo-1521336575829-6da63fb45455",
        },
        {
            id: 3,
            name: "Women's Clothing",
            image: "https://images.unsplash.com/photo-1520975698519-59e6d8a9f9b6",
        },
        {
            id: 4,
            name: "Home & Kitchen",
            image: "https://images.unsplash.com/photo-1615874959474-d609969a30d6",
        },
        {
            id: 5,
            name: "Beauty",
            image: "https://images.unsplash.com/photo-1600180758890-6d7d6ebf02f2",
        },
        {
            id: 6,
            name: "Books",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
        },
        {
            id: 7,
            name: "Sports",
            image: "",
        },
        {
            id: 8,
            name: "Brands",
            image: "",
        },
    ];
    const handleClicked = (item) => {
        console.log(item.name, item.id)
    }
    return <>
        <div>
            <SliderBanner />
            <div className='viewcatagory-item'>
                {
                    categories.map((item) => (
                        <div key={item.id} className='catagory-item' onClick={() => { handleClicked(item) }}>
                            <h2>{item.name}</h2>
                            <img src="https://placehold.co/250x200" alt="categories" />
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}

export default ViewCatagoryProducts