import React, { useState } from 'react';
import '../LibraryCarousal/LibraryCarousal.css'
import img1 from '../../Assets/Images/car_img1.png'
import img2 from '../../Assets/Images/car_img2.png'
import img3 from '../../Assets/Images/car_img3.png'
import { Link } from 'react-router-dom';


const MusicPlayer = () => {
  const [isBlue, setIsBlue] = useState(false);

  const handleInputChange = () => {
    setIsBlue((prevIsBlue) => !prevIsBlue);
  };

  return (
    <div className={`library-carousal-main-container ${isBlue ? 'blue' : ''}`}>

      <div className="library-carousal-heading">
        <h2>Podcasts</h2>
        <Link>View All</Link>
      </div>
      <input type="radio" name="slider" id="item-1" defaultChecked onChange={handleInputChange} />
      <input type="radio" name="slider" id="item-2" onChange={handleInputChange} />
      <input type="radio" name="slider" id="item-3" onChange={handleInputChange} />

      <div className="cards">
        <label class="card" for="item-1" id="song-1">
          <img className='lib-carousal-img' src={img1} alt="song" />
        </label>
        <label class="card" for="item-2" id="song-2">
          <img className='lib-carousal-img' src={img2} alt="song" />
        </label>
        <label class="card" for="item-3" id="song-3">
          <img className='lib-carousal-img' src={img3} alt="song" />
        </label>
      </div>


    </div>
  );
};

export default MusicPlayer;
