import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import dayjs from "dayjs";

export default function DatePickerMaterialUI({ value, onChange }) {
  let today = dayjs(); // Convert to Day.js instance
  let tomorrow = today.add(1, "day");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker textField={(params) => <TextField {...params} />} minDate={tomorrow} value={value} onChange={onChange} />
    </LocalizationProvider>
  );
}
