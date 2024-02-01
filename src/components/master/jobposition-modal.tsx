import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'
import { Switch } from 'antd'
import InputArea from '../common/form-fields/input-area'


const JobPositionModal = ({isOpen, onSubmit, onClose}:any) => {
    const [isACtive,setIsActive]=useState(true)
    const handlactiv=()=>{
        setIsActive(!isACtive)
    }


  return (
    <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonTxt='Close' submitButtonText="Save">
        <div>
            <div className='border-b-2 w-full mb-6'>
                <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Job Position</h1>
            </div>
            <div>
                <div className='mb-3'>
                <label className='text-[#333333] opacity-70 font-semibold text-[14px]' htmlFor="">
                    Title <sup className='text-red-500 font-bold'>*</sup>
                </label>
                <Input
                    placeholder='Title'
                    type='text'
                />
                </div>
                <div className='mb-3'>
                <label className='text-[#333333] opacity-70 font-semibold text-[14px]' htmlFor="">
                    Code <sup className='text-red-500 font-bold'>*</sup>
                </label>
                <Input
                    placeholder='Code'
                    type='text'
                />
                </div>
                <div className='mb-3 flex gap-3'>
                <Switch onClick={handlactiv} defaultChecked style={{width:'24px', background:isACtive?'#03A790':'#F21E1E'}}/>
                {isACtive ? <div>Active</div>:<div>deactive</div>}
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

export default JobPositionModal
