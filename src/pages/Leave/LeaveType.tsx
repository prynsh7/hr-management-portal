import React  from 'react'
import {useState}  from 'react'
import Button from '../../components/common/partial/button';
import { FaRegEdit } from "react-icons/fa";
import Header from '../../components/common/header/header';
import Table from '../../components/common/table/table';
import { FaPlus } from "react-icons/fa6";
import LeaveTypeModal from '../../components/leave/leave-type-modal';
import Badges from '../../components/common/partial/badges';

interface DataType {
  key: React.Key;
  code: Number;
  description: string;
  status: boolean;
}
const LeaveType = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () =>{ setIsOpen(false);setSelectedData(undefined)}
    const handleOpenModal = (record?:any) =>{ setIsOpen(true); 
    record && setSelectedData(record)}
    const [selectedData,setSelectedData]=useState(undefined)
  const handleSubmit = (newData:any) => {
    const dataIndex = dataSource.findIndex((item) => item.code === newData.code);

  if (dataIndex !== -1) {
    const updatedDataSource = [...dataSource];
    updatedDataSource[dataIndex] = newData;
    setDataSource(updatedDataSource);
  } else {
    setDataSource(prevDataSource => [...prevDataSource, newData]);
  }
  handleCloseModal();
  };
  const [dataSource,setDataSource] = useState(
    [
    {
      code: 101,
      daycount:10,
      description: "Developing and maintaining software applications.",
    },
    {
      code: 202,
      daycount:10,
      description: "Leading product development and strategy.",
    },
    {
      code: 303,
      daycount:10,
      description: "Analyzing and interpreting complex data sets.",
    },
    {
      code: 404,
      daycount:10,
      description: "Creating user-centered designs for digital experiences.",
    },
    {
      code: 505,
      daycount:10,
      description: "Planning and executing marketing campaigns.",
    },
    {
      code: 606,
      daycount:10,
      description: "Managing and maintaining computer networks.",
    },
    {
      code: 707,
      daycount:10,
      description: "Analyzing financial data and trends.",
    },
    {
      code: 808,
      daycount:10,
      description: "Overseeing HR functions and employee relations.",
    },
    {
      code: 909,
      daycount:10,
      description: "Selling products or services to clients.",
    },
    {
      code: 1010,
      daycount:10,
      description: "Assisting customers with product-related inquiries.",
    },
  ]);

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
        title: "Status",
        render: (record: DataType) => (
          <div>
            <Badges label='Active' status='success' />
          </div>
        ),
      },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
        title: "Day Count",
        dataIndex: "daycount",
        key: "daycount",
      },
    {
      title: "Action",
      render: (record: DataType) => (
        <div>
          <Button state="primary" className="border" onClick={()=>{handleOpenModal(record)}}>
            <div className="flex gap-2 items-center"><FaRegEdit size={17} /></div>
          </Button>
        </div>
      ),
    },
  ];
  const breadcrumbItems = ["Home", "Leave Type"];
  return (
    <div>
      <LeaveTypeModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        selectedData={selectedData}
      />
      <Header
        heading="Leave Type"
        breadcrumbItems={breadcrumbItems}
        icon={<FaPlus/>}
        primaryActionText="Add"
        onPrimaryActionClick={handleOpenModal}
      />
      <div className="mt-6 flex flex-col items-end">
        <Table className="w-full" dataSource={dataSource} columns={columns} />
      </div>
    </div>
  )
}

export default LeaveType
