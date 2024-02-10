import React, { useState } from 'react';
import Modal from '../common/modal/modal';
import Input from '../common/form-fields/input';
import InputArea from '../common/form-fields/input-area';
import { Switch } from 'antd';

const PayrollModal = ({ isOpen, onSubmit, onClose, heading }: any) => {
    const [isActive, setIsActive] = useState(true);
    const [isAmount, setIsAmount] = useState(true);

    const handleActiveToggle = () => {
        setIsActive(!isActive);
    };

    const handleAmountToggle = () => {
        setIsAmount(!isAmount);
    };

    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>{heading}</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <Input
                            label={"Code"}
                            isRequired
                            placeholder='Enter code'
                            type='text'
                        />
                    </div>
                    <div>
                        <InputArea
                            label={"Description"}
                            isRequired
                            placeholder='Enter description'
                            type='text'
                        />
                    </div>
                    <div className='mb-3 flex gap-3'>
                        <Switch onClick={handleActiveToggle} defaultChecked={isActive} style={{ width: '24px', background: isActive ? '#03A790' : '#F21E1E' }} />
                        {isActive ? <div>Active</div> : <div>Deactive</div>}
                    </div>
                    <div>
                        {isAmount ? (
                            <Input
                                label={"Amount"}
                                isRequired
                                placeholder='Enter amount'
                                type='number'
                            />
                        ) : (
                            <Input
                                label={"Percentage"}
                                isRequired
                                placeholder='Enter percentage'
                                type='number'
                            />
                        )}
                    </div>
                    <div className='mb-3 flex gap-3'>
                        <Switch onClick={handleAmountToggle} defaultChecked={isAmount} style={{ width: '24px', background: isAmount ? '#03A790' : '#F21E1E' }} />
                        {isAmount ? <div>Tax</div> : <div>Percentage</div>}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default PayrollModal;
