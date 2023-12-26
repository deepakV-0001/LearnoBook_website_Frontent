import React from 'react'
import '../Ebook_carousal/Ebook_carousal.css'
import Slider from "react-slick";
import carousalImg from '../../Assets/Images/ebbokpage.png'
import { Link } from 'react-router-dom';

const Ebook_carousal = () => {
  const carousalData = [
    {

      image: carousalImg,
      title: "Get 40% Off On E Books of J.K. Rowling",
      desc: "Explore a diverse range of genres and topics with our extensive collection of Kindle books and eBooks. From bestsellers to hidden gems, we've got something for every reader.",
    },
    {

      image: carousalImg,
      title: "Get 40% Off On E Books of J.K. Rowling",
      desc: "Explore a diverse range of genres and topics with our extensive collection of Kindle books and eBooks. From bestsellers to hidden gems, we've got something for every reader.",
    },
    {

      image: carousalImg,
      title: "Get 40% Off On E Books of J.K. Rowling",
      desc: "Explore a diverse range of genres and topics with our extensive collection of Kindle books and eBooks. From bestsellers to hidden gems, we've got something for every reader.",
    },
    {

      image: carousalImg,
      title: "Get 40% Off On E Books of J.K. Rowling",
      desc: "Explore a diverse range of genres and topics with our extensive collection of Kindle books and eBooks. From bestsellers to hidden gems, we've got something for every reader.",
    },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='ebook-carousal-contianer'>
       <Slider {...settings}>
      {
        carousalData.map((item) => (
          <div className="ebook-carousal-contianer-child">
            <div className="ebook-carousal-text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <Link>Get Yours Now</Link>
            </div>
            <div className="ebook-carousal-img">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))
      }
      </Slider>
    </div>
  )
}

export default Ebook_carousal