import React,{useState,useEffect} from "react";


export default function Home(){
    return (
        <body>
          <nav className="navbar">
            <ul className="nav-list">
              <li><a href="#">Home</a></li>
              <li><a href="#">Complain</a></li>
              <li><a href="#">Alerts</a></li>
              <li><a href="#">Profile</a></li>
            </ul>
          </nav>
    
          <div className="container">
            <h1>Predict Accident Features</h1>
    
            {/* Road Type Prediction Form */}
            <form action="{ url_for('predict_road_type') }" method="post" className="form">
              <h2>Road Type Prediction</h2>
              <input type="text" placeholder="Longitude" name="road_condition" required />
              <input type="text" placeholder="Latitude" name="num_lanes" required />
              <input type="text" placeholder="Junction_Detail" name="surface_type" required />
              <input type="text" placeholder="Location_Easting_OSGR" name="road_markings" required />
              <input type="text" placeholder="Location_Northing_OSGR" name="road_signs" required />
              <input type="text" placeholder="Urban_or_Rural_Area" name="road_condition" required />
              <button>predict</button>
              <p>{ prediction_text }</p>
            </form>
    
            {/* Road Surface Prediction Form */}
            <form action="{ url_for('predict_road_surface') }" method="post" className="form">
              <h2>Road Surface Prediction</h2>
              <input type="text" placeholder="Road Texture" name="road_texture" required />
              <input type="text" placeholder="Road Material" name="road_material" required />
              <input type="text" placeholder="Road Condition" name="road_condition" required />
              <input type="text" placeholder="Potholes" name="potholes" required />
              <input type="text" placeholder="Cracks" name="cracks" required />
              <input type="text" placeholder="Urban or Rural Area" name="urban_or_rural_area" required />
              <button>Predict</button>
              <p>{ prediction_text1 }</p>
            </form>
    
            {/* Weather Prediction Form */}
            <form action="{ url_for('predict_weather') }" method="post" className="form">
              <h2>Weather Prediction</h2>
              <input type="text" placeholder="Longitude" name="temperature" required />
              <input type="text" placeholder="Latitude" name="humidity" required />
              <input type="text" placeholder="1st_Road_Class" name="wind_speed" required />
              <input type="text" placeholder="2nd_Road_Class" name="precipitation" required />
              <button>predict</button>
              <p>{ prediction_text2 }</p>
            </form>
    
            {/* Pedestrian Prediction Form */}
            <form action="{ url_for('predict_pedestrian') }" method="post" className="form">
              <h2>Pedestrian Prediction</h2>
              <input type="text" placeholder="Longitude" name="road_condition" required />
              <input type="text" placeholder="Latitude" name="num_lanes" required />
              <input type="text" placeholder="Junction Detail" name="surface_type" required />
              <input type="text" placeholder="Location Easting OSGR" name="road_markings" required />
              <input type="text" placeholder="Location Northing OSGR" name="road_signs" required />
              <input type="text" placeholder="Urban or Rural Area" name="urban_or_rural_area" required />
              <button>predict</button>
              <p>{ prediction_text4 }</p>
            </form>
    
            {/* Light Conditions Prediction Form */}
            <form action="{ url_for('predict_light_conditions') }" method="post" className="form">
              <h2>Light Conditions Prediction</h2>
              <input type="text" placeholder="Light Intensity" name="light_intensity" required />
              <input type="text" placeholder="Sun Visibility" name="sun_visibility" required />
              <input type="text" placeholder="Street Lights" name="street_lights" required />
              <input type="text" placeholder="Traffic Lights" name="traffic_lights" required />
              <input type="text" placeholder="Time of Day" name="time_of_day" required />
              <input type="text" placeholder="Additional Feature" name="additional_feature" required />
              <button type="submit">Predict</button>
              <p>{ prediction_text3 }</p>
            </form>
    
            {/* Severity Prediction Form */}
            <form action="{ url_for('predict_severity') }" method="post" className="form">
              <h2>Severity Prediction</h2>
              <input type="text" placeholder="Speed_limit" name="accident_type" required />
              <input type="text" placeholder="Day_of_Week" name="collision_impact" required />
              <input type="text" placeholder="Local_Authority_(District)'" name="vehicle_speed" required />
              <input type="text" placeholder="Weather_Conditions" name="vehicle_type" required />
              <button>predict</button>
              <p>{ prediction_text5 }</p>
            </form>
          </div>
        </body>
      );
}