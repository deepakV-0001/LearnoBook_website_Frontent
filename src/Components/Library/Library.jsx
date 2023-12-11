import React from 'react'
import '../Library/Library.css'
import Library_header from './Library_header/Library_header'
import EbookPage_SearchFilters from '../EbookPage/EbookPage_SearchFilters/EbookPage_SearchFilters'
import RelatedBooks from '../BookDetail/RelatedBooks/RelatedBooks'
import LibraryMiddle from './LibraryMiddle/LibraryMiddle'
import SubjectWise from '../Download/PaperComponent/Exampler/SubjectWise/SubjectWise'
import img1 from './lib_img1.png'
import img2 from './lib_img2.png'
import img3 from './lib_img3.png'
import img4 from './lib_img4.png'
import img5 from './lib_img5.png'

const Library = () => {
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
    ]
    return (
        <div className='library-main-container'>
            <Library_header />
            <EbookPage_SearchFilters />
            <div className="library-recomended-section">
                <RelatedBooks head={"Recommended Reads"} relatedBookData={relatedBookData} />
            </div>
            <div className="library-middle-section">
               {/* <LibraryMiddle/> */}
            </div>

        </div>
    )
}

export default Library