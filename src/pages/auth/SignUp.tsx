import React from 'react'
import signupImage from "../../assets/images/signup.png"
import Input from '../../components/common/form-fields/input'
import CheckBox from '../../components/common/form-fields/check-box'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

type Props = {}

function SignUp({ }: Props) {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center min-h-[100vh]'>
            <div className='grid grid-cols-2 justify-center items-center'>
                <div className='col-span-1 hidden sm:block'>
                    <div className='flex justify-center items-center'>
                        <img src={signupImage} alt="" className='h-[680px] saturate-150' />
                    </div>
                </div>
                <div className='sm:col-span-1 col-span-2'>
                    <div>
                        <div>
                            <h3 className='text-[40px] font-bold text-[#313131]'>Sign up</h3>
                            <p className='text-[16px] text-[#313131]'>Let’s get you all st up so you can access your personal account.</p>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-[32px]'>
                            <div className='col-span-1'>
                                <label className='text-[#1C1B1F] font-semibold text-[14px]' htmlFor="">
                                    First Name <sup className='text-red-500 font-bold'>*</sup>
                                </label>
                                <Input
                                    placeholder='Enter your first name'
                                    type='text'
                                />
                            </div>
                            <div className='col-span-1'>
                                <label className='text-[#1C1B1F] font-semibold text-[14px]' htmlFor="">
                                    Last Name <sup className='text-red-500 font-bold'>*</sup>
                                </label>
                                <Input
                                    placeholder='Enter your last name'
                                    type='text'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-[12px]'>
                            <div className='col-span-1'>
                                <label className='text-[#1C1B1F] font-semibold text-[14px]' htmlFor="">
                                    Email <sup className='text-red-500 font-bold'>*</sup>
                                </label>
                                <Input
                                    placeholder='Enter your email'
                                    type='email'
                                />
                            </div>
                            <div className='col-span-1'>
                                <label className='text-[#1C1B1F] font-semibold text-[14px]' htmlFor="">
                                    Phone Number <sup className='text-red-500 font-bold'>*</sup>
                                </label>
                                <Input
                                    placeholder='Enter your phone number'
                                    type='number'
                                />
                            </div>
                        </div>
                        <div className='mt-[16px]'>
                            <label className='text-[#1C1B1F] font-semibold text-[14px]' htmlFor="">
                                Password <sup className='text-red-500 font-bold'>*</sup>
                            </label>
                            <Input
                                placeholder='Enter your email'
                                type='password'
                            />
                        </div>
                        <div className='mt-[12px]'>
                            <label className='text-[#1C1B1F] font-semibold text-[14px]' htmlFor="">
                                Confirm Password <sup className='text-red-500 font-bold'>*</sup>
                            </label>
                            <Input
                                placeholder='Enter your password'
                                type='password'
                            />
                        </div>
                        <div className='flex justify-between my-[12px]'>
                            <div className='flex gap-2'>
                                <CheckBox />
                                <p className='text-[14px] text-[#313131] font-medium'>I agree to all the <span className='text-[#FF8682] font-semibold'>Terms</span> and <span className='text-[#FF8682] font-semibold'>Privacy Policies</span></p>
                            </div>
                        </div>
                        <div className='mt-[24px] text-center'>
                            <button className='bg-[#515DEF] w-full py-2 text-[#fff] rounded font-semibold'>Create account</button>
                            <p className='text-[14px] text-[#313131] font-medium mt-[10px]'>Already have an account? 
                            <span className='text-[#FF8682] cursor-pointer ml-[4px]' onClick={() => {navigate('/login')}}>Login</span></p>
                        </div>
                        <div className="flex items-center mt-[30px]">
                            <hr className="flex-1 border-t-2 border-[#313131] mx-4 opacity-50" />
                            <span className="text-[#313131] opacity-80">Or Sign up with</span>
                            <hr className="flex-1 border-t-2 border-[#313131] mx-4 opacity-50" />
                        </div>
                        <div className='flex gap-[34px] justify-center items-center mt-[30px]'>
                            <div className='border-[#515DEF] border rounded py-[12px] px-[34px]'><FcGoogle className='text-[20px]' /></div>
                            <div className='border-[#515DEF] border rounded py-[12px] px-[34px]'><FaFacebook className='text-[#515DEF] text-[20px]' /></div>
                            <div className='border-[#515DEF] border rounded py-[12px] px-[34px]'><FaApple className='text-[20px]' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp