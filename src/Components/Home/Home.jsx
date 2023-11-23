import React from "react";
import Header from '../Home/Header/Header'
import Vision from "./Vision/Vision";
import VideoSection from "./videoSection/VideoSection";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import NoteSection from "./NoteSection/NoteSection";
import Ebook from "./Ebook/Ebook";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
const Home=()=>{
    return(
     <div>
        <Header/>
        <Vision/>
        <VideoSection/>
        <KeyFeatures/>
        <NoteSection/>
        <Ebook/>
        <Testimonials/>
        <Contact/>
     </div>
    )
}
export default Home;