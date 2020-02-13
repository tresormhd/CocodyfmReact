import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import '../../style/testimonial.css'

const AllCo = props => {

    return (
            <OwlCarousel
                className="owl-theme"
                loop={true}
                autoplay={true}
                nav
                navText ={[`<div class="section-program__control-previous" id="slideBack">
                <img src="img/icon/arrow.svg" alt="arrow" />
            </div>`,` <div class="section-program__control-next " id="slide">
            <img src="img/icon/arrow.svg" alt="arrow" />
        </div>`]}
                navClass={['owl-btn-prev-c' ,'owl-btn-next-c']}
                navElement="div"
                navContainerClass="owl-class-c"
                margin={10}
                items={props.nb}
                dangerouslySetInnerHTML={{ __html: props.content }}
            >

            </OwlCarousel>

    )
}

export default AllCo;

