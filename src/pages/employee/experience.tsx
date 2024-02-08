import React, { useState } from 'react';
import EmployeExperienceModal from '../../components/master/employee-exp-modal';
import { FaPlus } from 'react-icons/fa';
import Button from '../../components/common/partial/button';

interface ExperienceProps {
    setTab: React.Dispatch<React.SetStateAction<string>>;
}

const Experience: React.FC<ExperienceProps> = ({ setTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => setIsOpen(false);
    const handleOpenModal = () => setIsOpen(true);

    const experienceData = [
        {
            employer: 'Catalysts Reachout',
            jobTitle: 'Frontend Developer',
            fromDate: '20-12-2023',
            toDate: '12-01-2024',
            duration: '4 months'
        },
        {
            employer: 'XYZ Company',
            jobTitle: 'Backend Developer',
            fromDate: '15-02-2022',
            toDate: '20-11-2022',
            duration: '9 months'
        },
        {
            employer: 'XYZ Company',
            jobTitle: 'Backend Developer',
            fromDate: '15-02-2022',
            toDate: '20-11-2022',
            duration: '9 months'
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
            <div className=' border px-4 mt-6 rounded-xl shadow-md'>
                {experienceData.map((experience, index) => (
                    <div key={index} className='border rounded-xl flex flex-col my-4 justify-end items-end'>
                        <div className='p-4 grid grid-cols-3 w-full'>
                            <div className='font-semibold text-[14px] py-[10px]'>
                                <h1 className='text-[#333333] opacity-70 '>Employer</h1>
                                <h1 className='text-[#333333] opacity-90'>{experience.employer}</h1>
                            </div>
                            <div className='font-semibold text-[14px] py-[10px]'>
                                <h1 className='text-[#333333] opacity-70 '>Job Title</h1>
                                <h1 className='text-[#333333] opacity-90'>{experience.jobTitle}</h1>
                            </div>
                            <div className='font-semibold text-[14px] py-[10px]'>
                                <h1 className='text-[#333333] opacity-70 '>From</h1>
                                <h1 className='text-[#333333] opacity-90'>{experience.fromDate}</h1>
                            </div>
                            <div className='font-semibold text-[14px] py-[10px]'>
                                <h1 className='text-[#333333] opacity-70 '>To</h1>
                                <h1 className='text-[#333333] opacity-90'>{experience.toDate}</h1>
                            </div>
                            <div className='font-semibold text-[14px] py-[10px]'>
                                <h1 className='text-[#333333] opacity-70 '>Duration</h1>
                                <h1 className='text-[#333333] opacity-90'>{experience.duration}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
