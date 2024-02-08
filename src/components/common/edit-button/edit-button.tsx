import React from 'react';
import Button from '../../common/partial/button';

interface EditButtonProps {
    edit: boolean;
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditButton: React.FC<EditButtonProps> = ({ edit, setEdit }) => {
    return (
        <div className='mr-2'>
            {edit ? (
                <Button className="px-[10px] py-[6px] rounded" onClick={() => setEdit(false)} type='outlined' state='primary'>
                    Save
                </Button>
            ) : (
                <Button className="px-[10px] py-[6px] rounded" onClick={() => setEdit(true)} type='filled' state='primary'>
                    Edit details
                </Button>
            )}
        </div>
    );
};

export default EditButton;