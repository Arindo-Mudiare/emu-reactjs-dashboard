import React, { useEffect, useState } from "react";
import * as s from "./Sidebar.styles";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const {
    bgImage = "",
    sidebarHeader = {
      fullName: "",
      shortName: "",
    },
    menuItems = [],
    fonts = {
      header: "sans-serif",
      menu: "sans-serif",
    },
  } = props;

  // State of sidebar
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);
  const [subMenusStates, setSubmenus] = useState({});

  // use effect hook to control sidebar toggle
  useEffect(() => {
    isSidebarOpen
      ? setTimeout(() => setHeader(sidebarHeader.fullName), 200)
      : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader]);

  // handle menu item clicks
  const handleMenuItemClick = (name, index) => {
    setSelectedMenuItem(name);

    const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

    if (subMenusStates.hasOwnProperty(index)) {
      subMenusCopy[index]["isOpen"] = !subMenusStates[index]["isOpen"];
      setSubmenus(subMenusCopy);
    }
  };

  // Update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1080 && isSidebarOpen) setSidebarState(false);
      else setSidebarState(true);
    };
    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);

  // Add index of items that contain sub menu items
  useEffect(() => {
    const newSubmenus = {};

    menuItems.forEach((menuItem, index) => {
      const hasSubmenus = !!menuItem.subMenuItems.length;

      if (hasSubmenus) {
        newSubmenus[index] = {};
        newSubmenus[index]["isOpen"] = false;
        newSubmenus[index]["selected"] = null;
      }
    });

    setSubmenus(newSubmenus);
  }, [menuItems]);

  const menuItemsJSX = menuItems.map((menuItem, index) => {
    const isItemSelected = selected === menuItem.name;

    const hasSubmenus = !!menuItem.subMenuItems.length;

    const isOpen = subMenusStates[index]?.isOpen;

    const subMenusJSX = menuItem.subMenuItems.map(
      (subMenuItem, subMenuItemIndex) => {
        return (
          <s.SubMenuItem key={subMenuItemIndex}>
            {subMenuItem.name}
          </s.SubMenuItem>
        );
      }
    );

    return (
      <s.ItemContainer key={index}>
        {/* <Link to={menuItem.to} style={ { textDecoration: 'none'}}> */}
        <s.MenuItem
          font={fonts.menu}
          selected={isItemSelected}
          onClick={() => handleMenuItemClick(menuItem.name, index)}
          isSidebarOpen={isSidebarOpen}
          isOpen={isOpen}
        >
          <s.Icon src={menuItem.icon} isSidebarOpen={isSidebarOpen}></s.Icon>
          <s.Text isSidebarOpen={isSidebarOpen}>{menuItem.name}</s.Text>
          {hasSubmenus && (
            <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} />
          )}
        </s.MenuItem>
        {/* </Link> */}
        {/* Display submenus if they exist */}
        <AnimatePresence>
          {hasSubmenus && isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              exit={{ opacity: 0, x: -30 }}
            >
              <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>
                {subMenusJSX}
              </s.SubMenuItemContainer>
            </motion.nav>
          )}
        </AnimatePresence>
      </s.ItemContainer>
    );
  });

  return (
    <s.SidebarContainer bgImage={bgImage} isSidebarOpen={isSidebarOpen}>
      <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
