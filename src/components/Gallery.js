import React from 'react';
import Artwork from './Artwork.react';
import { Row, Col } from 'react-bootstrap';


function Gallery( { artworks }){
    return (
        <Row className="justify-content-center">
        {artworks.map((artwork, index) => (
        <Col xs={12} sm={6} md={4} key={index}>
          <Artwork
            key={index}
            imageUrl={artwork.imageUrl}
            artistName={artwork.artistName}
            date={artwork.date}
            shortDesc={artwork.shortDesc}
          />
          </Col>
        ))}
      </Row>
    )
}

export default Gallery;
