import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

export default function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(','): value)
  }
  return (
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size="small"
        color="secondary"
        helperText='Please select your county'
        error
      >
        <MenuItem value="US">Usa</MenuItem>
        <MenuItem value="CA">Canada</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}
