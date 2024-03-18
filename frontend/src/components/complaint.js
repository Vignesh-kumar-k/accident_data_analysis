import React from "react";
import './External.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Complaint(){
   const navigate = useNavigate()

    const [name,setName] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    const [address,setAddress]=useState('')
    const [review, setReview] = useState(''); 
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/submitcomplaint', {name, phonenumber, address, review, images })
            .then(res => {
                console.log(res);
                setName('')
                setPhonenumber('')
                setAddress('')
                setReview('')
                setImages([])
                
            })
            .catch(err => {
                console.log(err);
                // Handle errors, such as displaying an error message to the user
                console.log("An error occurred while submitting the complaint");
            });
        
    };
    
       


    // Handler for file input
    function convertToBase64(e) {
        const files = e.target.files;
        const base64Images = []; // Array to store base64 strings
    
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
    
            reader.onload = () => {
                const base64String = reader.result; // Base64 encoded string
                base64Images.push(base64String); // Add base64 string to the array
                setImages(base64Images); // Update state with array of base64 strings
            };
    
            reader.readAsDataURL(file);
        }
    }
    
    

    return(
        <form action="#" method="post" encType="multipart/form-data" className="complaint-form" onSubmit={handleSubmit}>
    <h2>Complaint Form</h2>
    <div className="form-group">
        <input type="text" id="username" value={name} name="username" placeholder="Username" required onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="form-group">
        <input type="tel" id="phone"  value={phonenumber} name="phone" placeholder="Phone Number" required onChange={(e)=>setPhonenumber(e.target.value)}/>
    </div>
    <div className="form-group">
        <input type="email" id="email"  value={address} name="email" placeholder="Email Address" required onChange={(e)=>setAddress(e.target.value)}/>
    </div>
    <div className="form-group file-upload">
        <label htmlFor="file-upload">Upload File</label>
        <input type="file" id="file-upload"   name="file-upload" accept="image/*" onChange={convertToBase64} required multiple />
    </div>
    <div className="form-group">
        <textarea id="review" name="review" rows="4"  value={review}  placeholder="Write your review here..." required onChange={(e)=>setReview(e.target.value)}></textarea>
    </div>
    <div className="form-group">
        <button type="submit">Submit</button>
    </div>
    {images && images.map((image, index) => (
    <img key={index} width={100} height={100} src={image} alt={`Img ${index}`} />
))}

    
</form>


    
        
    

    );
}