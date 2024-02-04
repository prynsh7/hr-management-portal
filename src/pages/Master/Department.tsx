import React, { useState } from "react";
import Table from "../../components/common/table/table";
import Button from "../../components/common/partial/button";
import { IMAGES } from "../../assets/images";
import Heading from "../../components/common/partial/heading";
import Modal from "../../components/master/department-modal";
import Input from "../../components/common/form-fields/input";
import Breadcrumb from "../../components/common/bredcrumb";
import DepartmentModal from "../../components/master/documentcatgory-modal";
import { FaRegEdit } from "react-icons/fa";

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
            <div className="flex gap-1 items-center"><FaRegEdit size={17}/></div>
          </Button>
        </div>
      ),
    },
     ];

  const breadcrumbItems = ["Home", "Department", "ssssssx"];
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
        
      

      <Heading type="h4">Department</Heading>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Department;
