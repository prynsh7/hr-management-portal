import React, { useState } from "react";
import Modal from "../common/modal/modal";
import Input from "../common/form-fields/input";
import { Switch } from "antd";

const LeaveTypeModal = ({ isOpen, onSubmit, onClose }: any) => {
  const [isActive, setIsActive] = useState(true);
  const handlactive = () => {
    setIsActive(!isActive);
  };

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
          <div>
            <Input label={"Code"} isRequired placeholder="Code" type="text" />
          </div>
          <div>
            <Input
              label={"Description"}
              placeholder="Description"
              isRequired
              type="text"
            />
          </div>
          <div className="flex gap-3">
            <Switch
              onChange={handlactive}
              defaultChecked
              style={{
                width: "24px",
                background: isActive ? "#03A790" : "#F21E1E",
              }}
            />
            {isActive ? <div>Active</div> : <div>deactive</div>}
          </div>
          <div className="mb-3">
            <Input label={"Day Count"} placeholder="Day Count" type="text" />
          </div>
          <div className="mb-3 flex gap-3">
            <Switch style={{ background: "#03A790" }} />
            Paid Leave
          </div>
          <div className="mb-3 flex gap-3">
            <Switch style={{ background: "#03A790" }} />
            Allow Negative Balance
          </div>
          <div className="mb-3 flex gap-3">
            <Switch style={{ background: "#03A790" }} />
            Reason Required
          </div>
          <div className="mb-3 flex gap-3">
            <Switch style={{ background: "#03A790" }} />
            Attachment Required
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LeaveTypeModal;
