import React, { useState, useEffect } from 'react';
import '../Ebook_carousal/Ebook_carousal.css'
import carImg from '../ebbokpage.png'
import { Link } from 'react-router-dom';

const Ebook_carousal = () => {
    const carData = [
        {
            id: "lastClone",
            img: carImg,
            head: "Get 40% Off On E Books of J.K. Rowling",
            desc: "Explore a diverse range of genres and topics with our extensive collection of Kindle books and eBooks. From bestsellers to hidden gems, we've got something for every reader.",
        },
        {
            id: "",
            img: carImg,
            head: "Get 40% Off On E Books of J.K. Rowling",
            desc: "Explore a diverse range of genres and topics with our extensive collection of Kindle books and eBooks. From bestsellers to hidden gems, we've got something for every reader.",
        },
        {
            id: "",
            img: carImg,
            head: "Get 40% Off On E Books of J.K. Rowling",
            desc: "Explore a diverse range of genres and topics with our extensive collection of Kindle books and eBooks. From bestsellers to hidden gems, we've got something for every reader.",
        },
        {
            id: "firstClone",
            img: carImg,
            head: "Get 40% Off On E Books of J.K. Rowling",
            desc: "Explore a diverse range of genres and topics with our extensive collection of Kindle books and eBooks. From bestsellers to hidden gems, we've got something for every reader.",
        },
    ];
    const [counter, setCounter] = useState(0);
    const [size, setSize] = useState(0);
    const [transition, setTransition] = useState('transform 0.8s ease');
    console.log(counter);
    useEffect(() => {
        const textSlide = document.querySelector('.text-slide');
        const text = textSlide.querySelectorAll('p');

        setSize(text[0].clientWidth);

        const intervalId = setInterval(() => {
            if (counter >= text.length - 1) setCounter(0);

            setTransition('transform 0.8s ease');
            setCounter((prevCounter) => prevCounter + 1);
        }, 30000);

        return () => clearInterval(intervalId);
    }, [counter]);

    const handleTransitionEnd = () => {
        const textSlide = document.querySelector('.text-slide');
        const text = textSlide.querySelectorAll('p');

        if (text[counter].id === 'lastClone') {
            setTransition('none');
            setCounter(text.length - 2);
        }

        if (text[counter].id === 'firstClone') {
            setTransition('none');
            setCounter(text.length - counter);
        }
    };

    const handleNextClick = () => {
        if (counter >= size - 1) return;

        setTransition('transform 0.4s ease');
        setCounter((prevCounter) => prevCounter + 1);
    };

    const handlePrevClick = () => {
        if (counter <= 0) return;

        setTransition('transform 0.4s ease');
        setCounter((prevCounter) => prevCounter - 1);
    };

    return (
        <div className='carousal-main-container'>

            <div className="carousel-container">
                <div
                    className="text-slide"
                    style={{
                        transform: `translateX(-${size * counter}px)`,
                        transition: transition,
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {
                        carData.map((item) => (
                            <p className='carousal-box' style={{ background: '#4D71B7' }} id={`${item.id}`}>
                                <div className="carousal-text-content">
                                    <h2>{item.head}</h2>
                                    <h5>{item.desc}</h5>
                                    <Link className='carousal-link-btn' to="">Get Yours</Link>
                                </div>
                                <div className="Ebook-carousal-img">
                                    <img src={item.img} alt="" />
                                </div>
                            </p>
                        ))
                    }

                </div>
            </div>
            <div className="Ebook-carousal-btn-container">
                <button className="prev-btn" onClick={handlePrevClick}>
                    prev
                </button>
                <button className="next-btn" onClick={handleNextClick}>
                    next
                </button>
            </div>

        </div>
    );
};

export default Ebook_carousal;
