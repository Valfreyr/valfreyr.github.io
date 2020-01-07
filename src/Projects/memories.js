import React from 'react'; 
import ImageGallery from 'react-image-gallery';
import p3 from './Memories/IMG-20150218-WA0003.jpg'
import p4 from './Memories/IMG-20150218-WA0006.jpg'
import p5 from './Memories/IMG-20150218-WA0008.jpg'
import p9 from './Memories/IMG-20150219-WA0007.jpg'
import p10 from './Memories/IMG-20150220-WA0001.jpg'
import p11 from './Memories/IMG-20150220-WA0005.jpg'
import p13 from './Memories/IMG-20150509-WA0003.jpg'
import p15 from './Memories/IMG-20150511-WA0004.jpg'
import p16 from './Memories/IMG-20150512-WA0007.jpg'
import p18 from './Memories/IMG-20150514-WA0006.jpg'
import p21 from './Memories/IMG-20150514-WA0013.jpg'
import p23 from './Memories/IMG-20150514-WA0018.jpg'
import p24 from './Memories/IMG-20150514-WA0022.jpg'
import p25 from './Memories/memories.png'
import p26 from './Memories/info2.PNG'
import p27 from './Memories/info2t.PNG'
import p28 from './Memories/ed1.PNG'
import p29 from './Memories/ed1t.PNG'
import p30 from './Memories/ed2.PNG'
import p31 from './Memories/ed2t.PNG'

const Memories = () => { 
    return ( 
        <div>
            <h1>Memories</h1><hr/>
            <div class = "default-text">
                <p>
                This was the first game I ever coded and my first experience with Unity. Back in 2015 there was a contest about educational apps called “History and society in the virtual dimension”. We were supposed to design and create an application which can be used by a teacher to teach their subject in a unique way. I saw it as an opportunity for me to design something oriented more towards gaming, because when you game you get a lot of interaction with everything and the player is more immersed in the action. That means it could be a lot easier for a student to learn and retain new information.
                </p>

                <p >
                I chose psychology because I thought I could introduce a story to exemplify all the characteristics of the human mind. I also thought it would be a good idea to let the players tailor the story because at the end I added a little surprise. They could see their personality type and I thought because they knew the reason behind their choices they would understand everything better.
                </p>

                <p>
                Each chapter is supposed to make you experience a different emotion. First one is fear, second one is shame/embarrassment, third one is frustration and the last one is happiness or sadness depending on your options. I mostly chose negative feelings because they make people act and behave irrationally since their judgment is clouded by those emotions. My psychology teacher helped me make the story and the personality test as accurate as possible
                </p>

                <p>
                The version on GitHub is not the final version. It is the version that won first place on county level in the competition.
                </p>

                <p>
                The version which won bronze medal on the national level (out of 100 contestants) had 2D scenes when the story was a bit more dynamic. For example, in chapter one it is late at night and you feel like you are chased by the darkness around you, the player had to run away and find their room (based on a description) where they felt safe. The player and the environment were sprites and the animations were done frame by frame. Moreover, it had notifications when there was more information added to the info tab in the menu. The game had the option to pause when you pressed escape, letting you choose either between settings, exiting the game or reading more about what happened in the story and the explanation from a psychological point of view.
                </p>

                <p>
                The reason why I don’t have the final version anymore is because my then hard drive failed and I lost everything on it. I did not know what or how to use source control. I was one of the hardest lessons I’ve learned in 2015. Looking back, I deeply regret not researching how a proper project was done.
                </p>

                <p>
                I’ve only managed to recover an old version and some pictures that were taken during the development of the game. Spoilers, I did not know what screenshots are either. Below you can see some pictures taken with my phone of the scene described above and also another scene in chapter 2 where the player has to interact with other characters to achieve his goal (impressing the girl surrounded by a lot of guys). To do that the players needs to talk with almost everyone in the room and to pick dialog lines which will result in different outcomes.
                </p>

                <p>
                This educational game also won second place at “InfoEducatie”.
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
        original: p13,
        thumbnail: p13,
      },
      {
        original: p15,
        thumbnail: p15,
      },
      {
        original: p16,
        thumbnail: p16,
      },
      {
        original: p18,
        thumbnail: p18,
      },
      {
        original: p21,
        thumbnail: p21,
      },
      {
        original: p23,
        thumbnail: p23,
      },
      {
        original: p24,
        thumbnail: p24,
      },
      {
        original: p25,
        thumbnail: p25,
      },
      {
        original: p26,
        thumbnail: p26,
      },
      {
        original: p27,
        thumbnail: p27,
      },
      {
        original: p28,
        thumbnail: p28,
      },
      {
        original: p29,
        thumbnail: p29,
      },
      {
        original: p30,
        thumbnail: p30,
      },
      {
        original: p31,
        thumbnail: p31,
      },
  ];
   
  class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  }

export default Memories; 