import React from 'react'
import { Badge } from 'antd';

type Props = {
  status: "success" | "error" | "processing",
  label: string
}

const Badges = (props: Props) => {
  const statusColorMap = {
    success: 'bg-[#52c41a]',
    error: 'bg-[#ff4d4f]',
    processing: 'bg-[#1677ff]'
  };

  // const statusColorMap = {
  //   success: 'bg-success',
  //   error: 'bg-error_light',
  //   processing: 'bg-secondary_light'
  // };

  return (
    <div className='flex flex-col gap-2'>
      <Badge
        className={`${statusColorMap[props.status]} font-semibold bg-opacity-30 py-[4px] px-[14px] rounded-[32px]`}
        status={props.status}
        text={props.label}
      />
    </div>
  )
}

export default Badges