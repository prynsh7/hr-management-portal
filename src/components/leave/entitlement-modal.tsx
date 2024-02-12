import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'
import DatePicker from '../common/form-fields/date-picker'
import Select from '../common/form-fields/select'


const EntitlementModal = ({ isOpen, onSubmit, onClose }: any) => {
    const [isActive, setIsActive] = useState(true)
    const handlactive = () => {
        setIsActive(!isActive)
    }


    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save Changes">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Entitlement</h1>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <div>
                        <Input
                            label={"Type"}
                            isRequired
                            placeholder='Type'
                            type='text'
                        />
                    </div>
                    <div>
                        <Input
                            label={"Earning Policy"}
                            isRequired
                            placeholder='Earning Policy'
                            type='text'
                        />
                    </div>
                    <div>
                    <DatePicker
                                label={"Earning Start"}
                                isRequired
                            />
                    </div>
                    <div>
                    <DatePicker
                                label={"Valid Until"}
                                isRequired
                            />
                    </div>
                    <div>
                       <Select
                       
                       /> 
                    </div>
                    <div>
                        <Input
                            label={"Entitled Day"}
                            placeholder='Enter Entitled Day' 
                            isRequired
                            type='text'
                            />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default EntitlementModal
