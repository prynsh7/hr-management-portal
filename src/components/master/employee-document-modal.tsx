import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'



const EmployeDocumentModal = ({ isOpen, onSubmit, onClose }: any) => {
    const [isACtive, setIsActive] = useState(true)
    const handlactiv = () => {
        setIsActive(!isACtive)
    }

    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Document</h1>
                </div>
                <div>
                    <div className='mb-3'>
                        <Input
                            label={"Document Type"}
                            isRequired
                            placeholder='Document Type'
                            type='text'
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            label={"Document Id"}
                            isRequired
                            placeholder='Document Id'
                            type='text'
                        />
                    </div>
                    <div className='mb-3'>
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