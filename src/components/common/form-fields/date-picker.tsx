import React from "react";
import { DatePicker as DatePick } from "antd";

type Props = {
  label: string;
  value?: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  className?: string;
};

const DatePicker = (props: Props) => {
  const { label, value, onChange, placeholder, className, ...rest } = props;

  return (
    <div className="flex flex-col">
      <label className="text-[#333333] opacity-70  font-semibold text-[14px]">{label}</label>
      <DatePick className="w-full mt-1 py-2"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest} />
    </div>
  );
};

export default DatePicker;
