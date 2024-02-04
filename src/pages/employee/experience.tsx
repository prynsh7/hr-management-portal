import React from 'react'
import DatePicker from '../../components/common/form-fields/date-picker'
import Input from '../../components/common/form-fields/input'
import Button from '../../components/common/partial/button'

interface ExperienceProps {
    setTab: React.Dispatch<React.SetStateAction<string>>; // Adjust the type based on your setTab implementation
  }
const Experience:React.FC<ExperienceProps> = ({setTab}) => {
  return (
    <div className='border rounded-xl mt-6 flex flex-col justify-end items-end'>
    <div className='pt-6 px-6 grid grid-cols-2 gap-6 w-full'>
      <div>
          <label htmlFor="employer">
              Employer
          </label>
          <Input
          type='text' placeholder='Employer'
          />
      </div>
      <div>
          <label htmlFor="jobtitle">
              Job Title
          </label>
          <Input
          type='text' placeholder='Job Title'
          />
      </div>
      <div>
          <label htmlFor="from">
              From
          </label>
          <DatePicker/>
      </div>
      <div>
          <label htmlFor="to">
              To
          </label>
          <DatePicker/>

      </div>
      <div>
          <label htmlFor="duration">
              Duration
          </label>
          <Input
          type='text' placeholder='Duration'
          />
      </div>
    </div>
    <Button type='filled' state='primary' onClick={()=>{setTab('document')}} className='m-6 px-9 py-3'>Next</Button>

  </div>
  )
}

export default Experience
