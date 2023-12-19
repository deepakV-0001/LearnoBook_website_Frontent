import React, { useRef } from 'react';
import '../ProductSlider/ProductSlider.css'
import { Link } from 'react-router-dom';

const ProductSlider = ({relatedBookData}) => {
    const sliderContainerRef = useRef(null);

    const goNext = () => {
        sliderContainerRef.current.scrollBy({
            left: sliderContainerRef.current.children[0].clientWidth,
            behavior: 'smooth',
        });
    };

    const goPrevious = () => {
        sliderContainerRef.current.scrollBy({
            left: -sliderContainerRef.current.children[0].clientWidth,
            behavior: 'smooth',
        });
    };

    return (
        <div className="slider-container" ref={sliderContainerRef}>
            {
                relatedBookData.map((item, key) => (
                    <div className="related-book-box" key={key}>
                        <Link to="/ebook-detail"><img src={item.img} alt="" /></Link>
                        <h2>{item.title}</h2>
                        <p>{item.auther}</p>
                        <i>&#9733;&#9733;&#9733;&#9733;&#9733;</i>
                        <b>{item.price || '$0'}</b>
                        <Link className='related-add-to-cart' to="/add-to-cart">Add To Cart</Link>
                    </div>
                ))
            }

            <a className="prev" onClick={goPrevious}>
                ❮
            </a>
            <a className="next" onClick={goNext}>
                ❯
            </a>
        </div>
    );
};

export default ProductSlider;
