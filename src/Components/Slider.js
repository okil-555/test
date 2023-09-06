import React from "react";
import { Carousel } from 'react-bootstrap';
import slider1 from './../img/slider1.jpg';
import slider2 from './../img/slider2.jpg';
import slider3 from './../img/slider3.jpg';
import './stcarus.css';
export default function Slider(){
    return (
    <Carousel fade>
        <Carousel.Item className="itcar">
            <img 
           
            src={slider1}
            alt="slider 1"
            width="100%"
            height="100%"
            
            />
        </Carousel.Item>
        <Carousel.Item className="itcar">
            <img 
           
                 src={slider2}
            alt="slider 2"
            width="100%"
            height="100%"
            />
        </Carousel.Item>
        <Carousel.Item className="itcar">
            <img 
          
            src={slider3}
            alt="slider 3"
            width="100%"
            height="100%"
            />
        </Carousel.Item>
    </Carousel>
    )
}
