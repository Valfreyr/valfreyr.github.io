import React from 'react'; 
import ImageGallery from 'react-image-gallery';

import p1 from './Management/11218987_1045240275510454_1995762439039503903_n.jpg'
import p2 from './Management/IMG-20151113-WA0001.jpeg'
import p3 from './Management/IMG-20151112-WA0005.jpeg'
import p4 from './Management/IMG-20151112-WA0000.jpeg'
import p5 from './Management/IMG-20151112-WA0002.jpeg'
import p7 from './Management/IMG-20151113-WA0008.jpeg'
import p8 from './Management/IMG-20151114-WA0017.jpeg'
import p9 from './Management/IMG-20151114-WA0020.jpeg'
import p10 from './Management/top.PNG'
import p11 from './Management/topTranslate.PNG'

const Management = () => { 
    return ( 
        <div>
            <h1>Top Management N-NV</h1><hr/>
            <div class = "default-text">
                <p>
                During my high school years, I had the opportunity to simulate the experience of starting my own company. Together with a few friends, we decided to accept this challenge and see what it would be like to start a gaming indie company. We called it Helix Corp/ Cyber Helix.
                </p>
                <p>
                At the beginning we had to build a website which was a big challenge on its own because we barely started learning what a programming language is. Then, we had to register the company and wait for the government to issue and ID for it. I remember we had to do a lot of paper work for it. Anything from figuring out how much money we’d make and lose to how are we planning on getting on the market and what sort of adverting we’d do.
                </p>  

                <p>
                I decided to make a short ad.
                <a href= "https://www.youtube.com/watch?v=lbplk9ykJEM&feature=youtu.be"> Click here to see the video. </a>
                </p>

                <p>
                We were given virtual money which could had been used on their platform to perform negotiations, do marketing actions and perform different kind of transactions.
                </p>
                <p>
                The whole project lasted a few months and it provided a few workshops on teamwork and communication.
                </p>
                <p>
                The final step was to attend a companies’ fair and present our progress and company. There were different kinds of awards given out such as best stand, best presentation, best mascot and many others. My company won the best stand award.
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

export default Management; 