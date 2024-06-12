import React from 'react';
import './serviceDetails.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const serviceData = [
    { workCode: 'E-001', workLocation: '123 Main St, Anytown, USA', workDetails: 'Electrical Repair', schedule: '13th May 2023', invoice: '3543', amount: '$320', payment: 'Done', feedback: 'Good' },
    { workCode: 'H-001', workLocation: '456 Elm St, Smallville, USA', workDetails: 'Heater Repair', schedule: '13th May 2023', invoice: '3544', amount: '$120', payment: 'Done', feedback: 'Good' },
    { workCode: 'A-007', workLocation: '789 Oak Ave, Pleasantville, USA', workDetails: 'Air-Condition Installations', schedule: '13th May 2023', invoice: '3545', amount: '$180', payment: 'Done', feedback: 'Good' },
    { workCode: 'E-002', workLocation: '321 Maple Dr, Springfield, USA', workDetails: 'Electrical Repair', schedule: '13th May 2023', invoice: '3546', amount: '$400', payment: 'Done', feedback: 'Good' },
    { workCode: 'S-010', workLocation: '555 Pine Ln, Lakeside, USA', workDetails: 'Solar Panel Maintenance', schedule: '13th May 2023', invoice: '3547', amount: '$310', payment: 'Done', feedback: 'Good' },
    { workCode: 'E-003', workLocation: '456 Elm St, Smallville, USA', workDetails: 'Electrical Repair', schedule: '13th May 2023', invoice: '3548', amount: '$520', payment: 'Done', feedback: 'Good' },
];

const ServiceDetails = () => {
    return (
        <div className="service-details">
            <div className="service-header">
                <h2>Service Details</h2>
                <div className="filters">
                    <select className="filter-dropdown">
                        <option value="all">All Services</option>
                        <option value="electrical">Electrical</option>
                        <option value="heating">Heating</option>
                        <option value="air-condition">Air Condition</option>
                        <option value="solar-panel">Solar Panel</option>
                    </select>
                    <input type="date" className="filter-date" />
                    <input type="text" className="filter-search" placeholder="Search" />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Work Codes</th>
                        <th>Work Location</th>
                        <th>Work Details</th>
                        <th>Service Schedule</th>
                        <th>Invoice No.</th>
                        <th>Amount</th>
                        <th>Payment</th>
                        <th>Feedback</th>
                        <th>Open Ticket</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceData.map((service, index) => (
                        <tr key={index}>
                            <td>{service.workCode}</td>
                            <td>{service.workLocation}</td>
                            <td>{service.workDetails}</td>
                            <td>{service.schedule}</td>
                            <td>{service.invoice}</td>
                            <td>{service.amount}</td>
                            <td>{service.payment}</td>
                            <td>{service.feedback}</td>
                            <td><button className="open-ticket">Open Ticket</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <p>Showing 1 to 6 of 100 entries</p>
                <div className="page-controls">
                    <button className="page-arrow"><IoIosArrowBack /></button>
                    <button className="page-btn">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    <button className="page-btn">4</button>
                    <button className="page-btn">...</button>
                    <button className="page-arrow"><IoIosArrowForward /></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
