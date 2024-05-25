import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
} from "@iconscout/react-unicons";

import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Đơn hàng",
  },
  {
    icon: UilUsersAlt,
    heading: "Khách hàng",
  },
  {
    icon: UilPackage,
    heading: "Sản phẩm",
  },
];

export const CardsData = [
  {
    title: "Doanh thu",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970,000",
    png: UilUsdSquare,
    series: [
      {
        name: "Doanh thu",
        data: [31000, 40000, 280000, 510000, 420000, 109000, 100000],
      },
    ],
  },
  {
    title: "Lợi nhuận",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270,000",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Lợi nhuận",
        data: [100000, 100000, 50000, 70000, 80000, 300000, 40000],
      },
    ],
  },
  {
    title: "Vốn",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270,000",
    png: UilClipboardAlt,
    series: [
      {
        name: "Vốn",
        data: [100000, 25000, 150000, 300000, 120000, 150000, 200000],
      },
    ],
  },
];

// Dữ liệu cập nhật gần đây
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "đã đặt hàng Đồng hồ thông minh Apple pin 2500mAh.",
    time: "25 giây trước",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "đã nhận hàng thiết bị sạc pin Samsung.",
    time: "30 phút trước",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "đã đặt hàng Đồng hồ thông minh Apple, thiết bị sạc pin Samsung 2500mAh.",
    time: "2 giờ trước",
  },
];
