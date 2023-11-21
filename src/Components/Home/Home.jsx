import React from "react";
import Header from '../Home/Header/Header'
import Vision from "./Vision/Vision";
import VideoSection from "./videoSection/VideoSection";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import NoteSection from "./NoteSection/NoteSection";
const Home=()=>{
    return(
     <div>
        <Header/>
        <Vision/>
        <VideoSection/>
        <KeyFeatures/>
        <NoteSection/>
     </div>
    )
}
export default Home;