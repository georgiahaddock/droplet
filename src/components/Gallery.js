import React from 'react';
import Card1 from './Card';


function Gallery(){
    return (
        <div>
            <h2>Gallery</h2>
            <div className = "flex">
                <Card1></Card1>
                <Card1></Card1>
                <Card1></Card1>
                <Card1></Card1>
                <Card1></Card1>
            </div>
        </div>
    )
}

export default Gallery;
