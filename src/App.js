import React from "react";
import * as s from "./App.styles";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";
import Testing from "./components/Testing";
import Testing2 from "./components/Testing2";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import User from "./User";
import { useState } from "react";


const App = () => {
  const sidebarHeader = {
    fullName: "EMU Dashboard",
    shortName: "EMU",
  };
  const bgImage = "images/emusidebar.jpg";
  const menuItems = [
    {
      name: "Energy Bulk",
      to: "/energy_bulk",
      icon: "icons/house-ecologic-energy-svgrepo-com.svg",
      subMenuItems: [],
    },
    {
      name: "Energy Retail",
      to: "/energy_retail",
      icon: "icons/house-ecologic-energy-svgrepo-com.svg",
      subMenuItems: [],
    },
    {
      name: "Energy Accounting",
      to: "/energy_accounting",
      icon: "icons/solar-energy-svgrepo-com.svg",
      subMenuItems: [],
    },
    {
      name: "11kv SBT Monitor",
      to: "/sbt_11kv",
      icon: "icons/dashboard-svgrepo-com.svg",
      subMenuItems: [],
    },
    {
      name: "33kv SBT Monitor",
      to: "/sbt_33kv",
      icon: "icons/dashboard-svgrepo-com.svg",
      subMenuItems: [],
    },
    {
      name: "Market Settlement",
      to: "/market_settlement",
      icon: "icons/solar-energy-svgrepo-com.svg",
      subMenuItems: [
        { name: "TCN SLA", to: "/tcn_sla" },
        {
          name: "Market Bills",
          to: "/market_bills",
          icon: "icons/solar-energy-svgrepo-com.svg",
        },
        {
          name: "Energy Audit",
          to: "/energy_audit",
          icon: "icons/solar-energy-svgrepo-com.svg",
        },
      ],
    },
    {
      name: "Network Outages",
      to: "/network-outages",
      icon: "icons/dashboard-svgrepo-com.svg",
      subMenuItems: [],
    },
  ];

  const fonts = {
    header: "Secular One",
    menu: "Montserrat",
  };

  const ShowHideUser = ({ show }) => (show ? <User /> : null);

  const [show, setShow] = useState(false);

  return (
    <s.App>
      {/* <Sidebar 
        bgImage={bgImage} 
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
      /> */}
      {/* <MainView /> */}
      <button 
        onClick={() => setShow(!show)}
        >
          {show ? "Hide User" : "Show User"}
      </button>
     <ShowHideUser show={show} />
      
    </s.App>
  );
};

export default App;
