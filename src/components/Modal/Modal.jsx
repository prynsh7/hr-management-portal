import React from 'react'
import {Modal as Mod} from 'antd';
import Button from '../partial/Button'


const Modal = ({
    children,
    isOpen,
    handleSubmit,
    handleCancel,
    width
}) => {
  return (
    <Mod width={width} footer={null} open={isOpen} onOk={handleSubmit} onCancel={handleCancel}>
        {children}
        <div className='flex justify-between mt-[14px]'>
        <Button onClick={handleCancel} type='primary' state="outlined">Close</Button>
        <Button onClick={handleSubmit} state="primary" type="filled">Save change</Button>
        </div>
    </Mod>
  )
}

export default Modal