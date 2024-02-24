import React, { useState } from "react";
import Modal from "../common/modal/modal";
import InputMain from "../common/form-fields/input-main";

const HolidayModal = ({ isOpen, onSubmit, onClose }: any) => {
  const handleChange = (e: any) => {
    const { name, value } = e;
    setInputValues((prev: any) => ({ ...prev, [name]: value }));
  };
  const input = [
    {
      label: "Name",
      value: "",
      type: "text",
      key: "name",
      required: true,
      placeholder: "Name",
    },
    {
      label: "From",
      value: '',
      type: "date",
      key: "from_date",
      required: true,
      placeholder: "YYYY-MM-DD",
      width:'50%'
    },
    {
      label: "To",
      value: '',
      type: "date",
      key: "to_date",
      required: true,
      placeholder: "YYYY-MM-DD",
      width:'50%'
    },
    {
      label: "Description",
      value: "",
      type: "textarea",
      key: "description",
      required: true,
      placeholder: "Description",
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
      submitButtonText="Save"
    >
      <div>
        <div className="border-b-2 w-full mb-6">
          <h1 className="text-[#333333] opacity-70 font-semibold text-[14px] pb-3">
            Add Holiday
          </h1>
        </div>
        <div>
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

export default HolidayModal;