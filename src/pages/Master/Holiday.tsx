import React, { useState } from "react";
import HolidayModal from "../../components/master/holiday-modal";
import Heading from "../../components/common/partial/heading";
import Button from "../../components/common/partial/button";
import Table from "../../components/common/table/table";
import Breadcrumb from "../../components/common/bredcrumb";

type Props = {};
interface DataType {
  key: React.Key;
  name: string;
  fromDate: string;
  toDate: string;
  description: string;
}

const Holiday = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const dataSource =[
    
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    {
        name:"nitin",
        fromdate:"14/04/2024",
        todate:"14/04/2024",
        description:"going for trip"
    },
    
  ]
  const columns =[
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "From",
        dataIndex: "fromdate",
        key: "fromdate",
    },
    {
        title: "To",
        dataIndex: "todate",
        key: "todate",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
  ]
  const breadcrumbItems = ["Home", "Holiday", "jkhhx"];

  return (
    <div>
      <HolidayModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />

      <Heading type="h4">Holiday</Heading>
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-6 flex flex-col items-end">
        <Button type="filled" className="mb-4" onClick={handleOpenModal} state="primary">
          Add +
        </Button>
        <Table className="w-full" dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Holiday;
