import React, { useState } from "react";
import axios from "axios";
export default function PyHome() {
    const [predictionText, setPredictionText] = useState("");
    const [predictionText1, setPredictionText1] = useState("");
    const [predictionText2, setPredictionText2] = useState("");
    const [predictionText3, setPredictionText3] = useState("");
    const [predictionText4, setPredictionText4] = useState("");
    const [predictionText5, setPredictionText5] = useState("");

    const handleSubmitRoadType = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/predict_road_type", {
                longitude: event.target.elements.longitude.value,
                latitude: event.target.elements.latitude.value,
                junctionDetail: event.target.elements.junction_detail.value,
                easting: event.target.elements.easting.value,
                northing: event.target.elements.northing.value,
                urbanOrRuralArea: event.target.elements.urban_or_rural_area.value
            });
            setPredictionText(response.data.prediction_text);
        } catch (error) {
            console.error("Error predicting road type:", error);
            setPredictionText("Error predicting road type: " + error.response.data.prediction_text);
        }
    };

    const handleSubmitRoadSurface = async (event) => {
        event.preventDefault();
        const roadTexture = event.target.elements.road_texture.value.trim();
        const roadMaterial = event.target.elements.road_material.value.trim();
        const roadCondition = event.target.elements.road_condition.value.trim();
        const potholes = event.target.elements.potholes.value.trim();
        const cracks = event.target.elements.cracks.value.trim();
        const urbanOrRuralArea = event.target.elements.urban_or_rural_area.value.trim();
    
        try {
            const response = await axios.post("/predict_road_surface", {
                roadTexture,
                roadMaterial,
                roadCondition,
                potholes,
                cracks,
                urbanOrRuralArea
            });
            setPredictionText1(response.data.prediction_text1);
        } catch (error) {
            console.error("Error predicting road surface:", error);
            setPredictionText1("Error predicting road surface: " + error.response.data.prediction_text1);
        }
    };
    const handleSubmitWeather = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/predict_weather", {
                longitude: event.target.elements.longitude.value,
                latitude: event.target.elements.latitude.value,
                first_road_Class : event.target.elements.first_road_class.value,
                second_road_Class : event.target.elements.second_road_class.value
            });
            setPredictionText2(response.data.prediction_text2);
        } catch (error) {
            console.error("Error predicting weather:", error);
            setPredictionText2("Error predicting weather: " + error.response.data.prediction_text2);
        }
    };
    const handleSubmitLight = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/predict_light_conditions", {
                longitude: event.target.elements.longitude.value,
                latitude: event.target.elements.latitude.value,
                first_road_Class : event.target.elements.first_road_class.value,
                second_road_Class : event.target.elements.second_road_class.value,
                urban_or_rural_area: event.target.elements.urban_or_rural_area.value,
                weather_conditions: event.target.elements.weather_conditions.value,
            });
            setPredictionText3(response.data.prediction_text3);
        } catch (error) {
            console.error("Error predicting Light Condition:", error);
            setPredictionText3("Error predicting Light Condition: " + error.response.data.prediction_text3);
        }
    };
    const handleSubmitPedestrian = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/predict_pedestrian", {
                longitude: event.target.elements.longitude.value,
                latitude: event.target.elements.latitude.value,
                junction_detail : event.target.elements.junction_detail.value,
                easting : event.target.elements.easting.value,
                northing: event.target.elements.northing.value,
                urban_or_rural_area: event.target.elements.urban_or_rural_area.value,
            });
            setPredictionText4(response.data.prediction_text4);
        } catch (error) {
            console.error("Error predicting Light Condition:", error);
            setPredictionText3("Error predicting Light Condition: " + error.response.data.prediction_text4);
        }
    };
    const handleSubmitSeverity = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/predict_severity", {
                speed_limit: event.target.elements.speed_limit.value,
                day: event.target.elements.day.value,
                local_authority : event.target.elements.local_authority.value,
                weather: event.target.elements.weather.value
            });
            setPredictionText5(response.data.prediction_text5);
        } catch (error) {
            console.error("Error predicting Severity:", error);
            setPredictionText3("Error predicting Severity: " + error.response.data.prediction_text5);
        }
    };
    
    return (
        <div className="container">
            <h1>Predict Severity </h1>
            {/* Severity Prediction Form */}
            <form onSubmit={handleSubmitSeverity} className="form">
                <h2>Severity Prediction</h2>
                <input type="text" placeholder="Speed_limit" name="speed_limit" required />
                <input type="text" placeholder="Day_of_Week" name="day" required />
                <input type="text" placeholder="Local_Authority_(District)" name="local_authority" required />
                <input type="text" placeholder="Weather_Conditions" name="weather" required />
                <button type="submit">Predict</button>
                <p>{predictionText5}</p>
            </form>

            <h1>Predict Accident Features</h1>
            {/* Road Type Prediction Form */}
            <form onSubmit={handleSubmitRoadType} className="form">
                <h2>Road Type Prediction</h2>
                <input type="text" placeholder="Longitude" name="longitude" required />
                <input type="text" placeholder="Latitude" name="latitude" required />
                <input type="text" placeholder="Junction Detail" name="junction_detail" required />
                <input type="text" placeholder="Location Easting OSGR" name="easting" required />
                <input type="text" placeholder="Location Northing OSGR" name="northing" required />
                <input type="text" placeholder="Urban or Rural Area" name="urban_or_rural_area" required />
                <button type="submit">Predict</button>
                <p>{predictionText}</p>
            </form>
            <h1>Predict Accident Features</h1>

            {/* Road Type Prediction Form */}
            <form onSubmit={handleSubmitRoadSurface} className="form">
                <h2>Road Surface Prediction</h2>
                <input type="text" placeholder="Road Texture" name="road_texture" required />
                <input type="text" placeholder="Road Material" name="road_material" required />
                <input type="text" placeholder="Road Condition" name="road_condition" required />
                <input type="text" placeholder="Potholes" name="potholes" required />
                <input type="text" placeholder="Cracks" name="cracks" required />
                <input type="text" placeholder="Urban or Rural Area" name="urban_or_rural_area" required />
                <button type="submit">Predict</button>
                <p>{predictionText1}</p>
            </form>
            <h1>Predict Weather </h1>
             {/* Weather Prediction Form */}
             <form onSubmit={handleSubmitWeather} className="form">
                <h2>Weather Prediction</h2>
                <input type="text" placeholder="Longitude" name="longitude" required />
                <input type="text" placeholder="Latitude" name="latitude" required />
                <input type="text" placeholder="1st Road Class" name="first_road_class" required />
                <input type="text" placeholder="2nd Road Class" name="second_road_class" required />
                <button type="submit">Predict</button>
                <p>{predictionText2}</p>
            </form>
            <h1>Predict Light Condition </h1>
             {/* Light Prediction Form */}
             <form onSubmit={handleSubmitLight} className="form">
                <h2>Light Prediction</h2>
                <input type="text" placeholder="Longitude" name="longitude" required />
                <input type="text" placeholder="Latitude" name="latitude" required />
                <input type="text" placeholder="1st Road Class" name="first_road_class" required />
                <input type="text" placeholder="2nd Road Class" name="second_road_class" required />
                <input type="text" placeholder="Urban_or_Rural_Area" name="urban_or_rural_area" required />
                <input type="text" placeholder="Weather_Conditions" name="weather_conditions" required />
                <button type="submit">Predict</button>
                <p>{predictionText3}</p>
            </form>
            <h1>Predict Pedestrian Crossing </h1>
             {/* Pedestrian Prediction Form */}
             <form onSubmit={handleSubmitPedestrian} className="form">
                <h2>Pedestrian Prediction</h2>
                <input type="text" placeholder="Longitude" name="longitude" required />
                <input type="text" placeholder="Latitude" name="latitude" required />
                <input type="text" placeholder="Junction_Detail" name="junction_detail" required />
                <input type="text" placeholder="Location_Easting_OSGR" name="easting" required />
                <input type="text" placeholder="Location_Northing_OSGR" name="northing" required />
                <input type="text" placeholder="Urban_or_Rural_Area" name="urban_or_rural_area" required />
                <button type="submit">Predict</button>
                <p>{predictionText4}</p>
            </form>
        </div>
    );
}
