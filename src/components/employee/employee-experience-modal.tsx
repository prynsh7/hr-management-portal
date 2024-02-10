import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'
import DatePicker from '../common/form-fields/date-picker'



const EmployeExperienceModal = ({ isOpen, onSubmit, onClose }: any) => {
    const [isActive, setIsActive] = useState(true)
    const handlactive = () => {
        setIsActive(!isActive)
    }

    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Experience</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <Input
                            label={"Employer"}
                            isRequired
                            placeholder='Employer'
                            type='text'
                        />
                    </div>
                    <div>
                        <Input
                            label={"Job Title"}
                            isRequired
                            placeholder='Job Title'
                            type='text'
                        />
                    </div>
                    <div>
                        <DatePicker
                            label={"From"}
                        />
                    </div>
                    <div>
                        <DatePicker
                            label={"To"}
                        />
                    </div>
                    <div>
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
