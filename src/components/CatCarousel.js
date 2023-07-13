import React from 'react';
import { Carousel } from 'react-bootstrap'

// TODO
// 3. Dynamically Render All of the Cats

// GOAL: Using the array of cats, map over the array and render a <Carousel.Item> for each one.

// Add a newline just inside of your <Carousel>, and give yourself some space to start writing the map. (We don’t necessarily want to delete the whole <Carousel.Item>, instead we’ll just wrap that item in our map.)

// Use .map() to iterate over the cats, and for each one, render a single <Carousel.Item>

// Refer to React’s docs on Rendering Lists if you’re having trouble with the map.

// Replace the hard-coded content in the img src, h3, and p, with the imgUrl, name, and about, from each cat.

// 4 cats should now appear in the Carousel in the UI. This should PASS tests 3 and 4

function CatCarousel() {
    // const cats = [
    //     {
    //         imgUrl: 'https://cdn2.thecatapi.com/images/MTgzOTYzNQ.jpg',
    //         name: 'Dopey',
    //         about: 'Just here for the snacks',
    //     },
    //     {
    //         imgUrl: 'https://cdn2.thecatapi.com/images/1f1.jpg',
    //         name: 'Grumpy',
    //         about: "Tired of Dopey's snacking",
    //     },
    //     {
    //         imgUrl: 'https://cdn2.thecatapi.com/images/bc7.jpg',
    //         name: 'Sleepy',
    //         about: 'ZzzzzzZZzzzz...',
    //     },
    //     {
    //         imgUrl: 'https://cdn2.thecatapi.com/images/MTg0Mzk1NA.jpg',
    //         name: 'Sneezy',
    //         about: 'Ah-choo!',
    //     },
    // ];

    return (
        <div className="mt-4 mx-auto h-75 w-75">
            <h1>Multicats</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*"
                        alt="First slide"
                    />
                <Carousel.Caption>
                    <p> this is a kitty pic </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
                        alt="Second slide"
                    />
                <Carousel.Caption>
                    <p> this is another kitty pic </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.purina.co.uk/sites/default/files/2020-11/8-Fluffy-Cat-BreedsHERO.jpg"
                        alt="Third slide"
                    />
                <Carousel.Caption>
                    <p> this is another another kitty pic </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CatCarousel;
