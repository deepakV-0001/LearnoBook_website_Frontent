import React from "react";
import '../../App.css'
import Header from '../Home/Header/Header'
import Vision from "./Vision/Vision";
import VideoSection from "./videoSection/VideoSection";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import NoteSection from "./NoteSection/NoteSection";
import Ebook from "./Ebook/Ebook";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
const Home = () => {
    return (
        <>
            <Header />
            <div className="vision-section">
                <Vision />
            </div>
            <VideoSection />
            <KeyFeatures />
            <NoteSection />
            <Ebook />
            <div className="testimonial-section">
                <Testimonials />
            </div>
            <Contact />
        </>
    )
}
export default Home;