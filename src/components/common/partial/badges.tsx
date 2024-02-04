import React, { useState } from 'react'
import { Badge, Space } from 'antd';

type Props = {}

const StatusToggler = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <Badge className='bg-[#52c41a] font-semibold bg-opacity-30 py-[4px] px-[14px] rounded-[32px]' status="success" text="Active" />
        <Badge className='bg-[#ff4d4f] font-semibold bg-opacity-30 py-[2px] px-[15px] rounded-[32px]' status="error" text="Inactive" />
        <Badge className='bg-[#1677ff] font-semibold bg-opacity-30 py-[2px] px-[15px] rounded-[32px]' status="processing" text="Pending" />
      </div>
    </div>
  )
}

export default StatusToggler