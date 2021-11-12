import React from 'react';
import ContactUs from '../../pages/contactus';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
        <hr className="footer-seperator" />
            <section className="footer-social-media">
                <div className="social" style={{display: "flex"}} >
                    <div >
                    <a class="fab fa-instagram" href="https://www.instagram.com/buzzfeedtasty/?hl=en" style={{marginRight: "5px"}}></a>                     
                    </div>
                    <div >
                    <a class="fab fa-pinterest-p" href="https://www.pinterest.de/pinterest/delicious-eats/" style={{marginLeft: "5px"}}></a>   
                    </div>
                </div>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                <section className="footer-info__name">
                Welcome to our Green Kitchen. Here we cook and eat healthy<br/>
                food with natural ingredients, whole grains, good fats, fruit<br/> 
                 and vegetables.<br/>
                All content is © 2019 by Group 3 (Project 4). All rights reserved.<br/>
                Design by Ivis, Dominique and Chris.
                </section>        
                </section>
                <section className="footer-info-center">
                <section className="footer-info__email">
                    group3.wbs@gmail.com
                </section>
                <section className="footer-info__terms">
                Contact Us via <a href="/pages/contactus"> email </a> !
                </section>
                </section>
                <section className="footer-info-right">
                <section className="footer-info__number">
                    Don't know what to put here 
                </section>
                <section className="footer-info__contact">
                Don't know what to put here 

                    <br />
                    Don't know what to put here 

                </section>
                </section>
            </section>
            <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;