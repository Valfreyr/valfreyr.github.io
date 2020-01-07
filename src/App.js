import React from 'react';
import './App.css';
import { bubble as Menu } from 'react-burger-menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import GameCarousel from './GameCarousel';
import Games from './Games';
import Memories from './Projects/memories';
import Xmas from './Projects/xmas';
import Unreal from './Projects/unreal';
import Subzero from './Projects/subzero';
import Saggezza from './Projects/saggezza';
import RTS from './Projects/rts';
import Uni from './Projects/uniProjects';
import Hobby from './Hobbies';
import Drawings from './Personal/drawings';
import Aikido from './Personal/aikido';
import Ncl from './Personal/ncl';
import Lol from './Personal/lol';
import Films from './Personal/films';
import Management from './Personal/management';
import Hackathons from './Personal/hackathons';

import "react-image-gallery/styles/css/image-gallery.css"

function App() {
  return (
    <Router> 
    <div className="App">   

  <Menu>
    <Link style={{ textDecoration: 'none' }} id="home" className="menu-item" to="/"><h1 class ="menuH">Home</h1></Link>
    <Link style={{ textDecoration: 'none' }} id="games" className="menu-item" to="/games"><h1 class ="menuH">My Games</h1></Link>
    <Link style={{ textDecoration: 'none' }} id="hobbies" className="menu-item" to="/hobbies"><h1 class ="menuH">My Hobbies</h1></Link>
  </Menu>

  <Switch>
          <Route path="/games">
            <GameCarousel games={Games}/> 
          </Route>
          <Route path="/memories"> 
            <Memories />
          </Route>
          <Route path="/xmas"> 
            <Xmas />
          </Route>
          <Route path="/unreal"> 
            <Unreal />
          </Route>
          <Route path="/subzero"> 
            <Subzero />
          </Route>
          <Route path="/saggezza"> 
            <Saggezza />
          </Route>
          <Route path="/rts"> 
            <RTS />
          </Route>
          <Route path="/uniProjects"> 
            <Uni />
          </Route>
          <Route path="/hobbies"> 
            <GameCarousel games={Hobby}/> 
          </Route>
          <Route path="/drawings"> 
            <Drawings />
          </Route>
          <Route path="/aikido"> 
            <Aikido />
          </Route>
          <Route path="/ncl"> 
            <Ncl />
          </Route>
          <Route path="/lol"> 
            <Lol />
          </Route>
          <Route path="/films"> 
            <Films />
          </Route>
          <Route path="/management"> 
            <Management />
          </Route>
          <Route path="/hackathons"> 
            <Hackathons />
          </Route>
          <Route path="/">
           <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}


export default App;
