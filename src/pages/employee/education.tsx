import React, { useState } from 'react';
import Button from '../../components/common/partial/button';
import EmployeEducationModal from '../../components/employee/employee-education-modal';
import { FaPlus } from "react-icons/fa";
import EmployeeCard from '../../components/employee/employee-card';

interface EducationProps {
  setTab: React.Dispatch<React.SetStateAction<string>>; // Adjust the type based on your setTab implementation
}

const Education: React.FC<EducationProps> = ({ setTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const educationData = [
    { 'University Name': 'Mumbai University', 'Field of Study': 'Engineering', 'degree': 'B.Tech' },
    { 'University Name': 'Mumbai University', 'Field of Study': 'Engineering', 'degree': 'B.Tech' },
    { 'University Name': 'Mumbai University', 'Field of Study': 'Engineering', 'degree': 'B.Tech' },
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
      {educationData.map((education, index) => (
        <div key={index} className='border rounded-xl my-4 flex flex-col justify-end items-end'>
          <div className='p-4 grid grid-cols-3 w-full'>
            {Object.entries(education).map(([key, value]) => (
              <EmployeeCard
                key={key}
                label={key}
                value={value}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
