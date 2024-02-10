import React, { useState } from "react";
import Table from "../../components/common/table/table";
import Header from "../../components/common/header/header";
import { FaPlus } from "react-icons/fa";
import PayrollModal from "../../components/payroll/payroll-modal";
import SalaryAdjustmentModal from "../../components/payroll/salary-adjustment-modal";

type Props = {}
interface DataType {
    key: React.Key;
    effective_date: number;
    basic_salary: number;
    remarks: string;
}

const SalaryAdjustment = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleCloseModal = () => setIsOpen(false);
    const handleOpenModal = () => setIsOpen(true);

    const dataSource = [
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
        {
            effective_date: "12/12/2023",
            basic_salary: "50000",
            remarks: "Lorem Ipsum simply dummy",
            deductions: "5000",
            bonus: "5000",
            saturatory_contributions: "5000",
        },
    ];

    const columns = [
        {
            title: "Effective Date",
            dataIndex: "effective_date",
            key: "effective_date",
        },
        {
            title: "Basic Salary",
            dataIndex: "basic_salary",
            key: "basic_salary",
        },
        {
            title: "Remarks",
            dataIndex: "remarks",
            key: "remarks",
        },
        {
            title: "Deductions",
            dataIndex: "deductions",
            key: "deductions",
        },
        {
            title: "Bonus",
            dataIndex: "bonus",
            key: "bonus",
        },
        {
            title: "Saturatory Contributions",
            dataIndex: "saturatory_contributions",
            key: "saturatory_contributions",
        },
    ]


    const breadcrumbItems = ["Payroll", "Salary Adjustment"];
    return (
        <div>
            <SalaryAdjustmentModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                onSubmit={handleCloseModal}
                heading="Add New Salary Adjustment"
            />
            <Header
                heading="Salary Adjustment"
                breadcrumbItems={breadcrumbItems}
                icon={<FaPlus />}
                primaryActionText="Add"
                onPrimaryActionClick={handleOpenModal}
            />
            <div className="mt-6 flex flex-col items-end">
                <Table className="w-full" dataSource={dataSource} columns={columns} />
            </div>
        </div>
    )
}

export default SalaryAdjustment