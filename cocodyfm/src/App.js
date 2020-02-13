import React from 'react';

import $ from 'jquery'; 

// Route
import { BrowserRouter as Routeur, Route, Switch , Redirect} from 'react-router-dom';


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
import EvenementCocody from './compoments/Autres/Evenen';
import NotFound from './compoments/NotFound/NotFound';


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
    
    
    // <div className="App">
      <Routeur>
          <Navbar />
              <Route exact path="/" component={Presentation} />
              <Route path="/actualite" component={Actuality} />
              <Route path="/events" component={EvenementCocody} />
              <Switch>
                  <Route path="/playlist" component={Playlist} />
                  <Route path="/artiste" component={PlaylistArticle} />
              </Switch>
              
              <Route path="/showbiz" component={Showbiz} />
              <Route path="/galerie" component={Galerie} />
              <Route path="/space" component={Space} />
              <Route path="/tchat" component={Tchat} />
              {/* not found route */}
              <Route  path="/404" component={NotFound} />
              <Redirect to='404' />


          <Footer />
      </Routeur>
         
  
    );
  }
  
  export default App;
  