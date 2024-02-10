import React from 'react';
import Input from '../../../components/common/form-fields/input';
import DatePicker from '../../../components/common/form-fields/date-picker';

interface EditableFieldProps {
    label: string;
    placeholder?: string;
    value?: string | number;
    type?: string;
    edit: boolean;
    onChange: (value: string | number) => void;
}

const EditableField: React.FC<EditableFieldProps> = ({ label, placeholder, value, type, edit, onChange }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            {edit ? (
                <div>
                    {type === 'date' ? (
                        <DatePicker label={label} />
                    ) : (
                        <Input
                            label={label}
                            placeholder={placeholder}
                            type={type}
                            value={String(value) ?? ''}
                            onChange={handleInputChange}
                        />
                    )}
                </div>
            ) : (
                <div className='font-semibold text-[14px] py-[10px]'>
                    <h1 className='text-[#333333] opacity-70'>{label}</h1>
                    <h1 className='text-[#333333] opacity-90'>{value}</h1>
                </div>
            )}
        </div>
    );
};

export default EditableField;
