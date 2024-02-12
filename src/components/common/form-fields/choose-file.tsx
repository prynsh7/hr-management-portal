import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

interface Props {
  label:string,
  btnText: string;
  isRequired: boolean;
}

const ChooseFile: React.FC<Props> = ({ btnText,label,isRequired }) => {
  const props: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div >
      {label && (
        <label className="text-[#333333] opacity-70  font-semibold text-[14px]" htmlFor="">
          {label}{" "}
          {isRequired && <span className="text-red-500 font-bold">*</span>}
        </label>
      )}
      <div className='border w-full rounded-[8px] h-[40px] flex items-center border-[#333333]/20 hover:border-blue-500 px-3 py-1'>
        <Upload {...props}>
      <Button>{btnText}</Button>
    </Upload>
      </div>
      
    </div>
    
  );
};

export default ChooseFile;
