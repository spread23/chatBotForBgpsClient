import React from "react";
import Sidebar from '../Sidebard/Sidebar';
import Chat from '../Chat/Chat';
import { UseSelector, useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";

import './dashboard.css';

const Dashboard = () => {
    const sessionEstablished = useSelector((state) => state.dashboard.sessionEstablished);
    return (
        <div className="dashboard_container">
            <Sidebar />
            <Chat />
            {!sessionEstablished && <LoadingSpinner />}
        </div>
    )
};

export default Dashboard;