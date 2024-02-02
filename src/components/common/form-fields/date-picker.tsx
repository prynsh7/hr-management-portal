import React from "react";
import { DatePicker as DatePick } from "antd";
import moment from "moment";


type Props = {
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  height?: number;
  label?: String;
};


const DatePicker = ({
  value,
  onChange,
  placeholder,
  className,
  name,
  type,
  id,
  disabled,
  height,
  label,
  ...args
}: Props) => {

  return (
    <>
      {label && (
        <label className="text-[#333333] opacity-70  font-semibold text-[14px]" htmlFor="">
          {label}{" "}
        </label>
      )}

      <DatePick
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full mt-1 py-2 ${className} ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        name={name}
        id={id}
        disabled={disabled}
        {...args}
      />
    </>
  );
};

export default DatePicker;