import React from 'react'
import Input from '../../components/common/form-fields/input'
import Button from '../../components/common/partial/button';

interface EducationProps {
    setTab: React.Dispatch<React.SetStateAction<string>>; // Adjust the type based on your setTab implementation
  }
const Education: React.FC<EducationProps> = ({setTab}) => {
  return (
    <div className='border rounded-xl mt-6 flex flex-col justify-end items-end'>
    <div className='pt-6 px-6 grid grid-cols-2 gap-6 w-full'>
      <div>
          <label htmlFor="universityname">
              University Name
          </label>
          <Input
          type='text' placeholder='University Name'
          />
      </div>
      <div>
          <label htmlFor="feildofstudy">
              Feild of Study
          </label>
          <Input
          type='text' placeholder='Field of Study'
          />
      </div>
      <div>
          <label htmlFor="degree">
              Degree
          </label>
          <Input
          type='text' placeholder='Degree'
          />
      </div>
    </div>
    <Button type='filled' state='primary' onClick={()=>{setTab('experience')}} className='m-6 px-9 py-3'>Next</Button>

  </div>
  )
}

export default Education;
