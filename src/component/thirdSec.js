import React from 'react';
import "./thirdSec.css";
import {Swiper,SwiperSlide} from "swiper/react"; 
import {FreeMode} from "swiper";   
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from 'react-reveal/Fade';

const ThirdSec = () => {  
  return (
    <div className='container mb-5'>
      <div className='row' id="dsaqmohamesaa">
      <Fade left big>
        <div className='col-lg-4 col-md-4' id="dsdahshokdssjd">
            <img alt="ds" src="./images/Frame 08.png"/>
            <p>Reporting</p>
            <h3>Stay on top of things with always up-to-date reporting features.</h3>
            <p>We talked about reporting in the section above but we needed three
             items here, so mentioning it one more time for posterity.</p>
        </div>
      
        <div className='col-lg-4 col-md-4' id="dsdahshokdssjd">
            <img alt="ds" src="./images/Frame 8.png"/>
            <p>Inventory</p>
            <h3>Never lose track of what’s in stock with accurate inventory tracking.</h3>
            <p>We don’t offer this as part of our software but that statement is inarguably true. 
            Accurate inventory tracking would help you for sure.</p>
        </div>
        <div className='col-lg-4 col-md-4' id="dsdahshokdssjd">
            <img alt="ds" src="./images/Frame 008.png"/>
            <p>Contacts</p>
            <h3>Organize all of your contacts, service providers, and invoices in one place.</h3>
            <p>This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, 
            you’ll feel really organized and professional.</p>
        </div>
         </Fade>
      </div>
     

      <div id='sliderdrugg' className='d-flex justify-content-center '>
    <Swiper
    freeMode={true}
    grabCursor={true}
    modules={[FreeMode]}
    className="mySwiper" 
    breakpoints={{
        200: {
            slidesPerView:1,
            spaceBetween:-15,
        },
        430: {
            slidesPerView:1,
            spaceBetween:-80,
        },
        480: {
            slidesPerView: 1,
            spaceBetween:-90,
        },
        768: {
            slidesPerView: 1,
            spaceBetween:-150,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween:-200,
        },
        1280: {
            slidesPerView: 1,
            spaceBetween:-215,
        },
    }} 
    >
    <SwiperSlide>
        <img alt='fds' id="dffdh23o" src='./images/profit-loss.png'/>
    </SwiperSlide>
    <SwiperSlide>
        <img alt='fds' id="dffdh23o" src='./images/inventory.png'/>
    </SwiperSlide>

    </Swiper>
    </div>
    </div>
  )
}

export default ThirdSec
