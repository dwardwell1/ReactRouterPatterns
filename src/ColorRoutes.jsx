import {useState} from "react";
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
  import DogList from './DogList';
  import FilterDogDetails from './FilterDogDetails';
  import Color from './Color';
import ColorList from "./ColorList";
import ColorForm from './ColorForm';

function ColorRoutes() {
    const [colors, setColors] = useState(["red", "green", "blue"]);
    function addColor (color) {
        
        
        setColors([...colors, color]);
    }
  


    return (
        <Switch>
            <Route exact path="/colors" >
                <ColorList props={colors}  />
            </Route>
            <Route exact path="/colors/new">
                <ColorForm addColor={addColor} />
            </Route>

            <Route exact path="/colors/:color" >
                <Color />
            </Route>
            
            <Redirect exact from="/" to="/colors" />
            <Redirect to="/colors" />
        </Switch>
    );
}

export default ColorRoutes;