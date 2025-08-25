import React from 'react';

const Header = ({changePage}) => {
    return (
        <header>
            <nav className="fixed-top ms-5 mt-2">
                <ul className="nav">
                    <li onClick={()=>changePage("Home")}
                        className="nav-item btn btn-danger mx-1">Home</li>
                    <li onClick={()=>changePage("AboutMe")}
                        className="nav-item btn btn-danger mx-1">About Me</li>
                    <li onClick={()=>changePage("StarWars")}
                        className="nav-item btn btn-danger mx-1">Star Wars</li>
                    <li onClick={()=>changePage("Contact")}
                        className="nav-item btn btn-danger mx-1">Contact</li>
                </ul>
            </nav>
            <h1>Luke Skywalker</h1>
        </header>
    );
};

export default Header;