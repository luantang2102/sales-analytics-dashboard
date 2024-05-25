import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ProductsTable.css";

function createData(name, description, price, stock) {
  return { name, description, price, stock };
}

const rows = [
  createData("Pizza Cheese Burst", "Pizza thơm ngon với nhiều phô mai và sốt cà chua", "269,000đ", 25000000),
  createData("Bánh Mì Nướng", "Bánh mì nướng lành mạnh với rau cải tươi và sốt", "179,000đ", 30000000),
  createData("Veggie Delight", "Bánh mì chay đầy màu sắc với rau cải tươi và sốt", "189,000đ", 20000000),
  createData("Bánh Muffin Sô Cô La", "Bánh muffin sô cô la thơm ngon với những viên sô cô la", "60,000đ", 50000000),
  createData("Nachos Cay", "Nachos giòn được trang trí với sốt cay và phô mai", "207,000đ", 15000000),
  createData("Pasta Primavera", "Món pasta phong cách với rau cải tươi và sốt", "218,000đ", 18000000),
  createData("Pizza Margarita", "Pizza truyền thống với sốt cà chua và húng quế tươi", "207,000đ", 22000000),
  createData("Salad Caesar", "Salad tươi mát với rau diếp, bánh mì nướng, và sốt", "149,000đ", 35000000),
  createData("Nước Ép Berry", "Nước ép trái cây tươi mát làm từ trái cây và sữa chua", "107,000đ", 40000000),
  createData("Cánh Gà BBQ", "Cánh gà mềm mại được phủ với sốt BBQ thơm ngon", "179,000đ", 25000000),
  createData("Que Bánh Mì Tỏi", "Que bánh mì vị tỏi ngon tuyệt kèm với sốt marinara", "88,000đ", 30000000),
  createData("Xào Rau Cải", "Rau xào đậm đà với nước tương và gia vị", "149,000đ", 20000000),
  createData("Salad Trái Cây", "Salad các loại trái cây tươi mát", "107,000đ", 45000000),
  createData("Khoai Tây Chiên", "Khoai tây vàng giòn được phục vụ với sốt cà chua", "53,000đ", 60000000),
  createData("Bánh Tart Chanh", "Bánh tart chanh thơm mát với vỏ bơ", "69,000đ", 28000000),
  createData("Ớt Nhồi", "Ớt chuông nhồi đặc biệt với gạo và thịt bò băm", "189,000đ", 18000000),
  createData("Súp Cà Chua", "Súp cà chua ngon lành với cà chín và thảo mộc", "107,000đ", 40000000),
  createData("Mì Gà Alfredo", "Mì Alfredo kem mượt với gà nướng", "269,000đ", 22000000),
  createData("Kem Vani", "Kem vani mịn ngon tuyệt", "60,000đ", 55000000),
  createData("Tacos", "Bánh taco ngon lành với thịt nướng và rau diếp", "179,000đ", 20000000)
  
];

export default function ProductsTable() {
  return (
    <div className="Products_Table">
      <h3>Tất cả sản phẩm</h3>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          marginTop: "1rem",
          maxHeight: "calc(100vh - 8rem)",
          overflow : "auto"
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align="left">Mô tả</TableCell>
              <TableCell align="left">Giá thành</TableCell>
              <TableCell align="center">Số lượng trong kho</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span style={{ color: "orange" }}>{row.name}</span>
                </TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="left">
                  <span style={{ color: "green" }}>{row.price}</span>
                </TableCell>
                <TableCell align="center">{row.stock}</TableCell>
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
