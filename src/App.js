import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Router, Switch, Route, Link, Redirect} from 'react-router-dom';

import './css/App.css';
import './css/Playbar.css';
import './css/Sidebar.css';
import './css/Content.css';
import './css/TopBar.css';

import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import TrackTable from './components/content/TrackTable';
import PlayBar from './components/Playbar';
import BoardUser from "./components/user/BoardUser";
import BoardMod from "./components/user/BoardMod";
import BoardAdmin from "./components/user/BoardAdmin";
import Home from "./components/content/Home";
import Login from "./components/Login";
import Profile from "./components/user/Profile";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";

function App() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); // clear message when changing location
        });
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };

    if(!isLoggedIn) {
        return <Login/>
    }

    return (
        <Router history={history}>
            <div className="App">
                <div className="main-wrap">
                    <div className="sidebar-wrap">
                        <SideBar />
                    </div>

                    <div className="content-wrap">
                        <TopBar/>
                        <Switch>
                            <Route exact path={["/", "/home"]} component={Home} />
                            <Route exact path={["/table"]} component={TrackTable} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/profile" component={Profile} />
                            <Route path="/user" component={BoardUser} />
                            <Route path="/mod" component={BoardMod} />
                            <Route path="/admin" component={BoardAdmin} />
                        </Switch>
                    </div>
                </div>

                <PlayBar />
            </div>

        </Router>

  );
}

export default App;
