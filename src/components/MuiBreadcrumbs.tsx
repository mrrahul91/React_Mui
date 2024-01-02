import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={2}
        itemsAfterCollapse={1}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text_primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
