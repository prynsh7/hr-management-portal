import React from 'react';
import { Modal as Mod } from 'antd';
import Button from '../partial/button';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleSubmit: () => void;
  handleCancel: () => void;
  width: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  handleSubmit,
  handleCancel,
  width,
}) => {
  return (
    <Mod width={width} footer={null} visible={isOpen} onOk={handleSubmit} onCancel={handleCancel}>
      {children}
      <div className='flex justify-between mt-[14px]'>
        <Button onClick={handleCancel} state='primary'>
          Close
        </Button>
        <Button onClick={handleSubmit} state='primary'>
          Save change
        </Button>
      </div>
    </Mod>
  );
};

export default Modal;
