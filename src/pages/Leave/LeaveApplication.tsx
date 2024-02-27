import React, { useState } from "react";
import Header from "../../components/common/header/header";
import { FaPlus } from "react-icons/fa";
import LeaveApplicationModal from "../../components/leave/leave-application-modal";
import Button from "../../components/common/partial/button";

const LeaveAppllication = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () =>{ setIsOpen(false);setSelectedData(undefined)}
  const handleOpenModal = (record?:any) =>{ setIsOpen(true); 
  record && setSelectedData(record)}
  const [selectedData,setSelectedData]=useState(undefined)
  const handleSubmit = (newData:any) => {
    const dataIndex = employee.findIndex((item) => item.code === newData.code);

  if (dataIndex !== -1) {
    const updatedDataSource = [...employee];
    updatedDataSource[dataIndex] = newData;
    setEmployee(updatedDataSource);
  } else {
    setEmployee(prevEmployee => [...prevEmployee, newData]);
  }
  handleCloseModal();
  };
  const [employee,setEmployee] = useState(
    [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "nitin",
      code: "25990",
      leaveType: "Sick Leave",
      description: "Highfever",
      dateFrom: "14 november",
      dateTo: "17 november",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "Priyansh",
      code: "25450",
      leaveType: "Casual",
      description: "Trip to Thailand ",
      dateFrom: "14 november",
      dateTo: "17 november",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "Appu",
      code: "25850",
      leaveType: "Casual",
      description: "Sister's Wedding",
      dateFrom: "14 november",
      dateTo: "17 november",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "Himkant",
      code: "28690",
      leaveType: "Sick Leave",
      description: "Loose-Motion",
      dateFrom: "14 november",
      dateTo: "17 november",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "Madhukant",
      code: "25990",
      leaveType: "Sick Leave",
      description: "Maleria",
      dateFrom: "14 november",
      dateTo: "17 november",
    },
  ]);

  const breadcrumbItems = ["Home", "Leave Application"];

  return (
    <div>
      <LeaveApplicationModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        selectedData={selectedData}
      />
      <Header
        heading="Leave Application"
        breadcrumbItems={breadcrumbItems}
        icon={<FaPlus />}
        primaryActionText="Add"
        onPrimaryActionClick={handleOpenModal}
      />
      {/* main */}
      <div className="mt-9">
        {/* upper */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6">
          {/* card */}
          <NotificationCard text={"Text Request"} number={53} color="purple" />
          <NotificationCard text={"New Request"} number={40} color="green" />
          <NotificationCard text={"Rejected"} number={3} color="orange" />
          <NotificationCard text={"Pending"} number={15} color="yellow" />
        </div>
        <div className="mt-9">
          <div className="text-xl flex gap-3">
            Leave Approval
            <span className="text-lg text-orange-400 flex gap-1 items-center">
              pending
            </span>
          </div>
          <div className="">
            {/* detailcard */}
            <div className="grid grid-cols-2 gap-9 my-6">
              {employee.map((employee, idx) => {
                return (
                  <div key={idx} className="shadow-xl rounded-md border">
                    <EmployeeCard
                      handleOpenModal={handleOpenModal}
                      employee={employee}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveAppllication;

const NotificationCard = ({
  text,
  number,
  color,
}: {
  color: string;
  text: string;
  number: number;
}) => {
  return (
    <div className="flex gap-3 h-[70px] max-w-[300px]">
      <div className={`notification-card ${color} h-full w-[6px]`}></div>
      <div className="flex flex-col my-auto gap-1">
        <p className="text-[#333333] opacity-70  font-semibold text-[14px]">
          {text}
        </p>
        <span className={`notification-text ${color} text-2xl`}>{number}</span>
      </div>
    </div>
  );
};

const EmployeeCard = ({
  employee,
  handleOpenModal,
}: {
  employee: any;
  handleOpenModal: (record:any) => void;
}) => {
  const { image, name, code, leaveType, description, dateFrom, dateTo } =
    employee;
  return (
    <div>
      <div className="px-6 py-6 flex flex-col gap-6 ">
        {/* Upper */}
        <div className="flex justify-between">
          <div className="flex gap-6">
            <div>
              <img
                className="h-[50px] w-[50px] object-cover rounded-full"
                src={image}
                alt=""
              />
            </div>
            <div className="flex flex-col  ">
              <p className="text-[16px] font-semibold opacity-70 text-[#333333]">
                {name}
              </p>
              <p className="text-[14px] font-semibold opacity-70 text-[#333333]">
                {code}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <p className="text-[14px] font-semibold opacity-70 text-[#333333]">
              {leaveType}
            </p>
            <p className="text-[14px] font-semibold opacity-70 text-[#333333]">
              3days
            </p>
          </div>
        </div>
        {/* lower */}
        <div className="flex justify-between items-end">
          <div>
            <h6 className="font-semibold text-[20px]">{description}</h6>
            <div className="flex items-center justify-start">
              <p>
                {dateFrom} <span>- </span>
                {dateTo}
              </p>
            </div>
          </div>
          <div className="flex gap-9 items-center">
            <Button state="primary">Deny</Button>
            <Button type="filled" state="primary">
              Approve
            </Button>
            <p
              className="text-blue-500 pr-6 hover:cursor-pointer hover:underline hover:text-purple-400"
              onClick={()=>{handleOpenModal(employee)}}
            >
              Detail
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
