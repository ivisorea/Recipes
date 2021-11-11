import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
        <hr className="footer-seperator" />
            <section className="footer-social-media">
                <div>
                    <a href="/" target="_blank" rel="noopener noreferrer">IG</a>
                </div>
                <div>
                    <a href="/" target="_blank" rel="noopener noreferrer">Pin</a>
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
                Contact Us on email!
                </section>
                </section>
                <section className="footer-info-right">
                <section className="footer-info__number">
                    Don't know what to put here yet
                </section>
                <section className="footer-info__contact">
                Don't know what to put here yet

                    <br />
                    Don't know what to put here yet

                </section>
                </section>
            </section>
            <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;