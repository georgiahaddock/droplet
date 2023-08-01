import React from 'react';
import Gallery from '../components/Gallery';


export default function Home(props){
    const allArt = [
        {
            "imageUrl": "https://media.tate.org.uk/art/images/work/T/T00/T00648_10.jpg",
            "artistName": "Piet Mondrian",
            "date": "1920",
            "shortDesc": "Composition with Red, Blue, and Yellow"
          },
          {
            "imageUrl": "https://www.wassily-kandinsky.org/images/gallery/Yellow-Red-Blue.jpg",
            "artistName": "Wassily Kandinsky",
            "date": "1910",
            "shortDesc": "Yellow-Red-Blue"
          },
          {
            "imageUrl": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/482447/1004984/restricted",
            "artistName": "Jackson Pollock",
            "date": "1950",
            "shortDesc": "Number 1A, 1948"
          },
          {
            "imageUrl": "https://buffaloakg.org/sites/default/files/styles/fixed_height_medium/public/artwork/RCA1940_008_o2.jpg?itok=Y0Nf4TWD",
            "artistName": "Joan Miró",
            "date": "1939",
            "shortDesc": "The Harlequin's Carnival"
          },
          {
            "imageUrl": "https://www.singulart.com/blog/wp-content/uploads/2019/08/rust-and-blue-header.jpg",
            "artistName": "Mark Rothko",
            "date": "1950",
            "shortDesc": "No. 61 (Rust and Blue)"
          }

    ]
    return(
        <div>
            <h1>Welcome to Droplet</h1>
            <Gallery artworks={allArt} />
        </div>
    )
}
