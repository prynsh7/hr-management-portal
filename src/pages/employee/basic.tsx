import React from 'react'
import Input from '../../components/common/form-fields/input'
import DatePicker from '../../components/common/form-fields/date-picker'
import Button from '../../components/common/partial/button'

interface BasicProps {
    setTab: React.Dispatch<React.SetStateAction<string>>; // Adjust the type based on your setTab implementation
  }
const Basic: React.FC<BasicProps> = ({setTab}) => {
  return (
    <div className='border rounded-xl mt-6 flex flex-col justify-end items-end'>
      <div className='pt-6 px-6 grid grid-cols-2 gap-6 w-full'>
        <div>
            <label htmlFor="firstname">
                First Name
            </label>
            <Input
            type='text' placeholder='Firstname'
            />
        </div>
        <div>
            <label htmlFor="Lastname">
                Last Name
            </label>
            <Input
            type='text' placeholder='Lastname'
            />
        </div>
        <div>
            <label htmlFor="email">
                Email
            </label>
            <Input
            type='text' placeholder='Email'
            />
        </div>
        <div>
            <label htmlFor="mobilenumber">
                Mobile Number
            </label>
            <Input
            type='text' placeholder='Mobile Number'
            />
        </div>
        <div>
            <label htmlFor="department">
                Department
            </label>
            <Input
            type='text' placeholder='Department'
            />
        </div>
        <div>
            <label htmlFor="jobposition">
                Job Position
            </label>
            <Input
            type='text' placeholder='Jobposition'
            />
        </div>
        <div>
            <label htmlFor="joiningdate">
                Joining Date
            </label>
            <DatePicker/>
        </div>
      </div>
      <Button type='filled' state='primary' onClick={()=>{setTab('education')}} className='m-6 px-9 py-3'>Next</Button>
    </div>
  )
}

export default Basic
