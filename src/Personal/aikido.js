import React from 'react'; 
import ImageGallery from 'react-image-gallery';

import p1 from './Aikido/aikido.PNG'

const Aikido = () => { 
    return ( 
        <div>
            <h1>Aikido</h1>
            <div class = "default-text">
                <p>
                In my spare time I like to work out and to do so I used to practice Aikido. It is a modern Japanese martial arts where the users could defend themselves while also protecting their attackers from injury.
                </p>
                <p>
                I achieved the rank of 6 Kyu.
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

export default Aikido; 