import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

function DogDetails({dog}){

    return (
        
        <div>
{console.log(dog)}
         
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} />
            <p>{dog.age}</p>
            <ul>
                {dog.facts.map((fact,i) => <li key={i}>{fact}</li>)} 
            </ul>
            <Link to="/dogs">Back</Link>
        </div>
    );
}

export default DogDetails;