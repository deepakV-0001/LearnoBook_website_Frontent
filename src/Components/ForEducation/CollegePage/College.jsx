import React from 'react'
import CollegeHeader from './CollegeHeader/CollegeHeader'
import CollegeHelp from './CollegeHelp/CollegeHelp'
import Journey from './CollegeJourney/Journey'
import CollegeBtm from './CollegeBtm/CollegeBtm'

const College = () => {
  return (
    <>
    <CollegeHeader/>
    <CollegeHelp/>
    <Journey head={'Get LearnoBook For College'}/>
    <CollegeBtm/>
    </>
  )
}

export default College