import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

function Color(){
    const {color} = useParams();
    return (
        
        <div style={{backgroundColor:color}}>
            <h1>This is {color}</h1>
            <Link to="/colors" > Go Back</Link>
            
        </div>
    );
}

export default Color;