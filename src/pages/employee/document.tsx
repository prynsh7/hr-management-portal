import React, { useState } from 'react'
import Input from '../../components/common/form-fields/input'
import Button from '../../components/common/partial/button'
import { Navigate } from 'react-router-dom'
import EmployeDocumentModal from '../../components/master/employee-document-modal'
import { FaPlus } from 'react-icons/fa'

const Document = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => setIsOpen(false);
  const handleOpenModal = () => setIsOpen(true);

  return (
    <div className='border rounded-xl mt-6 flex flex-col justify-end items-end'>
      <EmployeDocumentModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
      <div className='w-full '>
        <div className='flex justify-between items-center border-b w-full py-[8px]'>
          <h1 className='text-[#333333] opacity-70 font-bold text-[14px] ml-2'>Document</h1>
          <div className='mr-2'>
            <Button type='filled' state='primary'
              className="px-[10px] py-[6px] rounded"
              onClick={handleOpenModal}
            >
              <FaPlus className='mr-[4px]' />
              Add more
            </Button>
          </div>
        </div>
        <div className='py-6 px-6 grid grid-cols-3 gap-4 w-full'>
          <div className='font-semibold text-[14px] py-[10px]'>
            <h1 className='text-[#333333] opacity-70 '>Document Type</h1>
            <h1 className='text-[#333333] opacity-90'>Xyz</h1>
          </div>
          <div className='font-semibold text-[14px] py-[10px]'>
            <h1 className='text-[#333333] opacity-70 '>Document Id</h1>
            <h1 className='text-[#333333] opacity-90'>987625434</h1>
          </div>
          <div className='font-semibold text-[14px] py-[10px]'>
            <h1 className='text-[#333333] opacity-70 '>Attachment</h1>
            <h1 className='text-[#333333] opacity-90'>xyz</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Document
