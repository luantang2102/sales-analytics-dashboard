import React from "react";
import CustomerReview from "../RightSide/CustomerReview/CustomerReview.jsx";
import Updates from "../RightSide/Updates/Updates.jsx";
import "./RightSide.css";

function RightSide() {
  return (
    <div className="RightSide">
      <div>
        <h3>Thông báo mới</h3>
        <Updates />
      </div>
      <div>
        <h3>Đánh giá của khách hàng</h3>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;