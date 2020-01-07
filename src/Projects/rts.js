import React from 'react'; 
import ImageGallery from 'react-image-gallery';
import p1 from './RTS/rts.png'
import p2 from './RTS/game1.JPG'

const RTS = () => { 
    return ( 
        <div>
            <h1>Real Time Strategy Game</h1><hr/>
            <div class = "default-text">
            <p>
            For my final university year, I decided I wanted to approach a different game genre and revisit Unreal Engine. I am a big fan of real time strategies and wanted to learn more about the process of making on.
            </p>

            <p>
            This is still an ongoing project and I am planning on working more on it after I graduate.
            </p>

            <p>
            My dissertation will be based on this type of game and I will be researching real time reactions of an AI during the game.
            </p>

            <h2>
            Context
            </h2><hr/>

            <p> 
            Artificial intelligence is a simulation of learning and decision making abilities. In our modern times this tool has been used for a wide range of activities such as medical diagnosis, aviation, Deepfake etc. 
            </p>

            <p>
            Another use of AI is for video gaming. It is normally used to mimic human like behaviour in NPCs (non-player characters) and thus creating an immersive gameplay world. A human can react and adapt to changes of the environment in real time, however, whereas an AI is more rigid due to mainly consisting of hard coded behaviours. A behaviour tree is used to help the AI make decisions and most of the time it does not take into account all the factors from the game, resulting in repetitive, simple or abnormal behaviour.
            </p>

            <h2>
                The Problem
            </h2><hr/>

            <p>
            Throughout the history of gaming AIs have been scrutinised for hindering players due to their pre-defined logic and only recently have they started to provide a more immersive experience by reacting faster than the player does. Some might think that this type of simple AI is sufficient for games, however in some scenarios, such as in competitive games, it can be rewarding to have a challenging non-player opponent or ally.
            </p>

            <p>
            Modern computers can deal with large amount of data, but processing speed and memory can still be an issue if too much data is available. To view the opposite side of this problem, an AI can also be limited by the amount of information it can gather on its own. This sensory limitation can restrict the way it processes the environment, thus decreasing the operations it can do to achieve its goal. Nevertheless, an AI is expected to do a whole range of activities such as critical decision making, reacting fast to a new or unpredicted event, recover from a position where it has deviated from the main goal, and many more. Such tasks can only be accomplished if the system knows how to switch between sub-goals and different “thinking” methods even when some of the data is missing.
            </p>

            <p>
            Putting all these constraints together, a real-time AI must reliably accomplish complex critical operations under realistic resource limitations in a dynamic environment. 
            </p>

            <h2>
                Aims
            </h2><hr/>

            <p>
            The project aims to develop a simple real time environment where then an AI can be trained to learn the mechanics of gameplay. It also aims to understand how an AI can make these real time decisions and how could you improve the decision making system while gathering data and dealing with unforeseen events. 
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
  ];

class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  }

export default RTS; 