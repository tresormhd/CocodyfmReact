
import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'



const imgUrl ="http://localhost:3000/img/"
const NotFound = () => (
    <div>
            <header class="second-header"></header>

        <img src={imgUrl+"notFound.png"}
            style={{
                width: 800, 
                height: 500,
                display: 'block', 
                // marginTop:'100px',
                // marginBottom:'100px',

                margin: 'auto', 
                // position: 'relative',
                
            }} 
        />

        <center style={{
                marginBottom:'80px',

            }}>
                {/* <NavLink className="nav-link" to="/">Return to Home Page</NavLink> */}
            <Link to="/">Return to Home Page</Link>
        </center>
    </div>
);
export default NotFound;