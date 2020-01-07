import React from 'react'; 
import ImageGallery from 'react-image-gallery';
import p1 from './UniProjects/graphics.png'
import p2 from './UniProjects/p1.png'
import p3 from './UniProjects/p2.png'
import p4 from './UniProjects/p3.png'
import p5 from './UniProjects/unknown-27.png'

const Uni = () => { 
    return ( 
        <div>
            <h1>University Projects</h1><hr/>
            <div class = "default-text">
                <p>
                During my third university year I have been working on interesting coursework projects.
                </p>

                <h2>
                Programming for Game Module
                </h2><hr/>

                <p>  
                My first coursework was on memory allocation. I was supposed to program a class similar to “vector” one available for C++.  A polynomial object would store coefficients and the powers of variable X. Two polynomial object could then be added, subtracted and multiplied together to form new polynomials.
                </p>

                <p>
                My second coursework was on collision between chess pieces. I had to simulate a chess game with 3 types of pieces, queen, bishop and rook. The pieces would move randomly by a small amount and pieces of the same type would be in the same team. The game simulation would give information on collisions and at the end of the game would print the score.
                </p>    

                <h2>
                Graphics for Games Module
                </h2><hr/>

                <p>
                For this module I had to learn and understand how a graphics pipeline works. I had to familiarise myself with OpenGl syntax and GLSL.
                </p>

                <p>
                For the first project I had to create a scene with movable 2D and 3D objects. The scene was filled with stars to show the perspective of it. As an extra feature, I coded a first person controller so you can rotate the camera and move around.
                </p>

                <p>
                For the second project I had to create advanced shaders.  I was given a rotating cube and I had to “destroy” it in creative ways. My first approach was to make it split into multiple cubes through a geometry shader. My second approach was to tessellate the surface of the cube and make it look like it shattered into a loads of colourful shards. My final advanced shader was adding a skybox to the scene and making the cube reflect and refract it.
                </p>


            </div>
            <div class = "gallery">
                <MyGallery />
            </div>
        </div>
    )
}

const images = [
    {
        original: p1,
        thumbnail: p1,
    },
    {
        original: p2,
        thumbnail: p2,
    },
    {
        original: p3,
         thumbnail: p3,
    },
    {
        original: p4,
        thumbnail: p4,
    },
    {
        original: p5,
        thumbnail: p5,
    },
  ];

class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  }

export default Uni; 