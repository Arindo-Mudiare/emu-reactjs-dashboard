import React, { useEffect, useState } from 'react'
import * as s from './Sidebar.styles'

const Sidebar = (props) => {
  const { 
    bgImage = '',
    sidebarHeader = {
      fullName: '',
      shortName: ''
    },
    menuItems = [], 
    fonts = {
      header: 'sans-serif',
      menu: 'sans-serif',
    }
  } = props;

// State of sidebar
const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
const [isSidebarOpen, setSidebarState] = useState(true);
const [header, setHeader] = useState(sidebarHeader.fullName);

// use effect hook to control sidebar toggle
useEffect(() => {
  isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName),200) : setHeader(sidebarHeader.shortName)
},[isSidebarOpen, sidebarHeader]);

// handle menu item clicks
const handleMenuItemClick = name => {
  setSelectedMenuItem(name);
}

  const menuItemsJSX = menuItems.map((menuItem, index) => {

    const isItemSelected = selected === menuItem.name;

    return (
      <s.MenuItem 
        key={index} 
        font={fonts.menu}
        selected={isItemSelected}
        onClick={() => handleMenuItemClick(menuItem.name)}
        isSidebarOpen={isSidebarOpen}
      >
        <s.Icon 
         src={menuItem.icon}
         isSidebarOpen={isSidebarOpen}
        ></s.Icon>
        <s.Text isSidebarOpen={isSidebarOpen}>{menuItem.name}</s.Text>
      </s.MenuItem>
    )
  });

  return (
    <s.SidebarContainer 
       bgImage={bgImage}
       isSidebarOpen={isSidebarOpen}
    >
     <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
     <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
     <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
     </s.TogglerContainer>
    </s.SidebarContainer>
  )
}

export default Sidebar;