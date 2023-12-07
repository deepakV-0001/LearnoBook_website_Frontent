import React from 'react'
import Paper from '../../Papers/Paper/Paper'
import neet from '../neet.png'

const Neet = () => {
  const text=["NEET Free PDF Download","Easy To Edit and Access"];
  return (
    <>
   <Paper head="NEET Papers" text={text} img={neet} desc="The National Eligibility cum Entrance Test (NEET) is a crucial examination in India for aspiring medical and dental students. Instituted by the National Testing Agency (NTA), NEET serves as the sole entrance examination for undergraduate programs such as MBBS and BDS in various medical and dental colleges across the country. The exam aims to standardize the admission process and ensure fairness in selecting candidates based on merit.
NEET evaluates candidates' knowledge in subjects like Physics, Chemistry, and Biology, including Zoology and Botany. The syllabus is aligned with the curriculum of classes 11 and 12, covering a comprehensive range of topics. Aspirants must demonstrate proficiency in these subjects to secure admission to prestigious medical institutions."/>
    </>
  )
}

export default Neet