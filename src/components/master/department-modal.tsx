import Modal from "../common/modal/modal";
import InputMain from "../common/form-fields/input-main";
import { useState } from "react";

const DepartmentModal = ({ isOpen, onSubmit, onClose }: any) => {
  const handleChange = (e: any) => {
    const { name, value } = e;
    setInputValues((prev: any) => ({ ...prev, [name]: value }));
  };
  const input = [
    {
      label: "Enter Department Name",
      value: "",
      type: "text",
      key: "department_name",
      required: true,
      placeholder: "Enter Department Name",
    },
    {
      label: "Enter Code",
      value: "",
      type: "text",
      key: "code",
      required: true,
      placeholder: "Enter Code",
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
      cancelButtonText="close"
      submitButtonText="Save Changes"
    >
      <div className="border-b-2 w-full mb-6">
        <h1 className="text-[#333333] opacity-70 font-semibold text-[14px] pb-3">
          Add Department
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <InputMain
          input={input}
          values={inpuValues}
          handleChange={handleChange}
        />
      </div>
    </Modal>
  );
};
export default DepartmentModal;
