import React from 'react'; 
import ImageGallery from 'react-image-gallery';
import p1 from './Saggezza/sagezza.png'
import p2 from './Saggezza/back.png'
import p3 from './Saggezza/finalPoster.png'
import p4 from './Saggezza/Screenshot_20190501-195132.png'
import p5 from './Saggezza/Screenshot_20190501-212638.png'
import p6 from './Saggezza/Screenshot_20190501-212731.png'
import p7 from './Saggezza/Screenshot_20190501-212750.png'
import p8 from './Saggezza/Screenshot_20190501-212816.png'
import p9 from './Saggezza/website.JPG'

const Sagezza = () => { 
    return ( 
        <div>
            <h1>Sagezza Android App</h1><hr/>
            <div class = "default-text">
                <p>
                During my second university year I was placed in a team of 10 students and we had to build a mobile app. The purpose of the project was to simulate working in a team using agile methodology and dealing with a client.
                </p>

                <p >
                We had to build an application for the company Saggezza that would manage sensitive information about their employees. The application would have 3 types of users (Admins, managers and simple users) with different access to the application’s features. For example, a normal user would see limited information on other employees’ profile whereas a manager could see an extended list. An admin could remove or add users
                </p>

                <p>
                I was the lead programmer in this project; a role which I picked because I thought it would be the perfect opportunity to test my management skills. Also, given my high school background (4 years of C++) and some internships I did over the summer, I thought it would be a fitting position because I assumed I had more experience in programming than anyone else in the team. That meant in the event that something went wrong, I could guide them and perhaps jump in to save the situation.
                </p>

                <p>
                My responsibilities were to make sure we meet the deadlines on time and that everyone on the team knew what they had to do from a technical perspective. To ensure this, we held a weekly meeting where we would discuss how individual tasks were progressing, this could serve to highlight if someone needed help or if someone finished their task and needed to work on something else. I also wanted to make sure everyone was comfortable with their work so I would always give them several options that they could work on.
                </p>    

                <p>
                <a href = "http://homepages.cs.ncl.ac.uk/2018-19/CSC2022/Team10/website/index.html?fbclid=IwAR0lTjCrjXevgobEve5u8zG1-TGXoH-YEqDTDRt_9ctPss5WclfhLqySLKI" >You can download the app here. </a>
                You can log in with the email: test@adk.com and password: 1234     
                </p>  

                <h2> 
                Transferable skills:
                </h2><hr/>

                <p> 
                I believe I gained a few skills which can be transferred to a real life job or situation:
                </p>

                <h3>
                Technologies
                </h3><hr/>

                <p>
                -	During the development phase I familiarised myself with a lot of different technologies such as Microsoft Azure, BLOB Storage (used to store profile pictures and documents), Entity Framework, .NET, Android Studio, Postman and Adobe XD
                </p>

                <p>
                -	I also learned a lot about security and how to make the app safer. I studied how credentials are stored properly and realized our system is not encrypting them properly. For every user, I added a salt to their encrypted string to make it safer. I also added session tokens to protect the server from malicious users (server now only replies to HTTPS calls if you authenticate with it first).
                </p>

                <p>
                -	I polished my C# knowledge  
                </p>

                <p>
                -	I have a better understanding of how HTTPS requests work and I learned how to use Postman to test them
                </p>

                <h3>
                Leadership and Team Management
                </h3><hr/>

                <p>
                -	I improved my leadership skills and now I think I can recognise quicker certain situations (such as when a person does not fit into a team) and I can manage them better now
                </p>

                <h3>
                Teamwork and Communication
                </h3><hr/>

                <p>
                -	I believe these are key skills that are required in every future job
                </p> 

                <p>
                -	I am also familiarised with Agile methodology and terminology which is very important when you apply for a developer position
                </p> 

                <h3>
                Critical thinking
                </h3><hr/>

                <p>
                -	During this project I had to make a lot of decisions on what features I would like to keep (because of time constraint) and which ones we should prioritise.
                </p>

                <p>
                -	I also solved many programming issues related to our app, server and database
                </p>

                <h3>
                Listening and providing feedback
                </h3><hr/>

                <p>
                -	Even if I did not do it correctly from the beginning, I believe this is one of the skills that helped me become a better member of the team
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
  ];

class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  }

export default Sagezza; 