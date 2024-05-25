import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./CustomersTable.css";

function createData(name, email, phoneNumber, trackingId) {
  return { name, email, phoneNumber, trackingId };
}

const rows = [
  createData("John Doe", "john.doe@gmail.com", "+1234567890", 18908425),
  createData("Jane Smith", "jane.smith@gmail.com", "+1987654321", 18908426),
  createData("Alice Johnson", "alice.johnson@gmail.com", "+1122334455", 18908427),
  createData("Bob Brown", "bob.brown@gmail.com", "+1555666777", 18908428),
  createData("Charlie Davis", "charlie.davis@gmail.com", "+1443322110", 18908429),
  createData("Eve White", "eve.white@gmail.com", "+1777222333", 18908430),
  createData("Frank Black", "frank.black@gmail.com", "+1666555444", 18908431),
  createData("Grace Green", "grace.green@gmail.com", "+1999777666", 18908432),
  createData("Hank Blue", "hank.blue@gmail.com", "+1222999888", 18908433),
  createData("Ivy Red", "ivy.red@gmail.com", "+1333111222", 18908434),
  createData("Jack Purple", "jack.purple@gmail.com", "+1444222111", 18908435),
  createData("Kara Yellow", "kara.yellow@gmail.com", "+1777333444", 18908436),
  createData("Leo Pink", "leo.pink@gmail.com", "+1888444333", 18908437),
  createData("Mona Orange", "mona.orange@gmail.com", "+1999555222", 18908438),
  createData("Nina Violet", "nina.violet@gmail.com", "+1666444555", 18908439),
  createData("Oscar Grey", "oscar.grey@gmail.com", "+1222111999", 18908440),
  createData("Paula Silver", "paula.silver@gmail.com", "+1333888999", 18908441),
  createData("Quinn Gold", "quinn.gold@gmail.com", "+1555999888", 18908442),
  createData("Rick Copper", "rick.copper@gmail.com", "+1888333666", 18908443),
  createData("Sara Bronze", "sara.bronze@gmail.com", "+1999222111", 18908444)
];

export default function CustomersTable() {
  return (
    <div className="Customers_Table">
      <h3>Tất cả khách hàng</h3>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          maxHeight: "calc(100vh - 8rem)",
          marginTop: "1rem",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Số điện thoại</TableCell>
              <TableCell align="left">Mã khách hàng</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.trackingId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell style={{ color: "green" }} align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phoneNumber}</TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left" className="details">
                  Chi tiết
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
