import React, { useState } from 'react';
import Modal from '../common/modal/modal';
import Input from '../common/form-fields/input';
import InputArea from '../common/form-fields/input-area';
import { Switch } from 'antd';
import DatePicker from '../common/form-fields/date-picker';
import Select from '../common/form-fields/select';

const SalaryAdjustmentModal = ({ isOpen, onSubmit, onClose, heading }: any) => {


    return (
        <Modal  width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>{heading}</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <DatePicker
                            label={"Effective Date"}
                            placeholder='Select date'
                            isRequired
                        />
                    </div>
                    <div>
                        <Input
                            label={"Basic Salary"}
                            placeholder='Enter basic salary'
                            isRequired
                        />
                    </div>
                    <div>
                        <InputArea
                            label={"Remarks"}
                            placeholder='Enter remarks'
                        />
                    </div>
                    <div>
                        <Select
                            label={"Earnings"}
                            placeholder='Enter earnings'
                        />
                    </div>
                    <div>
                        <Select
                            label={"Deductions"}
                            placeholder='Enter deductions'
                        />
                    </div>
                    <div>
                        <Select
                            label={"Bonus"}
                            placeholder='Enter bonus'
                        />
                    </div>
                    <div>
                        <Select
                            label={"Saturatory Contribution"}
                            placeholder='Enter staturatory contribution'
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SalaryAdjustmentModal;
