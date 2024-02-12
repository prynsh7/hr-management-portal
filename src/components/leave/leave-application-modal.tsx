import React, { useState } from "react";
import Modal from "../common/modal/modal";
import Input from "../common/form-fields/input";
import { Switch } from "antd";
import InputArea from "../common/form-fields/input-area";
import DatePicker from "../common/form-fields/date-picker";
import Select from "../common/form-fields/select";
import ChooseFile from "../common/form-fields/choose-file";


const LeaveApplicationModal = ({ isOpen, onSubmit, onClose }: any) => {
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
          <div>
            <Select
              // label={"Entitlement"}
              // isRequired
              placeholder="Select Entitlement"
              type="text"
            />
          </div>
          <div>
            <Input
              label={"Balance"}
              isRequired
              placeholder="0 day"
              type="text"
            />
          </div>
          <div>
            <Select
              // label={"Session"}
              // isRequired
              placeholder="Select Session"
              type="text"
            />
          </div>
          <div>
            <DatePicker label={"From "} isRequired />
          </div>
          <div>
            <Input label={"Day"} placeholder="0" type="text" />
          </div>
          <div className="flex w-full gap-3">
            <div className="w-full">
            <ChooseFile btnText="Choose File" isRequired label="Attachment 1"/> 
            </div>
            <div className="w-full">
            <ChooseFile btnText="Choose File" isRequired label="Attachment 2"/>
            </div>
          </div>
          <div>
            <InputArea label={"Reason"} />
          </div>
          <div>
            <DatePicker label={"Submission Date"} isRequired />
          </div>
          <div className="flex gap-3">
            <Switch style={{ background: "#03A790" }} />
            Notify Employee After Final Approval 
          </div> 
          <div>
            <InputArea isRequired label={"Remarks"} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LeaveApplicationModal;
