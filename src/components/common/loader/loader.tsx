import React, { FC } from 'react'
import { Oval } from 'react-loader-spinner'

interface LoadingProps {
  w?: string
  h?: string
}

export const Loading: FC<LoadingProps> = ({ w = '100%', h = '100%' }) => {
  return (
    <div
      style={{
        width: w,
        height: h,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Oval
        secondaryColor="white"
        color="#1890FF"
        height={82}
        width={82}
        strokeWidth={4}
      ></Oval>
    </div>
  )
}
