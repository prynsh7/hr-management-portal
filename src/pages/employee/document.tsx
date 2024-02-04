import React from 'react'
import Input from '../../components/common/form-fields/input'
import Button from '../../components/common/partial/button'
import { Navigate } from 'react-router-dom'

const Document = () => {
  return (
    <div className='border rounded-xl mt-6 flex flex-col justify-end items-end'>
    <div className='pt-6 px-6 grid grid-cols-2 gap-6 w-full'>
      <div>
          <label htmlFor="documenttype">
              Document Type
          </label>
          <Input
          type='text' placeholder='Document Type'
          />
      </div>
      <div>
          <label htmlFor="documnetid">
            Documnet Id
          </label>
          <Input
          type='text' placeholder='Documnet Id'
          />
      </div>
      <div>
          <label htmlFor="attachment">
              Attachment
          </label>
          <Input
          type='text' placeholder='Email'
          />
      </div>
    </div>
    <Button type='filled' state='primary' className='m-6 px-9 py-3'>Submit</Button>

  </div>
  )
}

export default Document
