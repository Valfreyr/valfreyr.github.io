import React from 'react'; 
import ImageGallery from 'react-image-gallery';
import p1 from './Unreal/IMG-20160518-WA0003.jpg'
import p2 from './Unreal/IMG-20160520-WA0001.jpg'
import p3 from './Unreal/IMG-20160522-WA0003.jpg'
import p4 from './Unreal/IMG-20160524-WA0019.png'
import p5 from './Unreal/IMG-20160522-WA0024.jpg'
import p6 from './Unreal/IMG-20160523-WA0019.png'
import p7 from './Unreal/IMG-20160527-WA0001.jpg'
import p8 from './Unreal/IMG-20160524-WA0001.jpg'
import p9 from './Unreal/UntitledSideScroller.png'
import p10 from './Unreal/IMG-20160524-WA0018.jpg'
import p11 from './Unreal/IMG-20160523-WA0002.jpg'

const Unreal = () => { 
    return ( 
        <div>
            <h1>Untitled Side Scroller</h1><hr/>
            <div class = "default-text">
                <p>
                This was my first game in Unreal Engine. It was inspired from the Trine series with a little twist. I wanted to combine two genres FPS and sidescrollers. The FPS part would be the dynamic action packed part of the games whereas the sidescroller would had been the more relaxed puzzled side of it.
                </p>

                <p >
                The story was about a young boy forced to defend himself in a time of war. He was dragged in a conflict he did not want to be part of. The FPS side of the game would follow his survival and the warzone. The sidescroller would reflect what was going on in his mind. I wanted to add 2 characters which would represent the voice in his head. Imagine it as if you were having a conversation with yourself. This was inspired from Firewatch where you would talk to a mysterious person then decide whether or not you wanted to reply and open yourself to them.
                </p>

                <p>
                I wanted the scene to slowly transition from a mystical forest to an old battlefield where nature grew over everything. You can see below some of the pictures of the shields and helmets that were supposed to be in the environment and some of the ruins.
                </p>

                <p>
                Based on my other games that I created, I also wanted to add decisions in the sidescroller part of the game. Those decisions would later have an impact on the main RTS bit of the game.
                </p>
                <p>
                Due to not using source control and my hard drive failing, this was another project that I lost. I was only able to recover a bit of the sidescroller gameplay. 
                </p>
                <p>
                To complete the level, the player must move a few boxes and solve 2 puzzles. Final puzzle involves putting symbols in an order seen in the background throughout the whole level.
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
  ];

class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  }

export default Unreal; 