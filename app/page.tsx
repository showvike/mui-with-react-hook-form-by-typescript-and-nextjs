"use client";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  dobYear: string;
  dobMonth: string;
  dobDay: string;
};

export default function Home() {
  const { handleSubmit, control, setValue } = useForm<FormValues>({
    defaultValues: {
      dobYear: "",
      dobMonth: "",
      dobDay: "",
    },
  });

  const onSubmit = (data: FormValues): void =>
    console.log(new Date(`${data.dobYear}-${data.dobMonth}-${data.dobDay}`));

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange } }) => (
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            onChange={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="dobYear"
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <InputLabel id="dobYearLabel">Year</InputLabel>
            <Select
              labelId="dobYearLabel"
              id="dobYear"
              label="Year"
              onChange={onChange}
              value={value}
            >
              <MenuItem value={1999}>1999</MenuItem>
              <MenuItem value={1998}>1998</MenuItem>
              <MenuItem value={1997}>1997</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="dobMonth"
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <InputLabel id="dobMonthLabel">Month</InputLabel>
            <Select
              labelId="dobMonthLabel"
              id="dobMonth"
              label="Month"
              onChange={onChange}
              value={value}
            >
              {Array(12)
                .fill(0)
                .map((month, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="dobDay"
        render={({ field: { onChange, value } }) => (
          <FormControl>
            <InputLabel id="dobDayLabel">Day</InputLabel>
            <Select
              labelId="dobDayLabel"
              id="dobDay"
              label="Day"
              onChange={onChange}
              value={value}
            >
              {Array(31)
                .fill(0)
                .map((day, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {index + 1}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      />
      <Button variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
}
