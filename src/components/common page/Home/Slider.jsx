import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const SliderBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };


    const images = [
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200', // Electronics
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200', // Men's Clothing
        'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200', // Women's Clothing
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200', // Home & Kitchen
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200', // Beauty
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200', // Books
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200', // Sports
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200', // Brands
    ];

    return (
        <div className="banner-slider" style={{marginTop:"80px"}}>
            <Slider {...settings} style={{height:"250px", objectFit:"contain"}}>
                {images.map((url, index) => (
                    <div key={index}>
                        <img src={url} alt={`slide-${index}`} className="slider-img" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderBanner;