import React from 'react';
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Banner from "./components/Banner"


function App(){
    return (
        <div className='flex'>
            <Banner />
                    <Routes>
                        <Route path="/landing" element={<Landing className="routes"/>}/>
                    </Routes>
        </div>
    );
}

export default App;
