import React from 'react';
import './sidebar.css'

function Sidebar({ isActive, toggleSidebar, data }) {
    return (
        <div className={`sidebar ${isActive ? 'active' : ''}`} id="sidebar">
            <div className="header">
                <h6 id="header" style={{ display: "none" }}>{data.location}</h6>
                <img id="image" className="image-landmark" src={data.image || ""} alt={data.name || "Landmark"} />
                <img
                    className="close-sidebar"
                    src="https://cdn.chemtradeasia.com/oleo_chemicals_india/icon/close.webp"
                    alt="close icon"
                    onClick={toggleSidebar}
                />
            </div>
            <h6 id="name">{data.name}</h6>
            <p id="landmarkType">{data.landmarkType}</p>
            <hr />
            <p id="description">{data.description}</p>
            <hr />
            <table>
                <tr>
                    <td><img src='./src/assets/pin-point.png' className='pinPoint'></img></td>
                    <td><p id="line1">{data.line1}</p></td>
                </tr>
                <tr>
                    <td><img src='./src/assets/calendar.png' className='pinPoint'></img></td>
                    <td><p id="founded">{data.founded}</p></td>
                </tr>
            </table>
            <hr />
            <div className='interested-section'>
                <label>People also interested</label>
                <div className='list-interested'>
                    <div className="item-interested">
                        <img src={data.imageInterested1} />
                        <span>{data.interested1}</span>
                    </div>
                    <div className="item-interested">
                        <img src={data.imageInterested2} />
                        <span>{data.interested2}</span>
                    </div>
                    <div className="item-interested">
                        <img src={data.imageInterested3} />
                        <span>{data.interested3}</span>
                    </div>
                    <div className="item-interested">
                        <img src={data.imageInterested4} />
                        <span>{data.interested4}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;