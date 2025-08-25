import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants.jsx";


const AboutMe = () => {
    const [person, setPerson] = useState({})
    const id=1

    useEffect(() => {

        fetch(`${base_url}/swagger-ui.html#/star-wars-controller/getPeopleByIdUsingGET/${id}`)
            .then(response => response.json())
            .then(data => setPerson(data))
        return () => {
            console.log("Unmounted");
        }
    }, []);
      //TODO useEffect with fetch
    //https://sw-info-api.herokuapp.com/swagger-ui.html#/star-wars-controller/getPeopleByIdUsingGET
    // id = 1
    //TODO with * use sessionStorage or localStorage for save requests on 24 hours
    return (
        <div>
            <p>Name:{person.name}</p>
            <p>Height:{person.height}</p>
            <p>Birth Year:{person.birth_year}</p>
            <p>Hair color:{person.hair_color}</p>
            <p>Mass:{person.mass}</p>
            <p>Eye color:{person.eye_color}</p>
            <p>Skin color:{person.skin_color}</p>

        </div>
    );
};

export default AboutMe;