import { Stack, TextField, InputAdornment } from "@mui/material";
// import React from "react";
import { useState } from "react";

export default function MuiTextField() {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />

        <TextField
          label="Password"
          type="Password"
          helperText="Do not share your password with anyone"
          //  disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          inputProps={{
            startAdorment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="Weight"
          inputProps={{
            endAdorment: <InputAdornment position="end">KG</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}
