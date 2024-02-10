import React, { useState } from "react";
import Table from "../../components/common/table/table";
import Header from "../../components/common/header/header";
import { FaPlus } from "react-icons/fa";
import PayrollModal from "../../components/payroll/payroll-modal";

type Props = {}
interface DataType {
  key: React.Key;
  code: number;
  amount: number;
  percentage: number;
  description: string;
}

const Earnings = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const dataSource = [
    {
      code: "1234556",
      description: "Basic Salary",
      amount: "10000",
    },
    {
      code: "1234556",
      description: "House Rent",
      amount: "5000",
    },
    {
      code: "1234556",
      description: "Conveyance",
      amount: "3000",
    },
    {
      code: "1234556",
      description: "Medical Allowance",
      amount: "2000",
    },
    {
      code: "1234556",
      description: "Special Allowance",
      amount: "1000",
    },
    {
      code: "1234556",
      description: "Other Allowance",
      amount: "1000",
    },
    {
      code: "1234556",
      description: "Other Allowance",
      amount: "1000",
    },
    {
      code: "1234556",
      description: "Other Allowance",
      amount: "1000",
    },
    {
      code: "1234556",
      description: "Other Allowance",
      amount: "1000",
    },
  ];

  const columns = [
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
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ]


  const breadcrumbItems = ["Payroll", "Earnings"];
  return (
    <div>
      <PayrollModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
        heading="Add New Earnings"
      />
      <Header
        heading="Earnings"
        breadcrumbItems={breadcrumbItems}
        icon={<FaPlus />}
        primaryActionText="Add"
        onPrimaryActionClick={handleOpenModal}
      />
      <div className="mt-6 flex flex-col items-end">
        <Table className="w-full" dataSource={dataSource} columns={columns} />
      </div>
    </div>
  )
}

export default Earnings