import React, { useState } from 'react'
import Button from '../../components/common/partial/button'
import EmployeDocumentModal from '../../components/employee/employee-document-modal'
import { FaPlus } from 'react-icons/fa'
import EmployeeCard from '../../components/employee/employee-card'

const Document = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const documentData = [
    {
      'Document Type': 'Xyz',
      'Document Id': '987625434',
      'Attachment': 'xyz'
    },
    {
      'Document Type': 'Xyz',
      'Document Id': '987625434',
      'Attachment': 'xyz'
    },
    {
      'Document Type': 'Xyz',
      'Document Id': '987625434',
      'Attachment': 'xyz'
    },
  ];


  return (
    <div>
      <EmployeDocumentModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <div className='flex justify-end'>
        <Button type='filled' state='primary'
          className="px-[10px] py-[6px] rounded"
          onClick={handleOpenModal}
        >
          <FaPlus className='mr-[4px]' />
          Add more
        </Button>
      </div>
      {documentData.map((document, index) => (
        <div key={index} className='border rounded-xl my-4 flex flex-col justify-end items-end'>
          <div className='p-4 grid grid-cols-3 w-full'>
            {Object.entries(document).map(([key, value]) => (
              <EmployeeCard
              key={key}
                label={key}
                value={value}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Document
