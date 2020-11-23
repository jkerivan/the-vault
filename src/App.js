import './css/App.css';
import './css/Playbar.css';
import './css/Sidebar.css';
import './css/Content.css';
import './css/TopBar.css';

import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Content from './components/Content';
import PlayBar from './components/Playbar';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const EventEmitter = require('wolfy87-eventemitter');

function App() {
  const ee = new EventEmitter();
  return (
    <div className="App">
        <div className="main-wrap">
            <div className="sidebar-wrap">
                <Router>
                    <SideBar/>
                    <Switch>
                        <Route path='/' />
                    </Switch>
                </Router>
            </div>

            <div className="content-wrap">
                <Router>
                    <TopBar/>
                    <Switch>
                        <Route path='/' />
                    </Switch>
                </Router>

                <Content ee={ee}/>
            </div>
        </div>

        <PlayBar ee={ee}/>
    </div>
  );
}

export default App;
