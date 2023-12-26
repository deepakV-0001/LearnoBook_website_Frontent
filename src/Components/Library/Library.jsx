import React from 'react'
import '../Library/Library.css'
import LibraryHeader from './Library_header/Library_header'
import EbookPageSearchFilters from '../EbookPage/EbookPage_SearchFilters/EbookPage_SearchFilters'
import LibraryMiddle from './LibraryMiddle/LibraryMiddle'
import SubjectWise from '../Download/PaperComponent/Exampler/SubjectWise/SubjectWise'
import img1 from '../Assets/Images/lib_img1.png'
import img2 from '../Assets/Images/lib_img2.png'
import img3 from '../Assets/Images/lib_img3.png'
import img4 from '../Assets/Images/lib_img4.png'
import img5 from '../Assets/Images/lib_img5.png'
import science from '../Assets/Images/lib_sc.png'
import social from '../Assets/Images/lib_social.png'
import tec from '../Assets/Images/lib_tec.png'
import med from '../Assets/Images/lib_med.png'
import math from '../Assets/Images/lib_math.png'
import market from '../Assets/Images/lib_market.png'
import art from '../Assets/Images/lib_art.png'
import dm from '../Assets/Images/lib_dm.png'
import LibraryCarousal from './LibraryCarousal/LibraryCarousal'
import ProductSlider from '../BookDetail/ProductSlider/ProductSlider'
import Contact from '../Home/Contact/Contact'

const Library = () => {
    const classData = [
        {
            text: "Science",
            color: science,
        },
        {
            text: "Social",
            color: social,
        },
        {
            text: "Technology",
            color: tec,
        },
        {
            text: "Medicine",
            color: med,
        },
        {
            text: "Mathematics",
            color: math,
        },
        {
            text: "Art",
            color: art,
        },
        {
            text: "Marketing",
            color: market,
        },
        {
            text: "Digital Media",
            color: dm,
        },
    ];
    const relatedBookData = [
        {
            img: img1,
            title: "A kingdom’s Cost",
            auther: "JR Tomin",

        },
        {
            img: img2,
            title: "The Last Hint",
            auther: "Maor Kohn",

        },
        {
            img: img3,
            title: "Communication ",
            auther: "Phil R. Lucky",

        },
        {
            img: img4,
            title: "Lady Tanglewood",
            auther: "Tony Cabell",

        },
        {
            img: img5,
            title: "A Leap Into Dark",
            auther: "Ray Petrolino",

        },
        {
            img: img1,
            title: "A kingdom’s Cost",
            auther: "JR Tomin",

        },
        {
            img: img2,
            title: "The Last Hint",
            auther: "Maor Kohn",

        },
        {
            img: img3,
            title: "Communication ",
            auther: "Phil R. Lucky",

        },
        {
            img: img4,
            title: "Lady Tanglewood",
            auther: "Tony Cabell",

        },
        {
            img: img5,
            title: "A Leap Into Dark",
            auther: "Ray Petrolino",

        },
    ]
    return (
        <div className='library-main-container'>
            <LibraryHeader />
            <EbookPageSearchFilters />
            <div className="library-recomended-section">
                <h2 className='related-head'>Recomended Related Books</h2>
                <ProductSlider relatedBookData={relatedBookData} />
            </div>
            <div className="library-middle-section">
                <LibraryMiddle/>
            </div>
            <div className="library-subject-wise">
                <SubjectWise head={"Academic Journals and Research Papers"} classData={classData} />
            </div>
            <div className="library-carousal-section">
            <LibraryCarousal/>
            </div>
            <Contact/>
           
        </div>
    )
}

export default Library