import React from "react";
import { Stack, Badge } from "@mui/material";
import MuiIcon from '@mui/icons-material/Mail'
export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={9} color="primary">
        <MuiIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MuiIcon />
      </Badge>

      <Badge badgeContent={100} color="primary" max={999}>
        <MuiIcon />
      </Badge>

      <Badge variant='dot' color="primary" invisible={false}>
        <MuiIcon />
      </Badge>
    </Stack>
  );
};
