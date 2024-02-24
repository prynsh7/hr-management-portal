import React, { useState } from "react";
import Modal from "../common/modal/modal";
import InputMain from "../common/form-fields/input-main";

const LeaveTypeModal = ({ isOpen, onSubmit, onClose }: any) => {
  const handleChange =(e:any)=>{
    const {name,value}= e
    setInputValues((prev:any)=>({...prev,[name]:value}))
  }
  const input= [
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
        type:'text',
        key:'description',
        required: true,
        placeholder:'Description'
      },
    {
        type:'toggler',
        key:'status',
        onActive:'Active',
        onDeactive:'Deactive'
    },
    {
      label:'Day Count',
      value: '',
      type:'text',
      key:'day_count',
      required: true,
      placeholder:'Day Count'
    },
    {
      type:'toggler',
      key:'paid_leave',
      onActive:'Paid Leave',
      onDeactive:'Paid Leave'
  },
    {
      type:'toggler',
      key:'negative_balance',
      onActive:'Allow Negative Balance',
      onDeactive:'Allow Negative Balance'
  },
    {
      type:'toggler',
      key:'reason_required',
      onActive:'Reason Required',
      onDeactive:'Reason Required'
  },
    {
      type:'toggler',
      key:'attachment_required',
      onActive:'Attachment Required',
      onDeactive:'Attachment Required'
  },
    
    ]
    const [inpuValues,setInputValues]=useState(input.reduce((acc:any, obj) => {
      acc[obj.key] = obj.value;
      return acc;
    }, {}))
    console.log(inpuValues);
    
  return (
    <Modal
      width={"50%"}
      isOpen={isOpen}
      handleSubmit={onSubmit}
      handleCancel={onClose}
      cancelButtonText="Close"
      submitButtonText="Save"
    >
      <div>
        <div className="border-b-2 w-full mb-6">
          <h1 className="text-[#333333] opacity-70 font-semibold text-[14px] pb-3">
            Add Leave Type
          </h1>
        </div>
        <div className="flex flex-col gap-y-3 ">
        <InputMain input={input} values={inpuValues} handleChange={handleChange}/>
        </div>
      </div>
    </Modal>
  );
};

export default LeaveTypeModal;
