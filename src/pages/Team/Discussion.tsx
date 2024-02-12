import React, { useState } from "react";
import Header from "../../components/common/header/header";
import { FaPlus } from "react-icons/fa";
import DiscussionModal from "../../components/Team/discussion-modal";
import Chat from "../../components/Team/chat";
import { useNavigate } from "react-router-dom";

const Discussion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);
  
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/discussion/id");
  };
  const topic = [
    {
      id:1,
      title:"Catalyst",
      description:"Prepration for Component",
    },
    {
      id:2,
      title:"FrontEnd Department",
      description:"working on design",
    },
    {
      id:3,
      title:"BackEnd Department",
      description:"working on backend of nnn project",
    },
  ];

  const breadcrumbItems = ["Home", "Discussion"];

  return (
    <div>
      <DiscussionModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <Header
        heading="Discussion"
        breadcrumbItems={breadcrumbItems}
        icon={<FaPlus />}
        primaryActionText="Add"
        onPrimaryActionClick={handleOpenModal}
      />
      <div className="grid grid-cols-2 gap-6 mt-9">
          {topic.map((topic,idx)=>{
            return <div key={idx}>
                <Card topic={topic} navigateTo={navigateTo}/>
            </div>
          })}
      </div>
    </div>
  );
};

export default Discussion;

const Card = ({
  topic,
  navigateTo
}: {
  topic: any;
  navigateTo: () => void;
}) => {
  const{title,description}=topic
  return (
   <div onClick={navigateTo} className="shadow-lg border p-9 rounded-lg">
      <div>
        <h6 className="text-[20px] font-semibold">{title}</h6>
      </div>
      <div>
        <p>{description}</p>
      </div>
   </div>
  );
};
