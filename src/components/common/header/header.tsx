import React from 'react';
import Button from '../partial/button';
import Heading from '../partial/heading';
import Breadcrumb from "../../../components/common/bredcrumb";

interface HeaderProps {
    heading: string;
    breadcrumbItems: string[];
    primaryActionText: string;
    onPrimaryActionClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ heading, breadcrumbItems, primaryActionText, onPrimaryActionClick }) => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <Heading type="h4">{heading}</Heading>
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <Button
                type="filled"
                className="px-[24px] font-semibold"
                onClick={onPrimaryActionClick}
                state="primary"
            >
                {primaryActionText}
            </Button>

        </div>
    );
};
export default Header;
