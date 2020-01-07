import React from 'react'; 
import ImageGallery from 'react-image-gallery';

import p1 from './Drawings/murloc_2.png'
import p2 from './Drawings/test.png'
import p5 from './Drawings/Designer;s Nest.png'
import p6 from './Drawings/dragon_2nd_try.jpg'
import p7 from './Drawings/DSC_0131.JPG'
import p8 from './Drawings/DSC_0132.JPG'
import p9 from './Drawings/DSC_0133.JPG'
import p10 from './Drawings/DSC_0136.JPG'
import p11 from './Drawings/DSC_0331.JPG'
import p12 from './Drawings/DSC_0567.JPG'
import p13 from './Drawings/final _d.jpg'
import p14 from './Drawings/jay.jpg'
import p15 from './Drawings/logo_1.jpg'
import p16 from './Drawings/ninja_3-cc.png'
import p17 from './Drawings/thresh.png'
import p18 from './Drawings/try_2.jpg'
import p20 from './Drawings/yasuo1.jpg'
import p21 from './Drawings/Zelkaahl.jpg'
import p22 from './Drawings/Zelkaahl1.jpg'

const Drawings = () => { 
    return ( 
        <div>
            <h1>My Drawings</h1><hr/>
            <div class = "default-text">
                <p>
                It is one of my biggest hobbies. From time to time I enjoy being creative and I express that creativity by drawing or designing different projects. You can see some of the logos and picture that I have created below.
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
      {
        original: p14,
        thumbnail: p14,
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
        original: p17,
        thumbnail: p17,
      },
      {
        original: p18,
        thumbnail: p18,
      },
      {
        original: p20,
        thumbnail: p20,
      },
      {
        original: p21,
        thumbnail: p21,
      },
      {
        original: p22,
        thumbnail: p22,
      },
     
  ]; 

  
class MyGallery extends React.Component {
    render() {
      return <ImageGallery style={{width: "100px", height: "200px"}} items={images} />;
    }
  } 

export default Drawings; 