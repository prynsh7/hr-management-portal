import React from 'react'
import forgotImage from "../../assets/images/forgot.png"
import Input from '../../components/common/form-fields/input'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/partial/button';

type Props = {}

function ForgotPassword({ }: Props) {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center min-h-[100vh]'>
            <div className='grid grid-cols-2 justify-center items-center gap-[90px]'>
                <div className='sm:col-span-1 col-span-2'>
                    <div>
                        <div>
                            <h3 className='text-[40px] font-bold text-[#313131]'>Forgot your password?</h3>
                            <p className='text-[16px] text-[#313131]'>Don’t worry, happens to all of us. Enter your email below to <br />
                                recover your password</p>
                        </div>
                        <div className='mt-[32px]'>
                            <Input
                                isRequired
                                label={"Email"}
                                placeholder='Enter your email'
                                type='email'
                            />
                        </div>
                        <div className='mt-[24px] text-center'>
                            <Button type="filled" state='primary' className='w-full font-semibold'>Submit</Button>
                        </div>
                        <div className="flex items-center mt-[30px]">
                            <hr className="flex-1 border-t-2 border-[#313131] mx-4 opacity-50" />
                            <span className="text-[#313131] opacity-80">Or Login with</span>
                            <hr className="flex-1 border-t-2 border-[#313131] mx-4 opacity-50" />
                        </div>
                        <div className='flex gap-[34px] justify-center items-center mt-[30px]'>
                            <div className='border-[#515DEF] border rounded py-[12px] px-[34px]'><FcGoogle className='text-[20px]' /></div>
                            <div className='border-[#515DEF] border rounded py-[12px] px-[34px]'><FaFacebook className='text-[#515DEF] text-[20px]' /></div>
                            <div className='border-[#515DEF] border rounded py-[12px] px-[34px]'><FaApple className='text-[20px]' /></div>
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

export default ForgotPassword