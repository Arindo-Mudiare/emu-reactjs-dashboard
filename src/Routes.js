import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
// MarketSettlement,EnergyRetail,EnergyBulk,EnergyAccounting,SbtMonitor33kv,SbtMonitor11kv,
import MarketSettlement from './components/MainView/MarketSettlement/MarketSettlement';
import SbtMonitor33kv from './components/MainView/SbtMonitor11kv/SbtMonitor11kv';
import SbtMonitor11kv from './components/MainView/MarketSettlement/MarketSettlement';
import EnergyRetail from './components/MainView/EnergyRetail/EnergyRetail';
import EnergyBulk from './components/MainView/EnergyBulk/EnergyBulk';
import EnergyAccounting from './components/MainView/EnergyAccounting/EnergyAccounting';
import NetworkOutages from './components/MainView/NetworkOutages/NetworkOutages';

// define actual routes
const Routes = () => {
    return (
        <Switch>
            <Route path='/'><SbtMonitor33kv /></Route> 
            <Route path='/sbt_33kv'><SbtMonitor33kv/></Route> 
            <Route path='/sbt_11kv'><SbtMonitor11kv /></Route> 
            <Route path='/energy_retail'> <EnergyRetail /></Route>
            <Route path='/energy_bulk'><EnergyBulk /></Route> 
            <Route path='/energy_accounting'><EnergyAccounting/></Route>
            <Route path='/market_settlement'><MarketSettlement /></Route> 
            <Route path='/network_outages'><NetworkOutages/></Route> 
        </Switch>
    )
}

export default Routes;