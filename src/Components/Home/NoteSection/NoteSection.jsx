import React from 'react'
import '../NoteSection/NoteSection.css'
import anim from '../../Assets/Images/notesAnim.gif'
import Records from './Records/Records'

const NoteSection = () => {
    return (
        <div className='notes-main-container'>
            <div className="notes-header">
                <div className="book-back">
                    <img src={anim} alt="" />
                    <h2 className='notes-head'>Read, Annotate, and Take Notes on PDF without Hassle</h2>
                </div>
               
            </div>
            <div className="notes-boxes">
                <div className="notes-box"></div>
            </div>
            <div className="record-section">
                <Records/>
            </div>
        </div>
    )
}

export default NoteSection