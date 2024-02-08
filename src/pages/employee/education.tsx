import React, { useState } from 'react';
import Button from '../../components/common/partial/button';
import EmployeEducationModal from '../../components/master/employee-education-modal';
import { FaPlus } from "react-icons/fa";

interface EducationProps {
  setTab: React.Dispatch<React.SetStateAction<string>>; // Adjust the type based on your setTab implementation
}

const Education: React.FC<EducationProps> = ({ setTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const educationData = [
    { universityName: 'Mumbai University', fieldOfStudy: 'Engineering', degree: 'B.Tech' },
    { universityName: 'Delhi University', fieldOfStudy: 'Computer Science', degree: 'B.E.' },
    { universityName: 'Calcutta University', fieldOfStudy: 'Mathematics', degree: 'B.Sc.' }
  ];

  return (
    <div>
      <EmployeEducationModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <div className='flex justify-end'>
        <Button type='filled' state='primary'
          className="px-[10px] py-[6px] rounded"
          onClick={handleOpenModal}
        >
          <FaPlus className='mr-[4px]' />
          Add more
        </Button>
      </div>
      <div className='border px-4 mt-6 rounded-xl shadow-md'>
      {educationData.map((education, index) => (
        <div key={index} className='border rounded-xl my-4 flex flex-col justify-end items-end'>
          <div className='p-4 grid grid-cols-3 w-full'>
            <div className='font-semibold text-[14px] py-[10px]'>
              <h1 className='text-[#333333] opacity-70 '>University Name</h1>
              <h1 className='text-[#333333] opacity-90'>{education.universityName}</h1>
            </div>
            <div className='font-semibold text-[14px] py-[10px]'>
              <h1 className='text-[#333333] opacity-70 '>Field of Study</h1>
              <h1 className='text-[#333333] opacity-90'>{education.fieldOfStudy}</h1>
            </div>
            <div className='font-semibold text-[14px] py-[10px]'>
              <h1 className='text-[#333333] opacity-70 '>Degree</h1>
              <h1 className='text-[#333333] opacity-90'>{education.degree}</h1>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Education;
