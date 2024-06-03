import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';
import Orders from './components/Order/Orders';
import Customers from './components/Customers/Customers';
import Products from './components/Products/Products';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { Container, Typography, Paper, Divider, Avatar, colors } from '@mui/material';
import { CheckCircleOutline as CheckCircleOutlineIcon, HourglassEmpty as HourglassEmptyIcon } from '@mui/icons-material';

function OrderDetail() {
  const { code } = useParams();

  // Fake order data
  const order = {
    code: code,
    customer: 'John Doe',
    product: 'Sản phẩm mẫu',
    quantity: 2,
    totalPrice: '1,000,000',
    status: 'Chờ xử lý'
  };

  // Define status icon and color based on order status
  let statusIcon, statusColor;
  if (order.status === 'Chờ xử lý') {
    statusIcon = <HourglassEmptyIcon />;
    statusColor = 'orange';
  } else if (order.status === 'Đã giao') {
    statusIcon = <CheckCircleOutlineIcon />;
    statusColor = 'green';
  }

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Chi tiết đơn hàng
        </Typography>
        <Divider />
        <Typography variant="body1" gutterBottom>
          <strong>Mã đơn hàng:</strong> <b style={{ color: "red" }}>{order.code}</b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Khách hàng:</strong> {order.customer}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Sản phẩm:</strong> {order.product}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Số lượng:</strong> {order.quantity}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Tổng giá:</strong> {order.totalPrice}đ
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Trạng thái:</strong>
          <Avatar className = "statusIcon" sx={{ backgroundColor: statusColor, marginLeft: '5px' }}>
            {statusIcon}
          </Avatar>
          {order.status}
        </Typography>
      </Paper>
    </Container>
  );
}

function App() {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard');

  useEffect(() => {
    document.title = "Sales Dashboard"
  }, []);

  let ComponentToRender;
  switch (selectedComponent) {
    case 'Dashboard':
      ComponentToRender = (
        <>
          <Dashboard />
          <RightSide />
        </>
      );
      break;
    case 'Đơn hàng':
      ComponentToRender = (
        <>
          <Orders/>
          <RightSide />
        </>
      );
      break;
    case 'Khách hàng':
      ComponentToRender = (
        <>
          <Customers/>
          <RightSide />
        </>
      );
      break;
    case 'Sản phẩm':
      ComponentToRender = (
        <>
          <Products/>
          <RightSide />
        </>
      );
      break;
    default:
      ComponentToRender = null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/sales-analytics-dashboard' element={
          <div className="App">
            <div className='AppContainer'>
              <Sidebar setSelectedComponent={setSelectedComponent} />
              {ComponentToRender}
            </div>
            <div className='AppFooter'>
              Tăng Tiến Luân - DH52112910 - D21_TH06 - Ca 2 thứ 2 
            </div>
          </div>
        }/>
        <Route path='/order/:code' element={<OrderDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
