import React from 'react'
import '../LibraryMiddle/LibraryMiddle.css'
import img1 from './lib_mid1.png'
import img2 from './lib_mid2.png'
import img3 from './lib_mid3.png'
import img4 from './lib_mid4.png'

const LibraryMiddle = () => {
    return (
        <div className='library-middle-container'>
            <div className="library-middle-images1">
                <div className='library-middle-img lib-mid-img1'>

                    <img src={img1} alt="" />

                    <p>Fiction</p>
                </div>
                <div className='library-middle-img lib-mid-img2'>

                    <img src={img2} alt="" />

                    <p>Non Fiction</p>
                </div>
            </div>
            <div className="library-middle-images1">
                <div className='library-middle-img lib-mid-img2'>

                    <img src={img3} alt="" />

                    <p>Fiction</p>
                </div>
                <div className='library-middle-img lib-mid-img1'>

                    <img src={img4} alt="" />

                    <p>Non Fiction</p>
                </div>
            </div>

        </div>
    )
}

export default LibraryMiddle