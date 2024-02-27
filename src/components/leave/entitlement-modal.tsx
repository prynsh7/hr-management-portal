import React, { useEffect, useState } from "react";
import Modal from "../common/modal/modal";
import InputMain from "../common/form-fields/input-main";
import { entitlementInputs as input } from "../../constant/input-constant";


const EntitlementModal = ({ isOpen, onSubmit, onClose,selectedData }: any) => {
  const handleClose = () => {
    onClose();
    setInputValues({});
  };
  const handleChange = (e: any) => {
    const { name, value } = e;
    setInputValues((prev: any) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = () => {
    const isRequiredFilled = input.every((input) => {
      if (input.required) {
        return !!inputValues[input.key];
      }
      return true;
    });

    if (isRequiredFilled) {
      onSubmit(inputValues);
      onClose();
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const [inputValues, setInputValues] = useState(
    selectedData
      ? selectedData
      : input.reduce((acc: any, obj) => {
          acc[obj.key] = obj.value;
          return acc;
        }, {})
  );

  useEffect(() => {
    if (selectedData) {
      setInputValues(selectedData);
    }
  }, [selectedData]);
  return (
    <Modal
      width={"50%"}
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      handleCancel={handleClose}
      cancelButtonText="Close"
      submitButtonText="Save Changes"
    >
      <div>
        <div className="border-b-2 w-full mb-6">
          <h1 className="text-[#333333] opacity-70 font-semibold text-[14px] pb-3">
            Add Entitlement
          </h1>
        </div>
        <div className="flex flex-col gap-y-3 ">
          <InputMain
            input={input}
            values={inputValues}
            handleChange={handleChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default EntitlementModal;
