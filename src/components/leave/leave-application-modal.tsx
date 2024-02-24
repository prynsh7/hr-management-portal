import React, { useState } from "react";
import Modal from "../common/modal/modal";
import InputMain from "../common/form-fields/input-main";

const LeaveApplicationModal = ({ isOpen, onSubmit, onClose }: any) => {
  const handleChange =(e:any)=>{
    const {name,value}= e
    setInputValues((prev:any)=>({...prev,[name]:value}))
  }
  const input= [
    {
        label:'Entitlement',
        value:'',
        type:'select',
        key:'entitlement',
        required: true,
        placeholder:'Select Entitlement'
      },
      {
        label:'Balance',
        value: '',
        type:'text',
        key:'balance',
        placeholder:'0 days'
      },
      {
        label:'Session',
        value:'',
        type:'select',
        key:'session',
        required: true,
        placeholder:'Session'
      },
    {
        label:'From',
        value:'',
        type:'date',
        key:'from_date',
        required: true,
        placeholder:'YYYY-MM-DD',
        width:'50%'
    },
    {
        label:'To',
        value:'',
        type:'date',
        key:'to_date',
        required: true,
        placeholder:'YYYY-MM-DD',
        width:'50%'
    },
    {
        label:'Day',
        value: '',
        type:'text',
        key:'day',
        required: true,
        placeholder:'0'
      },
    {
        label:'Attachment 1',
        value: '',
        type:'choosefile',
        key:'attachment1',
        required: true,
        width:'50%'
      },
    {
        label:'Attachment 1',
        value: '',
        type:'choosefile',
        key:'attachment1',
        required: true,
        width:'50%'
      }, 
    {
        label:'Reason',
        value: '',
        type:'textarea',
        key:'reason',
        required: true,
      }, 
      {
        label:'Submission Date',
        value:'',
        type:'date',
        key:'submission_date',
        required: true,
        placeholder:'YYYY-MM-DD'
    },
    {
      type:'toggler',
      key:'Notify_Employee_After_Final_Approval',
      onActive:'Notify Employee After Final Approval',
      onDeactive:'Notify Employee After Final Approval'
  },
    {
      label:'Remarks',
      value: '',
      type:'textarea',
      key:'remarks',
      required: true,
    }, 
    ]
    const [inpuValues,setInputValues]=useState(input.reduce((acc:any, obj) => {
      acc[obj.key] = obj.value;
      return acc;
    }, {}))
  return (
    <Modal
      width={"50%"}
      isOpen={isOpen}
      handleSubmit={onSubmit}
      handleCancel={onClose}
      cancelButtonText="Close"
      submitButtonText="Save Changes"
    >
      <div className="h-[65vh]">
        <div className="border-b-2 w-full mb-6">
          <h1 className="text-[#333333] opacity-70 font-semibold text-[14px] pb-3">
            Add Application
          </h1>
        </div>
        <div className="flex flex-col h-[90%] gap-3 px-2 overflow-auto">
        <InputMain input={input} values={inpuValues} handleChange={handleChange}/>
        </div>
      </div>
    </Modal>
  );
};

export default LeaveApplicationModal;
