import React, { useState } from "react";
import Header from "../../components/common/header/header";
import { FaPlus } from "react-icons/fa";
import LeaveApplicationModal from "../../components/leave/leave-application-modal";
import Button from "../../components/common/partial/button";

const LeaveAppllication = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);
  const employee = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "nitin",
      code: "25990",
      leavetype: "Sick Leave",
      description: "Highfever",
      datefrom: "14 november",
      dateto: "17 november",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "Priyansh",
      code: "25450",
      leavetype: "Casual",
      description: "Trip to Thailand ",
      datefrom: "14 november",
      dateto: "17 november",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "Appu",
      code: "25850",
      leavetype: "Casual",
      description: "Sister's Wedding",
      datefrom: "14 november",
      dateto: "17 november",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "Himkant",
      code: "28690",
      leavetype: "Sick Leave",
      description: "Loose-Motion",
      datefrom: "14 november",
      dateto: "17 november",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3HFVnkYFJ_OIogo__Qv58bmhwRqZJcQhOA&usqp=CAU",
      name: "Madhukant",
      code: "25990",
      leavetype: "Sick Leave",
      description: "Maleria",
      datefrom: "14 november",
      dateto: "17 november",
    },
  ];

  const breadcrumbItems = ["Home", "Leave Application"];

  return (
    <div>
      <LeaveApplicationModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
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
        <div className="flex gap-4 mb-12">
          {/* card */}
          <div className="flex gap-3 h-[70px] w-[300px]">
            <div className="bg-purple-400 h-full w-[6px]  "></div>
            <div className="flex flex-col my-auto gap-1">
              <p className="text-[#333333] opacity-70  font-semibold text-[14px]">
                Total Request
              </p>
              <span className="text-2xl text-purple-400">53</span>
            </div>
          </div>
          <div className="flex gap-3 h-[70px] w-[300px]">
            <div className="bg-green-400 h-full w-[6px]  "></div>
            <div className="flex flex-col my-auto gap-1">
              <p className="text-[#333333] opacity-70  font-semibold text-[14px]">
                New Request
              </p>
              <span className="text-2xl text-green-400">40</span>
            </div>
          </div>
          <div className="flex gap-3 h-[70px] w-[300px]">
            <div className="bg-orange-400 h-ful w-[6px] "></div>
            <div className="flex flex-col my-auto gap-1">
              <p className="text-[#333333] opacity-70  font-semibold text-[14px]">
                Rejected
              </p>
              <span className="text-2xl text-orange-400">3</span>
            </div>
          </div>
          <div className="flex gap-3 h-[70px] w-[300px]">
            <div className="bg-yellow-400 h-full w-[6px]  "></div>
            <div className="flex flex-col my-auto gap-1">
              <p className="text-[#333333] opacity-70  font-semibold text-[14px]">
                Pending
              </p>
              <span className="text-2xl text-yellow-400">15</span>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="text-xl ">
            Leave Approval <span>pending</span>
          </h3>
          <div className="">
            {/* detailcard */}
            <div className="grid grid-cols-2 gap-9 my-6">
              {employee.map((employee, idx) => {
                const {
                  image,
                  name,
                  code,
                  leavetype,
                  description,
                  datefrom,
                  dateto,
                } = employee;
                return (
                  <div key={idx} className="shadow-xl rounded-md border">
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
                            <p className="text-[16px] font-semibold opacity-70 text-[#333333]">{name}</p>
                            <p className="text-[14px] font-semibold opacity-70 text-[#333333]">{code}</p>
                          </div> 
                        </div>

                        <div className="flex items-start gap-3">
                          <p className="text-[14px] font-semibold opacity-70 text-[#333333]">{leavetype}</p>
                          <p className="text-[14px] font-semibold opacity-70 text-[#333333]">3days</p>
                        </div>
                      </div>
                      {/* lower */}
                      <div className="flex justify-between items-end">
                        <div>
                          <h6 className="font-semibold text-[20px]">{description}</h6>
                          <div className="flex items-center justify-start">
                            <p>{datefrom} <span>- </span>
                            {dateto}</p>
                          </div>
                        </div>
                        <div className="flex gap-9 items-center">
                          <Button state="primary">Deny</Button>
                          <Button type="filled" state="primary">
                            Approve
                          </Button>
                          <p
                            className="text-blue-500 pr-6 hover:cursor-pointer hover:underline hover:text-purple-400"
                            onClick={handleOpenModal}
                          >
                            Detail
                          </p>
                        </div>
                      </div>
                    </div>
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
