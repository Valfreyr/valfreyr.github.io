import React from 'react'; 
import ImageGallery from 'react-image-gallery';

import p1 from './Ncl/nclAward.PNG'

const Ncl = () => { 
    return ( 
        <div>
            <h1>ncl+ Award</h1><hr/>
            <div class = "default-text">
                <p>
                Alongside the coursework I did for university, I also got involved in Gaming Society. I became their League of Legends Esports Officer. My responsibilities were to ensure our League of Legends teams were ready to compete, organise events with NUEL and resolve any conflicts between our members.
                </p>
                <p>
                To get this award I had have at least 50 hours of activities in both semesters and prove that I improved certain skills. Those skills were Peer assessment/review, Problem-solving and Adaptability.
                </p>

                <h2>
                Peer assessment/review story
                </h2> <hr/>

                <p>
                When the new NUEL/NSE split started this academic year I was a substitute player for my team. This meant I wouldn’t be able to play as much as I wanted to. It made me extremely upset and I was desperate to find something to get myself more involved in the society.
                </p>
                <p>
                I realised, since my knowledge and level of understanding of the game was higher than anyone else’s, I can watch their games and try to help them by analysing their mistakes. I talked with every team and I told them I am happy to work with them so that they can improve. After I posted that message everyone started asking me for 1 on 1 sessions which I was happy to provide.
                </p>
                <p>
                My goal was to identify mistakes and then provide different strategies and tools so the errors would not happen again. This required watching multiple games of a team playing together or a single player. I recorded their games and noted in-game timers so that the person who is viewing the feedback can easily see and understand what they could have done better.
                </p>
                <p>
                For 1 on 1 sessions I would get the player to see a map of the game and depending on the role they played on the team, I would show them different strategies and important spots they had to keep in mind.
                After a few sessions like this, the teams started winning more games and one even qualified for the NSE regionals finals. Individual players also improved. Their rank got higher and they were extremely happy with the results (in the game the highest rank is 1).
                </p>

                <h2>
                Problem-solving story
                </h2> <hr/>

                <p>
                This year (2019), I had the opportunity to run for League of Legends eSports Manager. I saw this as a great chance for me to change something. A lot of people were complaining about the “Tryout period” – a time where players would organise their teams. Some wanted to play the game in a serious way whereas others just wanted to have fun.
                </p>
                <p>
                I spent the winter break considering this. Over time I asked for feedback from players about my ideas. Upon gathering enough information, I wrote a registration form.
                </p>
                <p>
                The “Tryout period” was changed from 2 hours to 2 weeks. This was necessary because it takes more than a day to get to know someone’s full potential in the game, since ability varies over time they may have had a bad day or were not comfortable with the equipment we provided at the venue. I then introduced 2 different types of teams just like the players wanted. A “Pro” team where they were encouraged to create a schedule and practice together a lot more than before and where they were also given a coach and a “Casual” team where they would continue playing as they did before with no extra rules or obligations. The “Pro” team also had a strike system: a player would get a strike if they missed a training session or a match day without a good reason. This was introduced to make sure that everyone in the team was sharing the same goal and they were putting in the same effort. After 2 strikes, with the captain’s agreement, the player was removed from the team.
                </p>
                <p>
                This system was a success; most of the players were feeling better in their teams thus their teamwork and performance improved. Most teams placed higher in the tournament than last year.
                </p>

                <h2>
                Adaptability story
                </h2> <hr/>

                <p>
                This year (2019) Newcastle’s Gaming Society hosted the charity event Gameblast. The main event featured many games for people to enjoy. There was also a Twitch livestream where Newcastle’s teams would face Durham’s teams in various games. These matches were on the front page of Twitch which meant I could attract a lot of viewers/potential donors.
                </p>
                <p>
                My counterpart at Durham and I had a few Discord (like Skype) calls where we talked about what we would do with the stream. Each game had a 2-hour slot to provide entertainment for the stream. 
                </p>
                <p>
                He had a lot of ideas, but I decided it was better to do a risk analysis. There were so many things that could go badly: computers not working, internet problems, matches being too long or too short or even the fact that the teams were not balanced and most of the matches could be one-sided. I suggested it was better for us to take a different approach, by starting off with a normal match then making one person play on the mouse and another one on the keyboard to add variety. This was a great idea; players found it enjoyable, the commentator had an easier time and we had a lot more people watching the stream.
                </p>
                <p>
                On the day, there was a thing we didn’t take into account. The university forgot to put internet on the computers resulting in a 30-minute delay. This meant we couldn’t stick to the initial plan. I was quick to react and decided to focus only on the main matches, thus leaving out other game modes we discussed.
                </p>
                <p>
                The day ended up being a complete success because everyone said the League of Legends part of the stream was the best part and we managed to collect over 500 pounds for charity.
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
  ]; 

  
class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  } 

export default Ncl; 