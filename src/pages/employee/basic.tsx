import React, { useState } from 'react'
import Input from '../../components/common/form-fields/input'
import DatePicker from '../../components/common/form-fields/date-picker'
import Button from '../../components/common/partial/button'

interface BasicProps {
    setTab: React.Dispatch<React.SetStateAction<string>>; // Adjust the type based on your setTab implementation
}
const Basic: React.FC<BasicProps> = ({ setTab }) => {
    const [edit, setEdit] = useState(false)
    return (
        <div className='border rounded-xl mt-6 flex flex-col justify-end items-end'>
            <div className='w-full '>
                <div className='flex justify-between items-center border-b w-full py-[8px]'>
                    <h1 className='text-[#333333] opacity-70 font-bold text-[14px] ml-2'>Basic Info</h1>
                    <div className='mr-2'>
                        {
                            edit ?
                                <Button className="px-[10px] py-[6px] rounded" onClick={
                                    () => {
                                        setEdit(false);
                                    }
                                }
                                    type='outlined' state='primary' >
                                    Save
                                </Button>
                                :
                                <Button className="px-[10px] py-[6px] rounded" onClick={
                                    () => {
                                        setEdit(true);
                                    }
                                }
                                    type='filled' state='primary' >
                                    Edit details
                                </Button>
                        }
                    </div>
                </div>
                <div className='py-6 px-6 grid grid-cols-3 gap-4 w-full'>
                    {
                        edit === true ?
                            <div>
                                <Input
                                    label="First Name"
                                    placeholder="Enter First Name"
                                />
                            </div>
                            :
                            <div className='text-[#333333] opacity-70 font-semibold text-[14px] py-[10px]'>
                                <h1>First Name</h1>
                                {/* <h1>Aditya</h1> */}
                            </div>
                    }
                    {
                        edit === true ?
                            <div>
                                <Input
                                    label="Last Name"
                                    placeholder="Enter Last Name"
                                />
                            </div>
                            :
                            <div className='text-[#333333] opacity-70 font-semibold text-[14px] py-[10px]'>
                                Last Name
                            </div>
                    }

                    {
                        edit === true ?
                            <div>
                                <Input
                                    name={'Email'}
                                    type='email'
                                    label="Email"
                                    placeholder="Enter Email"
                                />
                            </div>
                            :
                            <div className='font-semibold text-[14px] py-[10px] text-[#333333] opacity-70'>
                                <h3 className='text-primary-7'>Email</h3>
                            </div>
                    }
                    {
                        edit === true ?
                            <div>
                                <Input
                                    name={'Mobile Number'}
                                    type='number'
                                    label="Mobile Number"
                                    placeholder="Mobile Number"
                                />
                            </div>
                            :
                            <div className='font-semibold text-[14px] py-[10px] text-[#333333] opacity-70'>
                                <h3 className='text-primary-7'>Mobile Number</h3>
                            </div>

                    }
                    {
                        edit === true ?
                            <div>
                                <Input
                                    label="Department"
                                    type='text'
                                    placeholder='Department'
                                />
                            </div>
                            :
                            <div className='font-semibold text-[14px] py-[10px] text-[#333333] opacity-70'>
                                <h3 className='text-primary-7'>Department</h3>
                            </div>
                    }
                    {
                        edit === true ?
                            <div>
                                <Input
                                    name={'Job Position'}
                                    type='text'
                                    label="Job Position"
                                    placeholder="Job Position"
                                />
                            </div>
                            :
                            <div className='font-semibold text-[14px] py-[10px] text-[#333333] opacity-70'>
                                <h3 className='text-primary-7'>Job Position</h3>
                            </div>
                    }
                    {
                        edit === true ?
                            <div>
                                <DatePicker
                                    label='Date of Birth'
                                />
                            </div>
                            :
                            <div className='font-semibold text-[14px] py-[10px] text-[#333333] opacity-70'>
                                <h3 className='text-primary-7'>Date of Birth</h3>
                            </div>
                    }
                </div>
            </div>
            {/* <Button type='filled' state='primary' onClick={() => { setTab('education') }} className='m-6 px-9 py-3'>Next</Button> */}
        </div>
    )
}

export default Basic
