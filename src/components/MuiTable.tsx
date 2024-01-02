import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&: last-child td, &: last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Andee",
    last_name: "Dell 'Orto",
    email: "adellorto0@spiegel.de",
    gender: "Female",
    ip_address: "72.46.252.14",
  },
  {
    id: 2,
    first_name: "Halette",
    last_name: "Flahive",
    email: "hflahive1@answers.com",
    gender: "Genderqueer",
    ip_address: "56.223.3.253",
  },
  {
    id: 3,
    first_name: "Cookie",
    last_name: "McPartlin",
    email: "cmcpartlin2@jugem.jp",
    gender: "Female",
    ip_address: "212.31.138.201",
  },
  {
    id: 4,
    first_name: "Dodi",
    last_name: "McGrae",
    email: "dmcgrae3@printfriendly.com",
    gender: "Female",
    ip_address: "216.175.148.157",
  },
  {
    id: 5,
    first_name: "Aundrea",
    last_name: "Martinuzzi",
    email: "amartinuzzi4@unicef.org",
    gender: "Polygender",
    ip_address: "33.49.48.70",
  },
  {
    id: 6,
    first_name: "Ulrich",
    last_name: "Ranahan",
    email: "uranahan5@europa.eu",
    gender: "Male",
    ip_address: "25.112.112.192",
  },
  {
    id: 7,
    first_name: "Roland",
    last_name: "Tomovic",
    email: "rtomovic6@noaa.gov",
    gender: "Male",
    ip_address: "111.59.161.212",
  },
  {
    id: 8,
    first_name: "Thorndike",
    last_name: "Battelle",
    email: "tbattelle7@fda.gov",
    gender: "Male",
    ip_address: "181.215.237.145",
  },
  {
    id: 9,
    first_name: "Toni",
    last_name: "Rylett",
    email: "trylett8@cafepress.com",
    gender: "Female",
    ip_address: "184.28.181.109",
  },
  {
    id: 10,
    first_name: "Emmott",
    last_name: "Gidden",
    email: "egidden9@liveinternet.ru",
    gender: "Male",
    ip_address: "140.182.131.133",
  },
];
