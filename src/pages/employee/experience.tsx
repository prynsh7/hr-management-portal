import React, { useState } from 'react'
import DatePicker from '../../components/common/form-fields/date-picker'
import Input from '../../components/common/form-fields/input'
import Button from '../../components/common/partial/button'
import EmployeExperienceModal from '../../components/master/employee-exp-modal'
import { FaPlus } from 'react-icons/fa'

interface ExperienceProps {
    setTab: React.Dispatch<React.SetStateAction<string>>
}
const Experience: React.FC<ExperienceProps> = ({ setTab }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => setIsOpen(false);
    const handleOpenModal = () => setIsOpen(true);

    return (
        <div className='border rounded-xl mt-6 flex flex-col justify-end items-end'>
            <EmployeExperienceModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                onSubmit={handleCloseModal}
            />
            <div className='w-full '>
                <div className='flex justify-between items-center border-b w-full py-[8px]'>
                    <h1 className='text-[#333333] opacity-70 font-bold text-[14px] ml-2'>Experience</h1>
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
                        <h1 className='text-[#333333] opacity-70 '>Employer</h1>
                        <h1 className='text-[#333333] opacity-90'>Catalysts Reachout</h1>
                    </div>
                    <div className='font-semibold text-[14px] py-[10px]'>
                        <h1 className='text-[#333333] opacity-70 '>Job Title</h1>
                        <h1 className='text-[#333333] opacity-90'>Frontend Developer</h1>
                    </div>
                    <div className='font-semibold text-[14px] py-[10px]'>
                        <h1 className='text-[#333333] opacity-70 '>From</h1>
                        <h1 className='text-[#333333] opacity-90'>20-12-2023</h1>
                    </div>
                    <div className='font-semibold text-[14px] py-[10px]'>
                        <h1 className='text-[#333333] opacity-70 '>To</h1>
                        <h1 className='text-[#333333] opacity-90'>12-01-2024</h1>
                    </div>
                    <div className='font-semibold text-[14px] py-[10px]'>
                        <h1 className='text-[#333333] opacity-70 '>Duration</h1>
                        <h1 className='text-[#333333] opacity-90'>4 months</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
