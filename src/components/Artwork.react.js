import React from "react";

const Artwork = ({ imageUrl, artistName, date, shortDesc }) => {
    return (
        <div className ="artwork-card">
            <img src={imageUrl} alt="Artwork" className="artwork-image" />
            <div className="artwork-details">
                <h2 className="artist-name">{artistName}</h2>
                <p className="artwork-date">{date}</p>
                <p className="artwork-description">{shortDesc}</p>
            </div>
        </div>
    )
}

export default Artwork;
