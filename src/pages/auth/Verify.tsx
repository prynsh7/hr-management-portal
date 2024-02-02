import React from 'react'
import VerifyImage from "../../assets/images/verify.png"
import Input from '../../components/common/form-fields/input'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/partial/button';

type Props = {}

function Verify({ }: Props) {
    const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center min-h-[100vh]'>
            <div className='grid grid-cols-2 justify-center items-center gap-[90px]'>
                <div className='sm:col-span-1 col-span-2'>
                    <div>
                        <div>
                            <h3 className='text-[40px] font-bold text-[#313131]'>Verify code</h3>
                            <p className='text-[16px] text-[#313131]'>An authentication code has been sent to your email.</p>
                        </div>
                        <div className='mt-[32px]'>
                            <Input
                                label={"Enter Code"}
                                placeholder='Enter your code'
                                type='number'
                            />
                        </div>
                        <div className='mt-[24px] text-center'>
                            <Button type="filled" state='primary' className='w-full font-semibold'>Verify</Button>
                            <p className='text-[14px] text-[#313131] font-medium mt-[10px]'>Didn’t receive a code?
                                <span className='text-[#FF8682] cursor-pointer ml-[4px]'>Resend</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 hidden sm:block'>
                    <div>
                        <img src={VerifyImage} alt="" className='h-[620px] saturate-150' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verify