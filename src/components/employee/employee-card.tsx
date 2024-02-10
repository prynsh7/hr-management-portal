import React from 'react'
interface InfoCardProps {
    label: string;
    value: string;
}

const EmployeeCard: React.FC<InfoCardProps> = ({ label, value }) => {

    return (
        <div className='font-semibold text-[14px] py-[10px]'>
            <h1 className='text-[#333333] opacity-70'>{label}</h1>
            <h1 className='text-[#333333] opacity-90'>{value}</h1>
        </div>
    );
};

export default EmployeeCard