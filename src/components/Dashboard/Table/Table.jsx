import * as React from "react";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(orderId, name, trackingId, date, status) {
  return { orderId, name, trackingId, date, status };
}

const rows = [
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
  if (status === 'Đã duyệt') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  } else if (status === 'Chờ xử lý') {
    return {
      background: '#ffadad8f',
      color: 'red',
    }
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  const navigate = useNavigate();

  const handleDetailsClick = (row) => {
    navigate("/order/" + row.orderId);
  };

  return (
    <div className="Table">
      <h3>Đơn hàng gần đây</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", maxHeight: "calc(100vh - 28rem)" }}
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
            {rows.map((row) => (
              <TableRow
                key={row.orderId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.orderId}</TableCell>
                <TableCell style={{ color: "orange" }} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                </TableCell>
                <TableCell align="left" className="details" onClick={() => handleDetailsClick(row)}>
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
