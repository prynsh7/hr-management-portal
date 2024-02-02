import React from 'react'
import loginImage from "../../assets/images/login.png"
import Input from '../../components/common/form-fields/input'
import CheckBox from '../../components/common/form-fields/check-box'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/partial/button';

type Props = {}

function Login({ }: Props) {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center min-h-[100vh]'>
            <div className='grid grid-cols-2 justify-center items-center gap-[90px]'>
                <div className='sm:col-span-1 col-span-2'>
                    <div>
                        <div>
                            <h3 className='text-[40px] font-bold text-[#313131]'>Login</h3>
                            <p className='text-[16px] text-[#313131]'>Login to access your account</p>
                        </div>
                        <div className='mt-[32px]'>
                            <Input
                                isRequired
                                label={"Email"}
                                placeholder='Enter your email'
                                type='text'
                            />
                        </div>
                        <div className='mt-[16px]'>
                            <Input
                                isRequired
                                label={"Password"}
                                placeholder='Enter your password'
                                type='text'
                            />
                        </div>
                        <div className='flex justify-between my-[12px]'>
                            <div className='flex gap-2'>
                                <CheckBox />
                                <p className='text-[14px] text-[#313131] font-medium'>Remember me</p>
                            </div>
                            <div>
                                <p className='cursor-pointer text-[14px] text-[#FF8682] font-medium' onClick={() => { navigate('/forgotpassword') }}>Forgot Password</p>
                            </div>
                        </div>
                        <div className='mt-[24px] text-center'>
                            <Button type="filled" state='primary' className='w-full font-semibold'>Login</Button>
                            <p className='text-[14px] text-[#313131] font-medium mt-[10px]'>Don’t have an account?
                                <span className='text-[#FF8682] cursor-pointer ml-[4px]' onClick={() => { navigate('/signup') }}>Sign up</span></p>
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
                        <img src={loginImage} alt="" className='h-[620px] saturate-150' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login