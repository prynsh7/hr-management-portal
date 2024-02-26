import React, { useState } from 'react'
import Modal from '../common/modal/modal'
import InputMain from '../common/form-fields/input-main'


const EntitlementModal = ({ isOpen, onSubmit, onClose }: any) => {
    const handleChange =(e:any)=>{
        const {name,value}= e
        setInputValues((prev:any)=>({...prev,[name]:value}))
      }
      const input= [
        {
            label:'Type',
            value:'',
            type:'text',
            key:'type',
            required: true,
            placeholder:'Select Leave Type'
          },
          {
            label:'Earning Policy',
            value: '',
            type:'text',
            key:'earning_policy',
            required: true,
            placeholder:'Select Earning Policy'
          },
        {
            label:'Earning Start',
            value:'',
            type:'date',
            key:'earning_start',
            required: true,
            placeholder:'YYYY-MM-DD'
        },
        {
            label:'Valid Until',
            value:'',
            type:'date',
            key:'valid_until',
            required: true,
            placeholder:'YYYY-MM-DD'
        },
        {
            label:'Select Year',
            value:'',
            type:'select',
            key:'select_year',
            required: true,
            placeholder:'Select Year'
        },
        {
            label:'Entitled Day',
            value: '',
            type:'text',
            key:'entitled_day',
            required: true,
            placeholder:'Enter Entitled Days'
          }
        ]
        const [inpuValues,setInputValues]=useState(input.reduce((acc:any, obj) => {
          acc[obj.key] = obj.value;
          return acc;
        }, {}))

    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Save Changes">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Entitlement</h1>
                </div>
                <div className='flex flex-col gap-y-3 '>
                <InputMain input={input} values={inpuValues} handleChange={handleChange}/>
                </div>
            </div>
        </Modal>
    )
}

export default EntitlementModal
