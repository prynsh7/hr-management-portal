import React from 'react';
import { Modal as Mod } from 'antd';
import Button from '../partial/button';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleSubmit: () => void;
  handleCancel: () => void;
  width: string;
  submitButtonText: string;
  cancelButtonText: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  handleSubmit,
  handleCancel,
  width,
  cancelButtonText = "Close",
  submitButtonText = "Save Change"
}) => {
  return (
    <Mod width={width} footer={null} open={isOpen} onOk={handleSubmit} onCancel={handleCancel} >
      {children}
      <div className='flex gap-[20px] justify-end mt-[30px]'>
        <Button onClick={handleCancel} className='w-[120px]' state='primary'>
          {cancelButtonText}
        </Button>
        <Button onClick={handleSubmit} className='w-[120px]' type='filled' state='primary'>
         {submitButtonText}
        </Button>
      </div>
    </Mod>
  );
};

export default Modal;
