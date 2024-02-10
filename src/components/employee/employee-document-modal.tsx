import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'



const EmployeDocumentModal = ({ isOpen, onSubmit, onClose }: any) => {
    const [isActive, setIsActive] = useState(true)
    const handelactive = () => {
        setIsActive(!isActive)
    }

    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Document</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <Input
                            label={"Document Type"}
                            isRequired
                            placeholder='Document Type'
                            type='text'
                        />
                    </div>
                    <div>
                        <Input
                            label={"Document Id"}
                            isRequired
                            placeholder='Document Id'
                            type='text'
                        />
                    </div>
                    <div>
                        <Input
                            label={"Attachment"}
                            isRequired
                            placeholder='Attachment'
                            type='text'
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default EmployeDocumentModal
