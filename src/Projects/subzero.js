import React from 'react'; 
import ImageGallery from 'react-image-gallery';
import p1 from './Atestat/subzero.png'
import p2 from './Atestat/received_1339602966109395.png'
import p3 from './Atestat/amira_1.png'
import p4 from './Atestat/IMG-20160217-WA0019.jpeg'
import p5 from './Atestat/received_1901700126547632.png'
import p6 from './Atestat/village_1.jpg'
import p7 from './Atestat/game1.png'
import p8 from './Atestat/game2.png'
import p9 from './Atestat/game3.png'
import p10 from './Atestat/game4.png'
import p11 from './Atestat/10.jpg'
import p12 from './Atestat/12931263_1750749211803372_3180139505013316319_n.jpg'
import p13 from './Atestat/info.PNG'

const Subzero = () => { 
    return ( 
        <div>
            <h1>Subzero</h1>
            <div class = "default-text">
                <p>
                My high school required every student studying computer science to have a project before they graduate. The teacher wanted us to create something in Visual Studio, using either C# or C++ so I saw an opportunity to create something in Unity. This game would be a polished version of the “Untitled Side Scroller” but still lacking some of the puzzles from it.
                </p>

                <p >
                The player only has to pay attention to the symbols it sees throughout the level and at the end press E in front of the tree with the right symbol. The game plays a musical note if you activated the right symbol. Otherwise, the character will inform you about the wrong combination.
                </p>

                <p>
                This project was my first experience with animations and motion capture. I also did more research on lighting to understand how to build a night scene.
                </p>

                <p>
                This project won second place at the Infomatrix international competition.
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
    {
        original: p6,
        thumbnail: p6,
    },
    {
        original: p7,
        thumbnail: p7,
    },
    {
        original: p8,
        thumbnail: p8,
    },
    {
        original: p9,
        thumbnail: p9,
    },
    {
        original: p10,
        thumbnail: p10,
    },
    {
        original: p11,
        thumbnail: p11,
    },
    {
        original: p12,
        thumbnail: p12,
    },
    {
        original: p13,
        thumbnail: p13,
    },
  ];

class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  }

export default Subzero; 