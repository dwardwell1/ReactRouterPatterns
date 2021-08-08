import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import DogDetails from './DogDetails';

function FilterDogDetails({dogs}) {
  const {name} = useParams();
const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
if(!currentDog) {
    return <Redirect to={"/dogs"}/>; }
    return (
        <DogDetails dog={currentDog} />
    );
}

export default FilterDogDetails;