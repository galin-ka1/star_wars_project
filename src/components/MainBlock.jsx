import React from 'react';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";


const MainBlock = ({currentPage}) => {

    switch (currentPage) {
        case "Home":
            return <Home/>;
        case "AboutMe":
            return <AboutMe/>;
        case "StarWars":
            return <h1>Star Wars</h1>;
        case "Contact":
            return <h1>Contact</h1>;
        default:
            return <h1 color={"red"}>ERROR!</h1>
    }

};

export default MainBlock;