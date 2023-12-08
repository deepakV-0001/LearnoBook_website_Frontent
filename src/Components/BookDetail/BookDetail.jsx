import React from 'react'
import { Link } from 'react-router-dom';
import '../BookDetail/BookDetail.css'
import { ImFileText2 } from "react-icons/im";
import { FaLanguage } from "react-icons/fa6";
import { PiTelegramLogoLight } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import book from './book-detail-img.png'
import rev from './right-img.png'
import RelatedBooks from './RelatedBooks/RelatedBooks';
import Rating from './Rating/Rating';
import dict1 from './RelatedBooks/dict1.png'
import dict2 from './RelatedBooks/dict2.png'
import dict3 from './RelatedBooks/dict3.png'
import dict4 from './RelatedBooks/dict4.png'


const BookDetail = () => {
    const relatedBookData = [
        {
            title: "Oxford English Hindi Dictionary",
            img: dict1,
            auther: "S.K. Verma",
            price: "$7",
        },
        {
            title: "Oxford Essential Dictionary",
            img: dict2,
            auther: "Oxford",
            price: "$11",
        },
        {
            title: "Oxford First Illustrated Dictionary",
            img: dict3,
            auther: "Oxford",
            price: "$20",
        },
        {
            title: "Oxford Illustrated Dictionary",
            img: dict4,
            auther: "Oxford",
            price: "$10",
        },
    ];
    return (
        <div className='book-detail-container'>
            <div className="book-lower-container">
                <div className="book-detail-left">
                    <img src={book} alt="" />
                    <Link>Buy Now To Edit And Make Notes</Link>
                </div>
                <div className="book-detail-right">
                    <div className="book-detail-right-upper">
                        <div className="book-detail-right-heading">
                            <h2>Oxford Dictionary of English Etymology</h2>
                            <p>#1 Bestseller</p>
                        </div>
                        <div className="book-detail-right-review">
                            <span><img src={rev} alt="" /><p>By C.T. Onions</p></span>
                            <i><span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>669 Have read</i>
                        </div>
                        <div className="book-detail-right-btns">
                            <Link className="book-buy-btn">Buy eBook $10</Link>
                            <Link className="add-to-cart" to="/add-to-cart">Add to Cart</Link>
                        </div>
                    </div>
                    <div className="book-detail-right-middle-text">
                        Oxford Dictionary of English The English language is full of words that are beyond our understanding even through we might come across them on a regular basis. In order to deal with them, we bring you the Oxford dictionary of English that will not only help you widen your vocabulary, but also your understanding of the language will be significantly improved. This dictionary has been acclaimed worldwide and can be used for reference. The dictionary uses an easy to understand language. The Oxford Dictionary of English gains its treasure of language source from a language program inclusive of the Oxford English Corpus, which comprises of two billion words. Latest Edition The latest edition comes with updated information and appendices on varied areas like chemical elements and countries. A section on 'Word Trends' has also been included. English is a language that continues to evolve; and this dictionary helps you to keep a track of some of those significant changes. Pronunciation Most of the words we come across in daily life are difficult to pronounce. What is worse is the fact that it is not always possible to find a credible source for pronunciation. The Oxford Dictionary has a feature that allows you to keep a check on your pronunciation with the help of phonetics. These pronunciations follow international norms which are considered as reference standards worldwide. I also helps in improving the language skills further by making use of thesaurus, usage and style help guides for grammar and punctuation and several other such aids. The book is available online for convenient shopping. You can bag this book from A today by following a few easy steps.
                    </div>
                    <div className="book-detail-right-bottom bottom-book">
                        <p>About This Book</p>
                        <div className="book-detail-right-bottom-detail">
                            <li>Print Length <ImFileText2 /> 2112 Pages</li>
                            <li>Language <FaLanguage /> English</li>
                            <li>Publisher <PiTelegramLogoLight /> Oxford</li>
                            <li>Publication Date <IoCalendarOutline /> 12 August 2020</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-book-section">
                <RelatedBooks relatedBookData={relatedBookData} head={'Books related to Oxford Dictionary'}/>
            </div>
            <div className="rating-book-section">
                <Rating/>
            </div>
        </div>
    )
}

export default BookDetail