import React from 'react';
import drawings from './Assets/murloc_2.png';
import aikido from './Assets/aikido.PNG';
import ncl from './Assets/nclAward.PNG';
import lol from './Assets/217097.jpg';
import film from './Assets/IMG-20160412-WA0005.jpg';
import management from './Assets/IMG-20151112-WA0005.jpeg';
import ship from './Assets/ship.PNG';

import { Link } from 'react-router-dom';

const Drawings = () => {
    return (
        <div class = "container">
            <div>
                <h1>Drawings</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                In my spare time I like to draw.
                Here are some of my work.
                </div>
            </div>
            <div>
                <img src={drawings} alt="Murloc" class = "image"/> 
            </div>
            <div>
            <Link to="/drawings"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const Aikido = () => {
    return (
        <div class = "container">
            <div>
                <h1>Aikido</h1>
            </div>
            
            <div>
                <img src={aikido} alt="Aikido" class = "image"/> 
            </div>
            <div>
            <Link to="/aikido"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const Ncl = () => {
    return (
        <div class = "container">
            <div>
                <h1>Ncl+ Award</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                Improving and developing personal skills
                through extra-curricular ectivities.
                </div>
            </div>
            <div>
                <img src={ncl} alt="NclAward" class = "image"/> 
            </div>
            <div>
            <Link to="/ncl"> <button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const Lol = () => {
    return (
        <div class = "container">
            <div>
                <h1>League of Legends</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                My most played game.
                Here is my League of Legends carrer.
                </div>
            </div>
            <div>
                <img src={lol} alt="League of Legends" class = "image"/> 
            </div>
            <div>
            <Link to="/lol"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const Film = () => {
    return (
        <div class = "container">
            <div>
                <h1>Film making</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                In my spare time I also enjoy creating 
                short videos in After Effects.
                </div>
            </div>
            <div>
                <img src={film} alt="Mindjack" class = "image"/> 
            </div>
            <div>
            <Link to="/films"> <button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const Management = () => {
    return (
        <div class = "container">
            <div>
                <h1>Top Management N-NV</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                My tiny start up business experience.
                </div>
            </div>
            <div>
                <img src={management} alt="Management" class = "image"/> 
            </div>
            <div>
            <Link to="/management"> <button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const Hackathons  = () => {
    return (
        <div class = "container">
            <div>
                <h1>Hackathons </h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                Different programming events I attended.
                </div>
            </div>
            <div>
                <img src={ship} alt="Battleship" class = "image"/> 
            </div>
            <div>
            <Link to="/hackathons"> <button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

export default [<Drawings />, <Aikido />, <Ncl />, <Lol />, <Film />, <Management />, <Hackathons />];