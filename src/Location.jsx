import './location.css'
import Sidebar from './components/Sidebar'
import React, { useState, useEffect } from "react";
import { contactInfo } from "./location-desktop";

function Location() {
  const [isActive, setIsActive] = useState(false);
  const [sidebarData, setSidebarData] = useState({});

  function toggleSidebar() {
    setIsActive(!isActive);

    if (!isActive) {
      const headerText = document.getElementById("header").innerText.toLowerCase();
      const data = contactInfo[headerText];
      setSidebarData(data);
    }
  }

  useEffect(() => {
    document.querySelectorAll('.pin').forEach(item => {
      item.addEventListener('click', event => {
        const locationName = event.target.dataset.location; // Use the data-location attribute
        document.getElementById('header').innerText = locationName;
        toggleSidebar();
      });
    });

    return () => {
      document.querySelectorAll('.pin').forEach(item => {
        item.removeEventListener('click', toggleSidebar);
      });
    };
  }, []);

  return (
    <>
      <div className="container" id="container" style={{ position: "relative" }}>
        <div className="world-map">
          <img
            src="./src/assets/worldmap.png"
            alt="world map"
            style={{ width: "100%" }}
          />
          <div className="pin australia" data-location="Australia"></div>
          <div className="pin china" data-location="China"></div>
          <div className="pin singapore" data-location="Singapore"></div>
        </div>
      </div>

      <Sidebar isActive={isActive} toggleSidebar={toggleSidebar} data={sidebarData} />
    </>
  );
}

export default Location;