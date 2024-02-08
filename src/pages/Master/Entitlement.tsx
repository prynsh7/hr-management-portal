import React  from 'react'
import {useState}  from 'react'
import StatusToggler from '../../components/common/partial/badges';
import Button from '../../components/common/partial/button';
import { FaRegEdit } from "react-icons/fa";
import Header from '../../components/common/header/header';
import Table from '../../components/common/table/table';
import { FaPlus } from "react-icons/fa6";
import EntitlementModal from '../../components/leave/entitlement-modal';



type Props = {};
interface DataType {
  key: React.Key;
  type:string,
  earningstart: string;
  validuntil: string;
  year: string;
  status: boolean;
}
const Entitlement = () => {
    const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const dataSource = [
    {
      type:'Casual',
      earningstart:'14/01/24',
      validuntil:'27/01/24',
      year:'2024'
    },
    {
      type:'Sick Leave',
      earningstart:'16/01/24',
      validuntil:'29/01/24',
      year:'2024'
    },
    {
      type:'Casual',
      earningstart:'14/01/24',
      validuntil:'27/01/24',
      year:'2024'
    },
    {
      type:'Sick Leave',
      earningstart:'16/01/24',
      validuntil:'29/01/24',
      year:'2024'
    },
    {
      type:'Casual',
      earningstart:'14/01/24',
      validuntil:'27/01/24',
      year:'2024'
    },
    {
      type:'Sick Leave',
      earningstart:'16/01/24',
      validuntil:'29/01/24',
      year:'2024'
    },
    {
      type:'Casual',
      earningstart:'14/01/24',
      validuntil:'27/01/24',
      year:'2024'
    },
    {
      type:'Sick Leave',
      earningstart:'16/01/24',
      validuntil:'29/01/24',
      year:'2024'
    },
    {
      type:'Casual',
      earningstart:'14/01/24',
      validuntil:'27/01/24',
      year:'2024'
    },
    {
      type:'Sick Leave',
      earningstart:'16/01/24',
      validuntil:'29/01/24',
      year:'2024'
    },
    {
      type:'Casual',
      earningstart:'14/01/24',
      validuntil:'27/01/24',
      year:'2024'
    },
    {
      type:'Sick Leave',
      earningstart:'16/01/24',
      validuntil:'29/01/24',
      year:'2024'
    },
    
    
  ];

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Earning Start",
      dataIndex: "earningstart",
      key: "earningstart",
    },
    {
        title: "Valid Until",
        dataIndex: "validuntil",
        key: "validuntil",
      },
    {
        title: "Year",
        dataIndex: "year",
        key: "year",
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
  const breadcrumbItems = ["Home", "Entitlement"];
  return (
    <div>
      <EntitlementModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <Header
        heading="Entitlement"
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

export default Entitlement
