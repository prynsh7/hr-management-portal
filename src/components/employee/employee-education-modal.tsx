import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'



const EmployeEducationModal = ({ isOpen, onSubmit, onClose }: any) => {
    const [isActive, setIsActive] = useState(true)
    const handelactive = () => {
        setIsActive(!isActive)
    }

    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Education</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <Input
                            label={"University Name"}
                            isRequired
                            placeholder='University Name'
                            type='text'
                        />
                    </div>
                    <div>
                        <Input
                            label={"Field of Study"}
                            isRequired
                            placeholder='Field of Study'
                            type='text'
                        />
                    </div>
                    <div>
                        <Input
                            label={"Degree"}
                            isRequired
                            placeholder='Degree'
                            type='text'
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default EmployeEducationModal
