import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/show.css';

const ShowComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  
  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://localhost:3001/complaints');
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints:', error);
    }
  };

  return (
    <>
      <h2>COMPLAINT SECTION</h2>
      <div className="all-contents">
        {complaints.map((complaint, index) => (
          <div className="user-page" key={index}>
            <div className="all-imgs">
              <div className="image-slider">
                {complaint.images.map((image, imageIndex) => (
                  <img key={imageIndex} className="slider-items" src={image} alt='' />
                ))}
              </div>
            </div>
            
            <div className="user-content">
              <p>NAME: {complaint.name}</p>
              <p>MOBILE: {complaint.phonenumber}</p>
              <h3>COMPLAINT:</h3>
              <p>{complaint.review}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowComplaints;
