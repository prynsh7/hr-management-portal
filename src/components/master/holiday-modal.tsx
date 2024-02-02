import React from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'
import InputArea from '../common/form-fields/input-area'
import DatePicker from '../common/form-fields/date-picker'

const HolidayModal = ({ isOpen, onSubmit, onClose }: any) => {
    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Holiday</h1>
                </div>
                <div>
                    <div className='mb-3'>
                        <Input
                            placeholder='Title'
                            type='text'
                            isRequired
                            label={"Name"}
                        />
                    </div>
                    <div className='mb-3 flex items-center gap-3 w-full'>
                        <div className='w-full'>
                            <DatePicker
                                label={"From"}
                            />
                        </div>
                        <div className='w-full'>
                            <DatePicker
                                label={"To"}
                            />
                        </div>

                    </div>
                    <div className='mb-3 flex gap-3'>
                    </div>
                    <div className='flex flex-col'>
                        <InputArea
                            label={"Description"}
                            placeholder='Description' />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default HolidayModal
