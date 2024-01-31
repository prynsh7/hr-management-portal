import React, { useState } from "react";
import Table from "../../components/common/table/table";
import Button from "../../components/common/partial/button";
import { IMAGES } from "../../assets/images";
import Heading from "../../components/common/partial/heading";
import Modal from "../../components/common/modal/modal";
import Input from "../../components/common/form-fields/input";
import Breadcrumb from "../../components/common/bredcrumb";

type Props = {};
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const Department = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const dataSource = [
    {
      key: "1",
      si_no: "1",
      name: "Computer Science",
      code: "44554455",
    },
    {
      key: "2",
      si_no: "2",
      name: "Computer Science",
      code: "44554455",
    },
    {
      key: "3",
      si_no: "3",
      name: "Computer Science",
      code: "44554455",
    },
    {
      key: "4",
      si_no: "4",
      name: "Computer Science",
      code: "44554455",
    },
    {
      key: "5",
      si_no: "5",
      name: "Computer Science",
      code: "44554455",
    },
    {
      key: "6",
      si_no: "6",
      name: "Computer Science",
      code: "44554455",
    },
    {
      key: "7",
      si_no: "7",
      name: "Computer Science",
      code: "44554455",
    },
    {
      key: "8",
      si_no: "8",
      name: "Computer Science",
      code: "44554455",
    },
  ];

  const columns = [
    {
      title: "SI No",
      dataIndex: "si_no",
      key: "si_no",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Action",
      render: (record: DataType) => (
        <div>
          <Button state="primary" className="border" onClick={handleOpenModal}>
            <div className="flex gap-2 items-center">Edit</div>
          </Button>
        </div>
      ),
    },
  ];

  const breadcrumbItems = ["Home", "Department", "ssssssx"];
  return (
    <div>
      <Modal
        width={"50%"}
        isOpen={isOpen}
        handleSubmit={handleCloseModal}
        handleCancel={handleCloseModal}
      >
        <div className="flex flex-col gap-2">
          <div>
            <label className="text-[#333333] opacity-70 font-semibold text-[14px]">
              Enter Department Name
            </label>
            <Input placeholder="Name" type="text" />
          </div>
          <div>
            <label className="text-[#333333] opacity-70 font-semibold text-[14px]">
              Enter Code
            </label>
            <Input placeholder="Enter code" type="number" />
          </div>
        </div>
      </Modal>

      <Heading type="h4">Department</Heading>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Department;
