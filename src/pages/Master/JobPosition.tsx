import React, { useState } from "react";
import Button from "../../components/common/partial/button";
import Heading from "../../components/common/partial/heading";
import Table from "../../components/common/table/table";
import Badges from "../../components/common/partial/badges";
import JobPositionModal from "../../components/master/jobposition-modal";
import Breadcrumb from "../../components/common/bredcrumb";
import { FaRegEdit } from "react-icons/fa";
import Header from "../../components/common/header/header";

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
      title: "Software Engineer",
      code: 101,
      description: "Developing and maintaining software applications.",
    },
    {
      title: "Product Manager",
      code: 202,
      description: "Leading product development and strategy.",
    },
    {
      title: "Data Scientist",
      code: 303,
      description: "Analyzing and interpreting complex data sets.",
    },
    {
      title: "UX/UI Designer",
      code: 404,
      description: "Creating user-centered designs for digital experiences.",
    },
    {
      title: "Marketing Specialist",
      code: 505,
      description: "Planning and executing marketing campaigns.",
    },
    {
      title: "Network Administrator",
      code: 606,
      description: "Managing and maintaining computer networks.",
    },
    {
      title: "Financial Analyst",
      code: 707,
      description: "Analyzing financial data and trends.",
    },
    {
      title: "Human Resources Manager",
      code: 808,
      description: "Overseeing HR functions and employee relations.",
    },
    {
      title: "Sales Representative",
      code: 909,
      description: "Selling products or services to clients.",
    },
    {
      title: "Customer Support Specialist",
      code: 1010,
      description: "Assisting customers with product-related inquiries.",
    },
  ];

  const columns = [
    {
      title: "Status",
      render: (record: DataType) => (
        <div>
          <Badges />
        </div>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a: DataType, b: DataType) => a.title.localeCompare(b.title),
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
      title: "Description",
      dataIndex: "description",
      key: "description",
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
  const breadcrumbItems = ["Home", "Job Position"];

  return (
    <div>
      <JobPositionModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <Header
        heading="Job Position"
        breadcrumbItems={breadcrumbItems}
        primaryActionText="Add +"
        onPrimaryActionClick={handleOpenModal}
      />
      <div className="mt-6 flex flex-col items-end">
        <Table className="w-full" dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}

export default JobPosition;
