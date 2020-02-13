import React from 'react';

import $ from 'jquery'; 

// Route
import { BrowserRouter as Routeur, Route, Switch } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Navbar from './compoments/HeaderGeneral/Navbar';
import Footer from './compoments/HeaderGeneral/Footer';
import Presentation from './compoments/Home/presentation';
import Actuality from './compoments/Autres/Actuality';
import Playlist from './compoments/Autres/Playlist';
import PlaylistArticle from './compoments/Autres/Playlist-Article';
import Showbiz from './compoments/Autres/Showbiz';
import Galerie from './compoments/Autres/Galerie';
import Space from './compoments/Autres/Space';
import Tchat from './compoments/Autres/Tchat';


function App() {
  return (
    $(function () {
      var navbar = $('.navbar');
      
      $(window).scroll(function () {
        if ($(window).scrollTop() <= 150) {
          $('nav').removeClass('scrolled');
        }
        else {
          $('nav').addClass('scrolled');
        }
      });
    }),
    
    
    <div className="App">
      <Routeur>
          <Navbar />
              <Route exact path="/" component={Presentation} />
              <Route exact path="/actualite" component={Actuality} />
              <Route exact path="/events" component={Event} />
              <Switch>
                  <Route exact path="/playlist" component={Playlist} />
                  <Route exact path="/artiste" component={PlaylistArticle} />
              </Switch>
              
              <Route exact path="/showbiz" component={Showbiz} />
              <Route exact path="/galerie" component={Galerie} />
              <Route exact path="/space" component={Space} />
              <Route exact path="/tchat" component={Tchat} />
          <Footer />
      </Routeur>
    </div>
    );
  }
  
  export default App;
  