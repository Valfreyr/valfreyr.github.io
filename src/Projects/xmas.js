import React from 'react'; 
import ImageGallery from 'react-image-gallery';
import p1 from './Xmas/xmas.png'
import p2 from './Xmas/xellah.png'
import p3 from './Xmas/witch.png'
import p4 from './Xmas/tree.png'
import p5 from './Xmas/page.png'

const Xmas = () => { 
    return ( 
        <div>
            <h1>X-Mas</h1><hr/>
            <div class = "default-text">
                <p>
                This was the second game I created. My teacher decided for that year’s Christmas we would do Secret Santa with a twist. We had to develop a Christmas themed application and make sure the person seeing us presenting would know it was for them.
                </p>

                <p >
                I decided to create an interactive book, pick your own adventure style. Player would read then decide what happens in the story. On some of the pages I wanted to have 3D models “unfolding” to make the book interesting and dynamic but I was not able to do that due to my limited knowledge back then. That is why on one of the pages you can see a cube sticking out.
                </p>

                <p>
                Some of my friends helped writing the story and came up with loads of inside jokes.
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
  ];

class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  }

export default Xmas; 