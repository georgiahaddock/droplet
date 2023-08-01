import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Banner from "./components/Banner"
import Home from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App(){
    return (
        <div className='flex'>
            <Banner />
                    <Routes>
                        <Route path="/landing" element={<Landing className="routes"/>}/>
                        <Route path="/homepage" element={<Home className="routes"/>}/>
                    </Routes>
        </div>
    );
}

export default App;
