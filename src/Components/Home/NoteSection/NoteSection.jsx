import React from 'react'
import '../NoteSection/NoteSection.css'
import dotimg from './dot-animation.gif'
import anim from './notesAnim.gif'
import backImg from './notesBack.png'


const NoteSection = () => {
  return (
    <div className='notes-main-container'>
       <div className="book-back">
        <img src={anim} alt="" />
        <h2 className='notes-head'>Read, Annotate, and Take Notes on PDF without Hassle</h2>
        
       </div>
       
    </div>
  )
}

export default NoteSection