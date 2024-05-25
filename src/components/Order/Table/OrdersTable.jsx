import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import format from "date-fns/format";
import "./OrdersTable.css";

function createData(orderId, name, trackingId, date, status) {
  return { orderId, name, trackingId, date, status };
}

const rows = [
  createData(8425, "Pizza Phô Mai", 18908425, "03/05/2024", "Đã giao"),
  createData(8426, "Bánh Mì Nướng", 18908426, "03/05/2024", "Đã duyệt"),
  createData(8427, "Bánh Mì Chay", 18908427, "04/05/2024", "Chờ xử lý"),
  createData(8428, "Bánh Muffin Sô Cô La", 18908428, "04/05/2024", "Đã giao"),
  createData(8429, "Nachos Cay", 18908429, "05/05/2024", "Đã duyệt"),
  createData(8430, "Pasta Primavera", 18908430, "05/05/2024", "Chờ xử lý"),
  createData(8431, "Pizza Margarita", 18908431, "06/05/2024", "Đã giao"),
  createData(8432, "Salad Caesar", 18908432, "06/05/2024", "Đã duyệt"),
  createData(8433, "Nước Ép Berry", 18908433, "07/05/2024", "Chờ xử lý"),
  createData(8434, "Cánh Gà BBQ", 18908434, "07/05/2024", "Đã giao"),
  createData(8435, "Que Bánh Mì Tỏi", 18908435, "08/05/2024", "Đã duyệt"),
  createData(8436, "Rau Xào", 18908436, "08/05/2024", "Chờ xử lý"),
  createData(8437, "Salad Trái Cây", 18908437, "09/05/2024", "Đã giao"),
  createData(8438, "Khoai Tây Chiên", 18908438, "09/05/2024", "Đã duyệt"),
  createData(8439, "Bánh Tart Chanh", 18908439, "10/05/2024", "Chờ xử lý"),
  createData(8440, "Ớt Nhồi", 18908440, "10/05/2024", "Đã giao"),
  createData(8441, "Súp Cà Chua", 18908441, "11/05/2024", "Đã duyệt"),
  createData(8442, "Mì Gà Alfredo", 18908442, "11/05/2024", "Chờ xử lý"),
  createData(8443, "Kem Vani", 18908443, "12/05/2024", "Đã giao"),
  createData(8444, "Tacos", 18908444, "12/05/2024", "Đã duyệt")
];

const makeStyle = (status) => {
  if (status === "Đã duyệt") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Chờ xử lý") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const handleResetFilter = () => {
    setSelectedDate(null);
  };

  const filteredRows = selectedDate
    ? rows.filter((row) => row.date === format(selectedDate, "d MMMM yyyy"))
    : rows;

  return (
    <div className="Orders_Table">
      <h3>Tất cả đơn hàng</h3>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        color="primary"
        onClick={handleResetFilter}
        style={{ marginLeft: "1rem", marginTop : "1rem" }}
      >
        Xem tất cả
      </Button>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          maxHeight: "calc(100vh - 12rem)",
          marginTop: "1rem",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Mã hóa đơn</TableCell>
              <TableCell>Sản phẩm</TableCell>
              <TableCell align="left">Mã khách hàng</TableCell>
              <TableCell align="left">Thời gian</TableCell>
              <TableCell align="left">Tình trạng</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {filteredRows.map((row) => (
              <TableRow
                key={row.orderId + row.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderId}
                </TableCell>
                <TableCell style={{ color: "orange" }} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
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
