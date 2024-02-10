import React, { useState } from 'react';
import EmployeExperienceModal from '../../components/employee/employee-experience-modal';
import { FaPlus } from 'react-icons/fa';
import Button from '../../components/common/partial/button';
import EmployeeCard from '../../components/employee/employee-card';

interface ExperienceProps {
    setTab: React.Dispatch<React.SetStateAction<string>>;
}

const Experience: React.FC<ExperienceProps> = ({ setTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => setIsOpen(false);
    const handleOpenModal = () => setIsOpen(true);

    const experienceData = [
        {
            'Employer': 'Catalysts Reachout',
            'Job Title': 'Frontend Developer',
            'From Date': '20-12-2023',
            'To Date': '12-01-2024',
            'Duration': '4 months'
        },
        {
            'Employer': 'Catalysts Reachout',
            'Job Title': 'Frontend Developer',
            'From Date': '20-12-2023',
            'To Date': '12-01-2024',
            'Duration': '4 months'
        },
        {
            'Employer': 'Catalysts Reachout',
            'Job Title': 'Frontend Developer',
            'From Date': '20-12-2023',
            'To Date': '12-01-2024',
            'Duration': '4 months'
        },
    ];

    return (
        <div >
            <EmployeExperienceModal
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
            {experienceData.map((experience, index) => (
                <div key={index} className='border rounded-xl flex flex-col my-4 justify-end items-end'>
                    <div className='p-4 grid grid-cols-3 w-full'>
                        {Object.entries(experience).map(([key, value]) => (
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

export default Experience;
