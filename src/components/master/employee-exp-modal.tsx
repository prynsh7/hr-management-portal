import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'
import DatePicker from '../common/form-fields/date-picker'



const EmployeExperienceModal = ({ isOpen, onSubmit, onClose }: any) => {
    const [isACtive, setIsActive] = useState(true)
    const handlactiv = () => {
        setIsActive(!isACtive)
    }

    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Experience</h1>
                </div>
                <div>
                    <div className='mb-3'>
                        <Input
                            label={"Employer"}
                            isRequired
                            placeholder='Employer'
                            type='text'
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            label={"Job Title"}
                            isRequired
                            placeholder='Job Title'
                            type='text'
                        />
                    </div>
                    <div className='mb-3'>
                        <DatePicker
                            label={"From"}
                        />
                    </div>
                    <div className='mb-3'>
                        <DatePicker
                            label={"To"}
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            label={"Duration"}
                            isRequired
                            placeholder='Duration'
                            type='text'
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default EmployeExperienceModal
