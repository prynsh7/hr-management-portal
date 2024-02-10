import React, { useEffect, useState } from 'react';
import EditButton from '../../components/common/edit-button/edit-button';
import EditableField from '../../components/common/editable-input/editable-input';

interface BasicProps {
    setTab: React.Dispatch<React.SetStateAction<string>>;
}

const initialFieldsState = {
    'first Name': 'Aditya',
    'last Name': 'Anand',
    'email': 'adityaanand1245@gmail.com',
    'mobile Number': '8651439657',
    'department': 'ECE',
    'job Position': 'Frontend Developer',
    'date Of Birth': '19-12-2002'
};

const Basic: React.FC<BasicProps> = ({ setTab }) => {
    const [edit, setEdit] = useState(false);
    const [fields, setFields] = useState(initialFieldsState);

    const handleFieldChange = (fieldName: string, value: string | number) => {
        setFields({ ...fields, [fieldName]: value });
    };

    

    return (
        <div>
            <div className='flex justify-end mr-2'>
                <EditButton edit={edit} setEdit={setEdit} />
            </div>
            <div className='mt-6'>
                <div className='border rounded-xl flex flex-col justify-end items-end'>
                    <div className='w-full'>
                        <div className='p-4 grid grid-cols-3 gap-2 w-full'>
                            {Object.entries(fields).map(([fieldName, fieldValue]) => (
                                <EditableField
                                    key={fieldName}
                                    label={fieldName.replace(/^\w/, (c) => c.toUpperCase())}
                                    placeholder={`Enter ${fieldName.replace(/^\w/, (c) => c.toUpperCase())}`}
                                    value={fieldValue}
                                    onChange={(value) => handleFieldChange(fieldName, value)}
                                    edit={edit}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basic;
