import React, { useState } from 'react'
import Button from '../../components/common/partial/button'
import EmployeDocumentModal from '../../components/master/employee-document-modal'
import { FaPlus } from 'react-icons/fa'

const Document = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  const documentData = [
    {
      documentType: 'Xyz',
      documentId: '987625434',
      attachment: 'xyz'
    },
    {
      documentType: 'Xyz',
      documentId: '987625434',
      attachment: 'xyz'
    },
    {
      documentType: 'Xyz',
      documentId: '987625434',
      attachment: 'xyz'
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
      <div className='border px-4 mt-6 rounded-xl shadow-md'>
        {documentData.map((document, index) => (
          <div key={index} className='border rounded-xl my-4 flex flex-col justify-end items-end'>
            <div className='p-4 grid grid-cols-3 w-full'>
              <div className='font-semibold text-[14px] py-[10px]'>
                <h1 className='text-[#333333] opacity-70 '>Document Type</h1>
                <h1 className='text-[#333333] opacity-90'>{document.documentType}</h1>
              </div>
              <div className='font-semibold text-[14px] py-[10px]'>
                <h1 className='text-[#333333] opacity-70 '>Document Id</h1>
                <h1 className='text-[#333333] opacity-90'>{document.documentId}</h1>
              </div>
              <div className='font-semibold text-[14px] py-[10px]'>
                <h1 className='text-[#333333] opacity-70 '>Attachment</h1>
                <h1 className='text-[#333333] opacity-90'>{document.attachment}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Document
