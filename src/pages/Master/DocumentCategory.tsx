import React, { useState } from 'react'
import Modal from '../../components/master/documentcatgory-modal';
import Heading from '../../components/common/partial/heading';
import Button from '../../components/common/partial/button';
import Table from '../../components/common/table/table';
import Breadcrumb from '../../components/common/bredcrumb';

type Props ={}
interface DataType {
    key: React.Key;
    title: string;
    code: Number;
    description: string;
}

const DocumentCategory = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => setIsOpen(false)
    const handleOpenModal = () => setIsOpen(true)
      
    const dataSource=[
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,

            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
        {
            title:"hhhh",
            code:4456666,
            description:"hhhhheheeheheeh"
        },
    ]
    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "Action",
            render: (record: DataType) => (
              <div>
                <Button state="primary" className="border" onClick={handleOpenModal}>
                  <div className="flex gap-2 items-center">Edit</div>
                </Button>
              </div>
            ),
          },
    ]
    const breadcrumbItems = ["Home", "Document Category", "smmmhx"];
    
    return (
        <div>
   <Modal isOpen={isOpen} onClose={handleCloseModal} onSubmit={handleCloseModal} />

    <Heading type='h4'>Document Category</Heading>
        <Breadcrumb items={breadcrumbItems} />
    <div className='mt-6 flex flex-col items-end'>
      <Button type='filled' className='mb-4' onClick={handleOpenModal}  state="primary">
        Add +
      </Button>
      <Table className='w-full' dataSource={dataSource} columns={columns} />
    </div>
  </div>
);
}

export default DocumentCategory
