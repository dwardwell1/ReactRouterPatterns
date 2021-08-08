import { Link } from "react-router-dom";
import {useState} from 'react';
import ColorForm from "./ColorForm";

const ColorList = ({props}) => {
    // const [colors, setColors] = useState(["red", "green", "blue"]);


    return (
        
        <div>
            {console.log(props)}
            <h1>Welcome to Color Central</h1>

            <h2>Choose Color</h2>
            <Link to="/colors/new"> Add New color?</Link>
            <ul>
                {props.map(color => (
                    <li key={color}>
                        <Link to={`/colors/${color}`}>{color}</Link>
                    </li> )
                )}
            </ul>
        </div>
    ) } ;

    export default ColorList;