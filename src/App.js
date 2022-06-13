import React from "react";
import * as s from './App.styles';

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {
  const sidebarHeader = {
    fullName: 'EMU Dashboard',
    shortName: 'EMU'
  };
  const bgImage = 'images/emusidebar.jpg';
  const menuItems = [
    {name:'Energy Bulk', to: '/energy-bulk', icon:'icons/house-ecologic-energy-svgrepo-com.svg',subMenuItems: []},
    {name:'Energy Retail', to: '/energy-retail', icon:'icons/house-ecologic-energy-svgrepo-com.svg',subMenuItems: []},
    {name:'Energy Accounting', to: '/energy-accounting', icon:'icons/solar-energy-svgrepo-com.svg',subMenuItems: []},
    {name:'11kv SBT Monitor', to: '/11kv-sbt', icon:'icons/dashboard-svgrepo-com.svg',subMenuItems: []},
    {name:'33kv SBT Monitor', to: '/33kv-sbt', icon:'icons/dashboard-svgrepo-com.svg',subMenuItems: []},
    {name:'Market Settlement', to: '/market-settlement', icon:'icons/solar-energy-svgrepo-com.svg',
      subMenuItems: [
        { name:'TCN SLA', to: '/tcn_sla'},
        { name:'Market Bills', to: '/market_bills',icon:'icons/solar-energy-svgrepo-com.svg'},
        { name:'Energy Audit', to: '/energy_audit',icon:'icons/solar-energy-svgrepo-com.svg'},
      ] 
    }
  ];

  const fonts = {
    header: 'Secular One',
    menu: 'Montserrat'
  }

  return (
    <s.App>
      <Sidebar 
        bgImage={bgImage} 
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
      />
      <MainView />
    </s.App>
  );
}

export default App;
