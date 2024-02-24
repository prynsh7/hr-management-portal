import React, { useState } from "react";
import Modal from "../common/modal/modal";
import InputMain from "../common/form-fields/input-main";

const NoticeModal = ({ isOpen, onSubmit, onClose }: any) => {
  const handleChange = (e: any) => {
    const { name, value } = e;
    setInputValues((prev: any) => ({ ...prev, [name]: value }));
  };
  const input = [
    {
      label: "Title",
      value: "",
      type: "text",
      key: "title",
      required: true,
      placeholder: "Title",
    },
    {
      label: "Date",
      value:'',
      type: "date",
      key: "date",
      required: true,
    },
    {
      label: "Notify Employee",
      value: "",
      type: "toggler",
      key: "notify_employee",
      required: true,
    },
    {
      label: "Attachment",
      value: "",
      type: "choosefile",
      key: "attachment",
      required: true,
    },
    {
      label: "Content",
      value: "",
      type: "textarea",
      key: "content",
      required: true,
      placeholder: "5000 character max",
    },
  ];
  const [inpuValues, setInputValues] = useState(
    input.reduce((acc: any, obj) => {
      acc[obj.key] = obj.value;
      return acc;
    }, {})
  );
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
        <InputMain
            input={input}
            values={inpuValues}
            handleChange={handleChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default NoticeModal;
