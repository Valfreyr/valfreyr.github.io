import React from 'react'; 
import ImageGallery from 'react-image-gallery';

import p1 from './Hackathons/ship.PNG'
import p2 from './Hackathons/Designer;s Nest.png'
import p3 from './Hackathons/15621982_1058215577657346_2412272824420878206_n.jpg'
import p4 from './Hackathons/15492036_1055986474546923_8118996776939576050_n.jpg'
import p5 from './Hackathons/logo_1.jpg'
import p6 from './Hackathons/info2014.PNG'
import p7 from './Hackathons/info2014t.PNG'
import p8 from './Hackathons/infoMerit.PNG'
import p9 from './Hackathons/infoMeritT.PNG'
import p10 from './Hackathons/tic2014.PNG'
import p11 from './Hackathons/tic2014t.PNG'
import p12 from './Hackathons/tic2015.PNG'
import p13 from './Hackathons/tic2015t.PNG'

const Hackathons  = () => { 
    return ( 
        <div>
            <h1>Hackathons </h1><hr/>
            <div class = "default-text">
                <p>
                When I was in high school, I loved the idea of challenging projects so I tried my best to participate in every competition that was available to me.
                </p>
                <p>
                In one of the events, Game of Codes, I had to create a battleship game with different rules. Some ships had more health and different shapes. The goal was to use as less shots as possible and win the game. I was in a team with my best friend and had 12 hours to finish this algorithm. Out of 50 people we finished top 10.
                </p>
                <p>
                Another event was about building a restaurant app in 2 days. It was another duo project. There was a QR code the phone was supposed to scan to inform the app about the user and the table he/she was sat at.  Then, the app had a menu which could had been used to order food and drinks without needing to wait for someone to get the order. Unfortunately, my server side and android knowledge at that time was poor so we ended up not completing the app. This resulted in us not getting a prize and thus I cannot mention the name of the competition.
                </p>
                <p>
                The same event as the one above also had a 4-hour challenge to create logos for a fictive company called Programmer’s Nest. I made a tree that grows out of spinning cog wheels. The cogs would symbolise the intellectual power of the programmers and the tree would be the produced apps. The jury did not like my logo and so I did not receive any awards.   
                </p>
                <p>
                In my final year of high-school I joined a robotics contest called First Tech Challenge. I helped design the logo for the team and build some of the robot’s sensors. I remember the team got to the national stage but I don’t remember how they performed. I was not allowed to continue my work with them because I was about to graduate and had to focus on my final exams.
                <a href= "https://www.facebook.com/harambecartel/?epa=SEARCH_BOX">You can visit their Facebook page here </a>
                </p>
                <p>
                Nowadays, I enjoy going to different types of meetups in Newcastle such as Ministry of Testing, OWASP and different sorts of gaming related ones.
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

export default Hackathons ; 