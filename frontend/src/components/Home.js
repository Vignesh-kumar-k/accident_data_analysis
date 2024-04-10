import React from 'react';
import Complaint from './complaint';
import Login from './Login';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>User and Admin Boxes</title>
            <style>
                {`
                    body {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: #f0f0f0;
                        background-image: linear-gradient(to right,#0056b3, white);
                    }

                    .box {
                        width: 200px;
                        height: 150px;
                        background-color: #ffffff;
                        border: 2px solid #333333;
                        border-radius: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        margin: 20px;
                    }

                    .box:hover {
                        background-color: #eeeeee;
                    }

                    .box a {
                        text-decoration: none;
                        color: #333333;
                        font-weight: bold;
                        font-size: 20px;
                    }
                `}
            </style>
            <div className="box" id="userBox">
            <Link to='/submitcomplaint'>user</Link>
            </div>
            <div className="box" id="adminBox" >
            <Link to='/login'>Admin</Link>
            </div>
        </>
    );
};

export default Home;
