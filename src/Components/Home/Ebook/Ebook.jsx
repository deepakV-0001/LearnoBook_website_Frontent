import React from 'react'
import '../Ebook/Ebook.css'
import check from './tick.gif'
import dotanim from '../NoteSection/dot-animation.gif'
import EbookMaterial from './EbookMaterial/EbookMaterial'

const Ebook = () => {
    return (
        <div className='ebook-container'>
            <div className="ebook-text-content">
                <img src={check} alt="" />
                <h3>Read and Edit E-Books  </h3>
                <p>Lorem ipsum dolor sit amet consectetur. Aliquet dignissim maecenas fermentum id ipsum neque tincidunt. Enim congue est lobortis massa rhoncus sit pellentesque et blandit. Libero id interdum dolor condimentum.</p>
            </div>
            <div className="dot-img-ebook">
                <img src={dotanim} alt="" />
            </div>
            <div className="ebook-material-section">
                <EbookMaterial/>
            </div>
        </div>
    )
}

export default Ebook