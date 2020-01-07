import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => { 
    return (
        <div>
        <h1 class ="topText">Hi! My name is Elise Hosu</h1>
        <p class ="default-text">I am a third year computer science student with an enormous passion for video games. 
            Ever since I was young I knew I wanted to work in the gaming industries. I’ve won 
            multiple awards for games I produced during high school and have gone on to do great 
            things throughout my degree. I’d love for you to check out some of my projects
        </p>

        <section class="stage">
            <figure class="ball"><span class="shadow"></span></figure>
            <Link to="/games"><button class = "buttonHome">My Games</button></Link>
        </section>  
          
        <section class="stage">
            <figure class="ball"><span class="shadow"></span></figure>
            <Link to="/hobbies"><button class = "buttonHome">My Hobbies</button></Link>
         </section> 
    </div>
    )
}

export default Home