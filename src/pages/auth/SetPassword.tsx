import React from 'react'
import forgotImage from "../../assets/images/forgot.png"
import Input from '../../components/common/form-fields/input'
import { useNavigate } from 'react-router-dom';

type Props = {}

function SetPassword({ }: Props) {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center min-h-[100vh]'>
            <div className='grid grid-cols-2 justify-center items-center gap-[90px]'>
                <div className='sm:col-span-1 col-span-2'>
                    <div>
                        <div>
                            <h3 className='text-[40px] font-bold text-[#313131]'>Set a password</h3>
                            <p className='text-[16px] text-[#313131]'>Your previous password has been reseted. Please set a <br /> new password for your account.</p>
                        </div>
                        <div className='mt-[32px]'>
                            <label className='text-[#1C1B1F] font-semibold text-[14px]' htmlFor="">
                                Create Password
                            </label>
                            <Input
                                placeholder='Enter your new password'
                                type='password'
                            />
                        </div>
                        <div className='mt-[16px]'>
                            <label className='text-[#1C1B1F] font-semibold text-[14px]' htmlFor="">
                                Re-enter Password
                            </label>
                            <Input
                                placeholder='Re-enter your new password'
                                type='password'
                            />
                        </div>
                        <div className='mt-[24px] text-center'>
                            <button className='bg-[#515DEF] w-full py-2 text-[#fff] rounded font-semibold'>Set password</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 hidden sm:block'>
                    <div>
                        <img src={forgotImage} alt="" className='h-[620px] saturate-150' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetPassword