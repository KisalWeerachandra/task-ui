import React from 'react';
import './dashboardBoxes.css';
import { FcBriefcase } from "react-icons/fc";
import { FaSun } from "react-icons/fa";
import { BsPlugin } from "react-icons/bs";
import { PiFanBold, PiSolarPanelBold } from "react-icons/pi";

const DashboardBoxes = () => {
    const boxes = [
        { id: 1, label: 'Active Order', count: 2, icon: <FcBriefcase className='icon-briefcase'/> },
        { id: 2, label: 'Heating', count: 13, icon: <FaSun className='icon-sun'/> },
        { id: 3, label: 'Electrical', count: 2, icon: <BsPlugin className='icon-plug'/> },
        { id: 4, label: 'Air-Condition', count: 3, icon: <PiFanBold className='icon-fan'/> },
        { id: 5, label: 'Solar Panel', count: 2, icon: <PiSolarPanelBold className='icon-solar'/> }
    ];

    return (
        <div className="dashboard-boxes">
            {boxes.map(box => (
                <div key={box.id} className="box">
                    <div className="box-content">
                        <div className="box-icon">{box.icon}</div>
                        <div className="box-info">
                            <span className="box-label">{box.label}</span>
                            <span className="box-count">{box.count}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardBoxes;
