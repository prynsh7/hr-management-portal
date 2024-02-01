import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'


const DepartmentModal = ({isOpen, onSubmit, onClose}:any) => {

  return (
    <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonTxt='close' submitButtonText="Save Changes">
        <div className='border-b-2 w-full mb-6'>
          <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add Job Position</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <label className="text-[#333333] opacity-70 font-semibold text-[14px]">
              Enter Department Name
            </label>
            <Input placeholder="Name" type="text" />
          </div>
          <div>
            <label className="text-[#333333] opacity-70 font-semibold text-[14px]">
              Enter Code
            </label>
            <Input placeholder="Enter code" type="number" />
          </div>
        </div>
    </Modal>
  )
}

export default DepartmentModal
