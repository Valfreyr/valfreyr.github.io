import React from 'react'; 
import ImageGallery from 'react-image-gallery';

import p1 from './Films/11071505_1073760285984200_6826171892729461459_n.jpg'
import p2 from './Films/IMG-20150325-WA0025.jpg'
import p3 from './Films/IMG-20150327-WA0003.jpeg'
import p4 from './Films/IMG-20150327-WA0005.jpeg'
import p5 from './Films/IMG-20160412-WA0005.jpg'
import p6 from './Films/mindjackD.PNG'

const Films = () => { 
    return ( 
        <div>
            <h1>My Films</h1><hr/>
            <div class = "default-text">
                <p>
                Infomatrix competition had a multimedia section as well where contestant would have to produce a short film having a different theme. In 2015 we were supposed to show why burglary was bad. I wanted to add a futuristic vibe to it so I decided to create a world where people could enter other people’s mind and steal any kind of information. Getting that information would not be that easy because the subconscious of the invaded person would manifest like laser beans and other kind of traps to the invader. If they triggered one of the alarm systems, the target would instantly know they got attacked and by who. The short film is called Mindjack and it won a bronze medal at national level.
                <a href= "https://www.youtube.com/watch?v=LvrvIdyRVAo"> Click here to see the video. </a>
                </p>
                <p>
                The film above was filmed and edited in After Effects in a week without prior knowledge of the software or how to actually shoot a short film. This experience made me realise I liked editing videos so I tried experimenting more by editing short clips from League of Legends.
                <a href= "https://www.youtube.com/watch?v=kHfP-7mN4UI&feature=youtu.be"> Click here to see the video. </a>
                </p>  

                <p>
                I also did a music video for a friend: 
                <a href= "https://www.youtube.com/watch?v=PziscRLDggs&fbclid=IwAR3gN04SaRxqqiVIu8BZQ0Neg5JS9QpVS9X53oECUJ_CBIZq9oqp9Am2Yv4"> Click here to see the video. </a>
                </p>

                <p>
                This skill proved to be very useful during my first year of university where we had to film a 10-minute video about the Internet and the privacy risks. The parts that look hand drawn are made by me.
                <a href= "https://www.youtube.com/watch?v=ag6Nqh-xUK8&feature=youtu.be"> Click here to see the video. </a>
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
  ]; 

  
class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  } 

export default Films; 