import React, { useState } from "react";
import Header from "../../components/common/header/header";
import { FaPlus } from "react-icons/fa";
import NoticeModal from "../../components/Team/notice-modal";

const Notice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () =>{ setIsOpen(false);setSelectedData(undefined)}
  const handleOpenModal = (record?:any) =>{ setIsOpen(true); 
  record && setSelectedData(record)}
  const [selectedData,setSelectedData]=useState(undefined)
  const handleSubmit = (newData:any) => {
    const dataIndex = topic.findIndex((item) => item.id === newData.id);

  if (dataIndex !== -1) {
    const updatedTopic = [...topic];
    updatedTopic[dataIndex] = newData;
    setTopic(updatedTopic);
  } else {
    setTopic(prevTopic => [...prevTopic, newData]);
  }
  handleCloseModal();
  };
  const [topic,setTopic] = useState(
    [
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
  ]);

  const breadcrumbItems = ["Home", "Notice"];

  return (
    <div>
      <NoticeModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        topic={topic}
        selectedData={selectedData}
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
  handleOpenModal:(record:any) => void
}) => {
  const{title,description}=topic
  return (
   <div onClick={()=>{handleOpenModal(topic)}} className="shadow-lg border p-9 rounded-lg">
      <div>
        <h6 className="text-[20px] font-semibold">{title}</h6>
      </div>
      <div>
        <p>{description}</p>
      </div>
   </div>
  );
};
