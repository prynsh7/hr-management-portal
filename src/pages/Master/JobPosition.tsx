import React, { useState } from "react";
import Button from "../../components/common/partial/button";
import Heading from "../../components/common/partial/heading";
import Table from "../../components/common/table/table";
import StatusToggler from "../../components/common/partial/status-toggler";
import JobPositionModal from "../../components/master/jobposition-modal";
import Breadcrumb from "../../components/common/bredcrumb";
import { FaRegEdit } from "react-icons/fa";

type Props = {};
interface DataType {
  key: React.Key;
  title: string;
  code: Number;
  description: string;
  status: boolean;
}

function JobPosition(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);


  const dataSource = [
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,

      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
    {
      title: "hhhh",
      code: 4456666,
      description: "hhhhheheeheheeh",
    },
  ];
  const columns = [
      {
        title: "Status",
        render: (record: DataType) => (
          <div>
            <StatusToggler />
          </div>
        ),
      },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      render: (record: DataType) => (
        <div>
          <Button state="primary" className="border" onClick={handleOpenModal}>
            <div className="flex gap-2 items-center"><FaRegEdit size={17}/></div>
          </Button>
        </div>
      ),
    },
  ];
  const breadcrumbItems = ["Home", "Job Position", "jkhhx"];
  
  return (
    <div>
      <JobPositionModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />

      <Heading type="h4">Employee</Heading>
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-6 flex flex-col items-end">
        <Button type="filled" className="mb-4" onClick={handleOpenModal} state="primary">
          Add +
        </Button>
        <Table className="w-full" dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}

export default JobPosition;
