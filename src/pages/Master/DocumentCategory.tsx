import React, { useState } from 'react'
import Modal from '../../components/master/documentcatgory-modal';
import Heading from '../../components/common/partial/heading';
import Button from '../../components/common/partial/button';
import Table from '../../components/common/table/table';
import Breadcrumb from '../../components/common/bredcrumb';
import { FaPlus, FaRegEdit } from "react-icons/fa";
import Header from '../../components/common/header/header';

type Props = {}
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

    const dataSource = [
        {
            key: '1',
            title: "Introduction to JavaScript",
            code: 101,
            description: "hhhhheheeheheeh"
        },
        {
            key: '2',
            title: "Web Development Basics",
            code: 202,
            description: "hhhhheheeheheeh"
        },
        {
            key: '3',
            title: "Advanced React Techniques",
            code: 303,
            description: "hhhhheheeheheeh"
        },
        {
            key: '4',
            title: "Node.js Backend Development",
            code: 404,
            description: "hhhhheheeheheeh"
        },
        {
            key: '5',
            title: "Data Structures and Algorithms",
            code: 505,
            description: "hhhhheheeheheeh"
        },
        {
            key: '6',
            title: "Responsive Web Design",
            code: 606,
            description: "hhhhheheeheheeh"
        },
        {
            key: '7',
            title: "Database Management with MongoDB",
            code: 707,
            description: "hhhhheheeheheeh"
        },
        {
            key: '8',
            title: "Building RESTful APIs",
            code: 808,
            description: "hhhhheheeheheeh"
        },
        {
            key: '9',
            title: "Testing Strategies in Software Development",
            code: 909,
            description: "hhhhheheeheheeh"
        },
        {
            key: '10',
            title: "Version Control with Git",
            code: 1010,
            description: "hhhhheheeheheeh"
        },

    ]

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            sorter: (a: DataType, b: DataType) => a.title.localeCompare(b.title),
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
            sorter: (a: DataType, b: DataType) => Number(a.code) - Number(b.code),
            sortDirections: ['ascend', 'descend'],
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
                        <div className="flex gap-2 items-center"><FaRegEdit size={17} /></div>
                    </Button>
                </div>
            ),
        },
    ]


    const breadcrumbItems = ["Home", "Document Category"];

    return (
        <div>
            <Modal isOpen={isOpen} onClose={handleCloseModal} onSubmit={handleCloseModal} />
            <Header
                heading="Document Category"
                breadcrumbItems={breadcrumbItems}
                icon={<FaPlus />}
                primaryActionText="Add"
                onPrimaryActionClick={handleOpenModal}
            />
            <div className='mt-6 flex flex-col items-end'>
                <Table className='w-full' dataSource={dataSource} columns={columns} />
            </div>
        </div>
    );
}

export default DocumentCategory
