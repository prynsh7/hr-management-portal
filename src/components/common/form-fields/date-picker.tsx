import React from "react";
import { DatePicker as DatePick } from "antd";

type Props = {
  label: string;
  value?: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
};

const DatePicker = (props: Props) => {
  const { label, value, onChange, placeholder, className, isRequired, ...rest } = props;

  return (
    <>
      {label && (
        <label className="text-[#333333] opacity-70  font-semibold text-[14px]" htmlFor="">
          {label}{" "}
          {isRequired && <span className="text-red-500 font-bold">*</span>}
        </label>
      )}
      <div className="flex flex-col">
        <DatePick className="w-full mt-1 py-2"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest} />
      </div>
    </>
  );
};

export default DatePicker;
