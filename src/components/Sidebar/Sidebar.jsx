import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../data/data.js";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

function Sidebar({ setSelectedComponent }) {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(window.innerWidth > 768);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setExpanded(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuItemClick = (index, heading) => {
    setSelected(index);
    setSelectedComponent(heading);
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
        <UilBars />
      </div>
      <motion.div
        className='sidebar'
        variants={sidebarVariants}
        animate={expanded ? 'true' : 'false'}
      >
   
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menu_item active" : "menu_item"}
              key={index}
              onClick={() => handleMenuItemClick(index, item.heading)}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}

          <div className="menu_item">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
