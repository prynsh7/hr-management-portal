import React, { useState } from 'react'
import Input from '../../components/common/form-fields/input'
import DatePicker from '../../components/common/form-fields/date-picker'
import Button from '../../components/common/partial/button'
import EditButton from '../../components/common/edit-button/edit-button';

interface BasicProps {
    setTab: React.Dispatch<React.SetStateAction<string>>;
}
const Basic: React.FC<BasicProps> = ({ setTab }) => {
    const [edit, setEdit] = useState(false)

    return (
        <div>
            <div className='flex justify-end mr-2'>
                <EditButton edit={edit} setEdit={setEdit} />
            </div>
            <div className=' border p-4 mt-6 rounded-xl shadow-md'>
                <div className='border rounded-xl  flex flex-col justify-end items-end'>
                    <div className='w-full '>
                        <div className='p-4 grid grid-cols-3 w-full'>
                            {
                                edit === true ?
                                    <div>
                                        <Input
                                            label="First Name"
                                            placeholder="Enter First Name"
                                        />
                                    </div>
                                    :
                                    <div className='font-semibold text-[14px] py-[10px]'>
                                        <h1 className='text-[#333333] opacity-70 '>First Name</h1>
                                        <h1 className='text-[#333333] opacity-90'>Aditya</h1>
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
                                    <div className='font-semibold text-[14px] py-[10px]'>
                                        <h1 className='text-[#333333] opacity-70'>Last Name</h1>
                                        <h1 className='text-[#333333] opacity-90'>Anand</h1>
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
                                    <div className='font-semibold text-[14px] py-[10px]'>
                                        <h1 className='text-[#333333] opacity-70'>Email</h1>
                                        <h1 className='text-[#333333] opacity-90'>adityaanand1245@gmail.com</h1>
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
                                    <div className='font-semibold text-[14px] py-[10px]'>
                                        <h1 className='text-[#333333] opacity-70'>Mobile Number</h1>
                                        <h1 className='text-[#333333] opacity-90'>8651439657</h1>
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
                                    <div className='font-semibold text-[14px] py-[10px]'>
                                        <h1 className='text-[#333333] opacity-70'>Department</h1>
                                        <h1 className='text-[#333333] opacity-90'>ECE</h1>
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
                                    <div className='font-semibold text-[14px] py-[10px]'>
                                        <h3 className='text-[#333333] opacity-70'>Job Position</h3>
                                        <h3 className='text-[#333333] opacity-90'>Frontend Developer</h3>
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
                                    <div className='font-semibold text-[14px] py-[10px]'>
                                        <h1 className='text-[#333333] opacity-70'>Date of Birth</h1>
                                        <h1 className='text-[#333333] opacity-90'>19-12-2002</h1>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basic
