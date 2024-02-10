import Modal from '../common/modal/modal'
import Input from '../common/form-fields/input'
import InputArea from '../common/form-fields/input-area'


const DepartmentModal = ({ isOpen, onSubmit, onClose }: any) => {


    return (
        <Modal width={'50%'} isOpen={isOpen} handleSubmit={onSubmit} handleCancel={onClose} cancelButtonText='Close' submitButtonText="Add">
            <div>
                <div className='border-b-2 w-full mb-6'>
                    <h1 className='text-[#333333] opacity-70 font-semibold text-[14px] pb-3'>Add New Document Category</h1>
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <Input
                            label={"Title"}
                            placeholder='Title'
                            type='text'
                            isRequired
                        />
                    </div>
                    <div>
                        <Input
                            placeholder='Code'
                            type='text'
                            label={"Code"}
                            isRequired
                        />
                    </div>
                    <div>
                        <InputArea
                            label={"Description"}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default DepartmentModal
