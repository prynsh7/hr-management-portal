import React from "react";
import { DatePicker as DatePick } from "antd";

type Props = {};

const DatePicker = (props: any) => {
  return <DatePick className="w-full mt-1 py-2" {...props}  />;
};

export default DatePicker;