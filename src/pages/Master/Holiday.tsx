import React, { useState } from "react";
import HolidayModal from "../../components/master/holiday-modal";
import Heading from "../../components/common/partial/heading";
import Button from "../../components/common/partial/button";
import Table from "../../components/common/table/table";
import Breadcrumb from "../../components/common/bredcrumb";
import Header from "../../components/common/header/header";
import moment from "moment";
import { FaPlus } from "react-icons/fa";


type Props = {};
interface DataType {
  key: React.Key;
  name: string;
  fromdate: string;
  todate: string;
  description: string;
}

const Holiday = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const dataSource = [
    {
      name: "John",
      fromdate: "15/04/2024",
      todate: "18/04/2024",
      description: "Business trip to Paris"
    },
    {
      name: "Alice",
      fromdate: "20/04/2024",
      todate: "25/04/2024",
      description: "Vacation in Italy"
    },
    {
      name: "Bob",
      fromdate: "05/05/2024",
      todate: "10/05/2024",
      description: "Attending a conference in London"
    },
    {
      name: "Eva",
      fromdate: "12/05/2024",
      todate: "15/05/2024",
      description: "Exploring New York City"
    },
    {
      name: "Chris",
      fromdate: "22/05/2024",
      todate: "28/05/2024",
      description: "Family trip to Barcelona"
    },
    {
      name: "Sophie",
      fromdate: "01/06/2024",
      todate: "05/06/2024",
      description: "Attending a workshop in Tokyo"
    },
    {
      name: "Michael",
      fromdate: "08/06/2024",
      todate: "12/06/2024",
      description: "Beach vacation in Bali"
    },
    {
      name: "Emma",
      fromdate: "17/06/2024",
      todate: "20/06/2024",
      description: "Road trip in California"
    },
    {
      name: "Daniel",
      fromdate: "25/06/2024",
      todate: "30/06/2024",
      description: "Hiking in the Swiss Alps"
    },
    {
      name: "Olivia",
      fromdate: "05/07/2024",
      todate: "10/07/2024",
      description: "Safari adventure in Africa"
    },
    {
      name: "William",
      fromdate: "15/07/2024",
      todate: "20/07/2024",
      description: "City tour in Amsterdam"
    },
    {
      name: "Isabella",
      fromdate: "25/07/2024",
      todate: "30/07/2024",
      description: "Cruise vacation in the Caribbean"
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: "From",
      dataIndex: "fromdate",
      key: "fromdate",
      sorter: (a: DataType, b: DataType) =>
        moment(a.fromdate, "DD/MM/YYYY").unix() - moment(b.fromdate, "DD/MM/YYYY").unix(),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "To",
      dataIndex: "todate",
      key: "todate",
      sorter: (a: DataType, b: DataType) =>
        moment(a.todate, "DD/MM/YYYY").unix() - moment(b.todate, "DD/MM/YYYY").unix(),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ]
  const breadcrumbItems = ["Home", "Holiday"];

  return (
    <div>
      <HolidayModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <Header
        heading="Holiday"
        breadcrumbItems={breadcrumbItems}
        icon={<FaPlus />}
        primaryActionText="Add"
        onPrimaryActionClick={handleOpenModal}
      />
      <div className="mt-6 flex flex-col items-end">
        <Table className="w-full" dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Holiday;
