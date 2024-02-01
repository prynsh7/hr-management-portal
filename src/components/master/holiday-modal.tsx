import React from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'
import InputArea from '../common/form-fields/input-area'

const HolidayModal = ({isOpen,onSubmit,onClose}:any) => {
  return (
    <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonTxt='Close' submitButtonText="Save">
    <div>
        <div className='border-b-2 w-full mb-6'>
            <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Holiday</h1>
        </div>
        <div>
            <div className='mb-3'>
            <label className='text-[#333333] opacity-70 font-semibold text-[14px]' htmlFor="">
                Name <sup className='text-red-500 font-bold'>*</sup>
            </label>
            <Input
                placeholder='Title'
                type='text'
            />
            </div>
            <div className='mb-3 flex items-center gap-3 w-full'>
            <div className='w-full'>
            <label className='text-[#333333] opacity-70 font-semibold text-[14px]' htmlFor="">
                From <sup className='text-red-500 font-bold'>*</sup>
            </label>
            <Input
                placeholder='Code'
                type='date'
            />
            </div>
            <div className='w-full'>
            <label className='text-[#333333] opacity-70 font-semibold text-[14px]' htmlFor="">
                To <sup className='text-red-500 font-bold'>*</sup>
            </label>
            <Input
                placeholder='Code'
                type='date'
            />
            </div>
            
            </div>
            <div className='mb-3 flex gap-3'>
            </div>
            <div className='flex flex-col'>
            <label className='text-[#333333] opacity-70 font-semibold text-[14px]' htmlFor="remarks">
                Description
            </label>
            <InputArea placeholder='Description'/>
            </div>
        </div>
    </div>
</Modal>
  )
}

export default HolidayModal
