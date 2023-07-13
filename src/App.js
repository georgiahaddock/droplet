import React from 'react';
import Gallery from './components/Gallery.js';
import CatCarousel from './components/CatCarousel.js';


function App(){
    return (
        <div>
            <h2>My Cards</h2>
            <div className = "flex">
                <Gallery></Gallery>
                <CatCarousel></CatCarousel>
            </div>
        </div>
    )
}

export default App;
