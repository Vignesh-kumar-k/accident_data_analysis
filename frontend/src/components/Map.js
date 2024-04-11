import React, { useState, useEffect, useRef } from "react";
import './css/map.css';


export default function Map() {
    const [topUnitNames, setTopUnitNames] = useState([]);
    const mapRef = useRef(null);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/top-unit-names');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTopUnitNames(data.top_unit_names);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="accident-wrapper"> 

            <h2 className="h2-heading">Top 5 Unit Names:</h2>
            <ul>
                {topUnitNames && topUnitNames.map((unitname, index) => (
                    <p className="city-name" key={index}>{unitname}</p>
                ))}
            </ul>
        </div>
    );
}
