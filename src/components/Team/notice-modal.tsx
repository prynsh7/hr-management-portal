import React, { useState } from "react";
import Modal from "../common/modal/modal";
import Input from "../common/form-fields/input";
import { Switch } from "antd";
import InputArea from "../common/form-fields/input-area";
import DatePicker from "../common/form-fields/date-picker";
import Select from "../common/form-fields/select";
import Upload from "../common/form-fields/upload";

const NoticeModal = ({ isOpen, onSubmit, onClose }: any) => {
  return (
    <Modal
      width={"50%"}
      isOpen={isOpen}
      handleSubmit={onSubmit}
      handleCancel={onClose}
      cancelButtonText="Close"
      submitButtonText="Save Changes"
    >
      <div>
        <div className="border-b-2 w-full mb-6">
          <h1 className="text-[#333333] opacity-70 font-semibold text-[14px] pb-3">
            Add Notice
          </h1>
        </div>
        <div className="flex flex-col h-[90%] gap-3 px-2 overflow-auto">
          <div>
            <Input
              label={"Title"}
              isRequired
              placeholder="0 day"
              type="text"
            />
          </div>
          <div>
            <DatePicker label={"Date"} isRequired />
          </div>
          <div>
          <h1 className="text-[#333333] font-semibold text-[16px] mt-6 pb-3">
            Notify Employee
          </h1>
          </div>
          <div>
            <Input label={"Attachment"} isRequired/>
          </div>
          <div>
            <InputArea label={"Content"} placeholder="5000 character max"/>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NoticeModal;
