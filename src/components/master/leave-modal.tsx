import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'
import { Switch } from 'antd'
import InputArea from '../common/form-fields/input-area'


const LeaveModal = ({ isOpen, onSubmit, onClose }: any) => {
    const [isACtive, setIsActive] = useState(true)
    const handlactiv = () => {
        setIsActive(!isACtive)
    }


    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Leave</h1>
                </div>
                <div>
                    <div className='mb-3'>
                        <Input
                            label={"Code"}
                            isRequired
                            placeholder='Code'
                            type='text'
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            label={"Description"}
                            placeholder='Description' 
                            isRequired
                            type='text'/>
                    </div>
                    <div className='mb-3 flex gap-3'>
                        <Switch onClick={handlactiv} defaultChecked style={{ width: '24px', background: isACtive ? '#03A790' : '#F21E1E' }} />
                        {isACtive ? <div>Active</div> : <div>deactive</div>}
                    </div>
                    <div className='mb-6'>
                        <Input
                            label={"Day Count"}
                            placeholder='Day Count'
                            type='text'
                        />
                    </div>
                    <div className='mb-9 flex gap-3'>
                    <Switch  style={{ background: '#03A790' }} />
                        Paid Leave 
                    </div><div className='mb-9 flex gap-3'>
                        <Switch  style={{ background: '#03A790' }} />
                        Allow Negative Balance
                    </div><div className='mb-9 flex gap-3'>
                    <Switch  style={{ background: '#03A790' }} />
                        Reason Required
                    </div><div className='mb-9 flex gap-3'>
                        <Switch  style={{ background: '#03A790' }} />
                        Attachment Required
                    </div>
                   
                </div>
            </div>
        </Modal>
    )
}

export default LeaveModal
