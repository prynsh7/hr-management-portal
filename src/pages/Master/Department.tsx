import React, { useState } from "react";
import Table from "../../components/common/table/table";
import Button from "../../components/common/partial/button";
import { IMAGES } from "../../assets/images";
import Heading from "../../components/common/partial/heading";
import DepartmentModal from "../../components/master/documentcatgory-modal";
import Input from "../../components/common/form-fields/input";
import Breadcrumb from "../../components/common/bredcrumb";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import Header from "../../components/common/header/header";

interface DataType {
  key: React.Key;
  name: string;
  code: Number;
}

const Department = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const dataSource = [
    {
      key: "1",
      si_no: "1",
      name: "Computer Science",
      code: "CS101",
    },
    {
      key: "2",
      si_no: "2",
      name: "Electrical Engineering",
      code: "EE202",
    },
    {
      key: "3",
      si_no: "3",
      name: "Mechanical Engineering",
      code: "ME303",
    },
    {
      key: "4",
      si_no: "4",
      name: "Chemical Engineering",
      code: "CE404",
    },
    {
      key: "5",
      si_no: "5",
      name: "Biomedical Science",
      code: "BMS505",
    },
    {
      key: "6",
      si_no: "6",
      name: "Business Administration",
      code: "BA606",
    },
    {
      key: "7",
      si_no: "7",
      name: "Environmental Science",
      code: "ES707",
    },
    {
      key: "8",
      si_no: "8",
      name: "Psychology",
      code: "PSY808",
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
      sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      sorter: (a: DataType, b: DataType) => Number(a.code) - Number(b.code),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: "Action",
      render: (record: DataType) => (
        <div>
          <Button state="primary" className="border" onClick={handleOpenModal}>
            <div className="flex gap-2 items-center"><FaRegEdit size={17} /></div>
          </Button>
        </div>
      ),
    },
  ];

  const breadcrumbItems = ["Home", "Department"];
  return (
    <div>
      <DepartmentModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      
      <Header
        heading="Department"
        breadcrumbItems={breadcrumbItems}
        icon={<FaPlus />}
        primaryActionText="Add"
        onPrimaryActionClick={handleOpenModal}
      />

      <div className="mt-6">
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Department;
