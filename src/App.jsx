import './App.css'
import Header from "./components/Header.jsx";
import MainBlock from "./components/MainBlock.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";

function App() {
    const [currentPage, setCurrentPage] = useState("Home");

    const changePage = (page) => {
        setCurrentPage(page);
    }

    return (
        <>
            <Header changePage={changePage}/>
            <MainBlock currentPage={currentPage}/>
            <Footer/>
        </>
    )
}

export default App
