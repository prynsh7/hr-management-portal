import React, { useState } from 'react'
import img from '../../assets/images/auth.png'
import Heading from '../../components/common/partial/heading'
import Breadcrumb from '../../components/common/bredcrumb'
import Button from '../../components/common/partial/button'
import { Link, Route, Routes } from 'react-router-dom'
import Basic from './basic'
import Education from './education'
import Experience from './experience'
import Document from './document'

const Employee = () => {
  const breadcrumbItems = ["Home", "Employee", "id"];
    const [tab,setTab]=useState('basic')
    // const changeTab =(e)=>{
    //     setTab(e)
    // }
  return (
    <div>
        <Heading type='h4'>Nitin Singh</Heading>
        <Breadcrumb items={breadcrumbItems} />
      <div className='mt-6 p-6 flex gap-6'>
        {/* image */}
        <div className='p-6 border max-w-[350px] w-full h-full rounded-xl'>
            <img className='w-[300px] object-cover rounded-xl mb-6 h-[300px]' src={img} alt="" />
            <button className='underline mb-9 text-center hover:text-blue-500 w-full'>Change Profile Picture</button>
            <Button
          className="mb-6 w-full"
          state="primary"
        >
           Update Profile</Button>
            <Button type="filled"
          className="w-full"
          state="primary"
        >
           Delete Profile</Button>
        </div>
        {/* detail */}
        <div className='p-6 w-full h-full'>
            <nav className='w-full pb-6 '>
                <ul className='flex gap-12'>
                    <li onClick={()=>{setTab('basic')}} className={`text-[16px] cursor-pointer font-semibold ${tab === 'basic' ? 'nav-link' : 'after:bg-transparent' } `}>
                        Basic
                    </li>
                    <li onClick={()=>{setTab('education')}} className={`text-[16px] cursor-pointer font-semibold ${tab === 'education' ? 'nav-link' : 'after:bg-transparent' } `}>
                        Education
                    </li>
                    <li onClick={()=>{setTab('experience')}} className={`text-[16px] cursor-pointer font-semibold ${tab === 'experience' ? 'nav-link' : 'after:bg-transparent' } `}>
                        Experience
                    </li>
                    <li onClick={()=>{setTab('document')}} className={`text-[16px] cursor-pointer font-semibold ${tab === 'document' ? 'nav-link' : 'after:bg-transparent' } `}>
                        Document
                    </li>
                   
                </ul>
            </nav>
            <div>
            {tab === 'basic' && <Basic setTab={setTab} />}
            {tab === 'education' && <Education setTab={setTab}/>}
            {tab === 'experience' && <Experience setTab={setTab}/>}
            {tab === 'document' && <Document/>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Employee;
