import React, { useState } from "react";
import Heading from "../../components/common/partial/heading";
import Breadcrumb from "../../components/common/bredcrumb";
import Table from "../../components/common/table/table";
import Button from "../../components/common/partial/button";
import { useNavigate } from "react-router-dom";
import { Switch } from "antd";
import { FaRegEdit } from "react-icons/fa";
// import StatusToggler from "../../components/common/partial/status-toggler";
import img from "../../assets/images/auth.png";

type Props = {};
interface DataType {
  id: React.Key;
  image: string;
  name: string;
  location: string;
  status: string;
}

const Employee = (props: Props) => {
  const [isActive, setIsActive] = useState(true);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  const breadcrumbItems = ["Home", "Employee", "jshhdd"];
  const navigate = useNavigate();
  const navigateToAdd = () => {
    navigate("/employee/id");
  };
  const dataSource = [
    {
      id: 1,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 2,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 3,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 4,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 5,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 6,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 7,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 8,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 9,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
    {
      id: 10,
      location: "bihar",
      status: isActive ? "Active" : "Deactive",
    },
  ];
  const columns = [
    {
      title: "Employee",
      render: (record: DataType) => (
        <div className="flex items-center gap-3 ">
          <img
            className="max-w-[35px] h-full w-full rounded-full max-h-[35px]"
            src={img}
            alt=""
          />
          <p>Nitin Singh</p>
        </div>
      ),
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Status",
      render: (record: DataType) => (
        <div>
          {/* <StatusToggler /> */}
        </div>
      ),
    },
    {
      title: "Action",
      render: (record: DataType) => (
        <div>
          <Button state="primary" className="border" onClick={navigateToAdd}>
            <div className="flex gap-2 items-center">
              <FaRegEdit size={17} />
            </div>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Heading type="h4">Employee</Heading>
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-6 flex flex-col items-end">
        <Button
          type="filled"
          className="mb-4"
          onClick={navigateToAdd}
          state="primary"
        >
          Add +
        </Button>
        <Table className="w-full" dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Employee;
