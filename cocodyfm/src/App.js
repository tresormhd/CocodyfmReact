import React from 'react';
import Navbar from './compoments/HeaderGeneral/Navbar';
import Footer from './compoments/HeaderGeneral/Footer';
import $ from 'jquery'; 
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import './main'
import Presentation from './compoments/Home/presentation';
// import $ from query;


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
    <Navbar />
    <Presentation/>
    <Footer />
    </div>
    );
  }
  
  export default App;
  