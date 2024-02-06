import React, { useState } from 'react'
import Input from '../../components/common/form-fields/input'
import Button from '../../components/common/partial/button';
import EmployeEducation from '../../components/master/employee-education-modal';
import EmployeEducationModal from '../../components/master/employee-education-modal';
import { FaPlus } from "react-icons/fa";

interface EducationProps {
  setTab: React.Dispatch<React.SetStateAction<string>>; // Adjust the type based on your setTab implementation
}
const Education: React.FC<EducationProps> = ({ setTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);


  return (
    <div className='border rounded-xl mt-6 flex flex-col justify-end items-end'>
      <EmployeEducationModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <div className='w-full '>
        <div className='flex justify-between items-center border-b w-full py-[8px]'>
          <h1 className='text-[#333333] opacity-70 font-bold text-[14px] ml-2'>Education</h1>
          <div className='mr-2'>
            <Button type='filled' state='primary'
              className="px-[10px] py-[6px] rounded"
              onClick={handleOpenModal}
            >
              <FaPlus className='mr-[4px]' />
              Add more
            </Button>
          </div>
        </div>
        <div className='py-6 px-6 grid grid-cols-3 gap-4 w-full'>
          <div className='font-semibold text-[14px] py-[10px]'>
            <h1 className='text-[#333333] opacity-70 '>University Name</h1>
            <h1 className='text-[#333333] opacity-90'>Mumbai University</h1>
          </div>
          <div className='font-semibold text-[14px] py-[10px]'>
            <h1 className='text-[#333333] opacity-70 '>Field of Study</h1>
            <h1 className='text-[#333333] opacity-90'>Engineering</h1>
          </div>
          <div className='font-semibold text-[14px] py-[10px]'>
            <h1 className='text-[#333333] opacity-70 '>Degree</h1>
            <h1 className='text-[#333333] opacity-90'>B.Tech</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
