import Modal from '../common/modal/modal'
import { useState } from 'react'
import InputMain from '../common/form-fields/input-main'



const DepartmentModal = ({ isOpen, onSubmit, onClose }: any) => {
    const handleChange =(e:any)=>{
        const {name,value}= e
        setInputValues((prev:any)=>({...prev,[name]:value}))
      }
      const input= [
        {
            label:'Title',
            value:'',
            type:'text',
            key:'title',
            required: true,
            placeholder:'Title'
          },
        {
            label:'Code',
            value:'',
            type:'text',
            key:'code',
            required: true,
            placeholder:'Code'
          },
          {
            label:'Description',
            value: '',
            type:'textarea',
            key:'description',
            required: true,
            placeholder:'Description'
          },
        ]
        const [inpuValues,setInputValues]=useState(input.reduce((acc:any, obj) => {
          acc[obj.key] = obj.value;
          return acc;
        }, {}))
    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Add">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add New Document Category</h1>
                </div>
                <div>
                <InputMain input={input} values={inpuValues} handleChange={handleChange}/>
                </div>
            </div>
        </Modal>
    )
}

export default DepartmentModal
