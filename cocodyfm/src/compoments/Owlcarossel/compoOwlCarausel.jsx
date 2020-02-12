import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../style/testimonial.css'

const AllCo = props => {
    
    return (
        <div className="container">
        <div className="row">
        <div className="col-md-10">
        <OwlCarousel
        className="owl-theme"
        loop = {true}
        autoplay = {true}
        nav
        // navText ={['<span class="lnr lnr-arrow-up"></span>','<span class="lnr lnr-arrow-down"></span>']}
        // navClass={['owl-btn-prev-c' ,'owl-btn-next-c']}
        // navElement="div"
        // navContainerClass="owl-class-c"
        margin={10}
        items = {props.nb}
        dangerouslySetInnerHTML={{__html: props.content}}
        >
        
        </OwlCarousel>
        
        </div>
        
        </div>
        
        
        </div>	
        
        )
    }
    
    export default AllCo;
    
    