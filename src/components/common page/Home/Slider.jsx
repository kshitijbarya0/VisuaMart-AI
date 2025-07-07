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
        'https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?q=80&w=1200',
        'https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?q=80&w=1200',
        'https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?q=80&w=1200',
        'https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?q=80&w=1200',
        'https://plus.unsplash.com/premium_photo-1671469876887-b2733ac9c785?q=80&w=1200',

    ];

    return (
        <div className="banner-slider">
            <Slider {...settings}>
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