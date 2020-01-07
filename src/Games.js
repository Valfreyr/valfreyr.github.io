import React from 'react';
import memories from './Assets/memories.png';
import xmas from './Assets/xmas.png';
import untitled from './Assets/UntitledSideScroller.png';
import subzero from './Assets/subzero.png';
import sagezza from './Assets/sagezza.png';
import rts from './Assets/rts.png';
import uniProjects from './Assets/graphics.png';

import { Link } from 'react-router-dom';

const Memories = () => {
    return (
        <div class = "container">
            <div>
                <h1>Memories</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                    Educational game with the purpose of teaching 
                    psychology and a focus on personality traits.
                    Explore the story of a young child while making life
                    decisions for the protagonist.
                </div>
            </div>
            <div>
                <img src={memories} alt="Memories" class = "image"/>
            </div>
            <div>
                <button class = "button"><Link to="/memories">Find out more</Link></button>
            </div>
        </div>)
}


const Xmas = () => {
    return (
        <div class = "container">
            <div>
                <h1>X-mas</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                    Choose your own adventure book made for a friend
                    as part of a Secret Santa event.
                    In the game you have to save Christmas from a witch.
                </div>
            </div>
            <div>
                <img src={xmas} alt="X-mas" class = "image"/>
            </div>
            <div>
            <Link to="/xmas"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const UntitledSideScroller = () => {
    return (
        <div class = "container">
            <div>
                <h1>Untitled Side Scroller</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                    Puzzle side scroller game.
                </div>
            </div>
            <div>
                <img src={untitled} alt="UntitledSideScroller" class = "image"/>
            </div>
            <div>
            <Link to="/unreal"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const Subzero = () => {
    return (
        <div class = "container">
            <div>
                <h1>Subzero</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                    High-school disertation.
                    Puzzle side scroller.
                </div>
            </div>
            <div>
                <img src={subzero} alt="Subzero" class = "image"/>
            </div>
            <div>
            <Link to="/subzero"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const AndroidAppSaggezza = () => {
    return (
        <div class = "container">
            <div>
                <h1>Saggezza App</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                    My first team project.
                </div>
            </div>
            <div>
                <img src={sagezza} alt="Saggezza" class = "image"/>
            </div>
            <div>
            <Link to="/saggezza"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const RTS = () => {
    return (
        <div class = "container">
            <div>
                <h1>Real Time Strategy Game</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                    First universtiy project.
                </div>
            </div>
            <div>
                <img src={rts} alt="RTS" class = "image"/> 
            </div>
            <div>
            <Link to="/rts"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}

const UniversityProjects = () => {
    return (
        <div class = "container">
            <div>
                <h1>University Projects</h1>
            </div>
            <div class = "overlay">
                <div class = "text">
                    Projects made for university courseworks.
                </div>
            </div>
            <div>
                <img src={uniProjects} alt="UniProject" class = "image"/>
            </div>
            <div>
            <Link to="/uniProjects"><button class = "button">Find out more</button></Link>
            </div>
        </div>)
}



export default [<Memories />, <Xmas />, <UntitledSideScroller />, <Subzero />, <AndroidAppSaggezza />, <RTS />, <UniversityProjects/>];