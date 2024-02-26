import React, { useState } from "react";
import Header from "../../components/common/header/header";
import { FaPlus } from "react-icons/fa";
import NoticeModal from "../../components/Team/notice-modal";
import Chat from "../../components/Team/chat";
import { useNavigate } from "react-router-dom";

const Notice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);
  
  const topic = [
    {
      id:1,
      title:"leave for xyz",
      description:"we are off on hhh for some reasons",
    },
    {
      id:2,
      title:"leave for xyz",
      description:"we are off on hhh for some reasons",
    },
    {
      id:3,
      title:"leave for xyz",
      description:"we are off on hhh for some reasons",
    },
  ];

  const breadcrumbItems = ["Home", "Notice"];

  return (
    <div>
      <NoticeModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <Header
        heading="Notice"
        breadcrumbItems={breadcrumbItems}
        icon={<FaPlus />}
        primaryActionText="Add"
        onPrimaryActionClick={handleOpenModal}
      />
      <div className="grid grid-cols-2 gap-6 mt-9">
          {topic.map((topic,idx)=>{
            return <div key={idx}>
                <Card topic={topic} handleOpenModal={handleOpenModal}/>
            </div>
          })}
      </div>
    </div>
  );
};

export default Notice;

const Card = ({
  topic,
  handleOpenModal
}: {
  topic: any;
  handleOpenModal:() => void
}) => {
  const{title,description}=topic
  return (
   <div onClick={handleOpenModal} className="shadow-lg border p-9 rounded-lg">
      <div>
        <h6 className="text-[20px] font-semibold">{title}</h6>
      </div>
      <div>
        <p>{description}</p>
      </div>
   </div>
  );
};
