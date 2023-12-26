import React from 'react'
import SchoolHeader from '../SchoolPage/SchoolHeader/SchoolHeader'
import ExcelSection from './ExcelSection/ExcelSection'
import HelpSection from './HelpSection/HelpSection'
import SchoolBottom from './SchoolBottom/SchoolBottom'
import headImg from '../../Assets/Images/School_header.png'


const SchoolPage = () => {

  return (
    <>
    <SchoolHeader img={headImg} head1={"The Best Way To "}  head2={"Is To Learn With "} highlight1={"Learn ,"} highlight2={"Fun."} desc={" Embark on a seamless educational journey with LearnoBook, your one-stop destination for a revolutionary learning experience."} />
    <ExcelSection/>
    <HelpSection/>
    <SchoolBottom/>
    </>
  )
}

export default SchoolPage