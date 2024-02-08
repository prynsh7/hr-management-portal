import React from 'react'
import { Badge } from 'antd';

type Props = {
  status: "success" | "error" | "processing",
  label: string
}

const Badges = (props: Props) => {
  const statusColorMap = {
    success: '#52c41a',
    error: '#ff4d4f',
    processing: '#1677ff'
  };

  return (
    <div>
      <div className='flex flex-col gap-2'>
        <Badge 
          className={`bg-[${statusColorMap[props.status]}] font-semibold bg-opacity-30 py-[4px] px-[14px] rounded-[32px]`} 
          status={props.status} 
          text={props.label} 
        />
      </div>
    </div>
  )
}

export default Badges