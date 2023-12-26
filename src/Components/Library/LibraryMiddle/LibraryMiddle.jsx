import React from 'react'
import '../LibraryMiddle/LibraryMiddle.css'
import img1 from '../../Assets/Images/lib_mid1.png'
import img2 from '../../Assets/Images/lib_mid2.png'
import img3 from '../../Assets/Images/lib_mid3.png'
import img4 from '../../Assets/Images/lib_mid4.png'

const LibraryMiddle = () => {
    const middleLibraryData = [
        {
            img: img1,
            text: "Fiction",
            class: "lib-mid-img1",
        },
        {
            img: img2,
            text: "Non Fiction",
            class: "lib-mid-img2",
        },
        {
            img: img3,
            text: "Kids",
            class: "lib-mid-img2",
        },
        {
            img: img4,
            text: "Journals",
            class: "lib-mid-img1",
        },
    ]

    return (
        <div className='library-middle-container'>
            <div className="library-middle-images1">
                {
                    middleLibraryData.map((item) => (
                        <div className={`library-middle-img ${item.class}`} >
                            <img src={item.img} alt="" />
                            <p>{item.text}</p>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default LibraryMiddle