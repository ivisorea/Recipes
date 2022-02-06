import React from "react";
import "./styles.css";

export const Footer = () => {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
            <span>
              Welcome to our Green Kitchen. Here we cook and eat healthy
              food with natural ingredients, whole grains, good fats, fruit 
              and vegetables.
            </span>
            <br />
            <br />
            <span>
            We are a team of passionate food lovers who love to cook and eat
            </span>
            <br />
            
          </section>
        </section>
        <section className="footer-info-center">
          <section className="footer-info__socialmedia">
            <a href="https://www.instagram.com/buzzfeedtasty/?hl=en">
              <i class="fab fa-instagram icon"></i>
            </a>
            <a
              href="https://www.pinterest.de/pinterest/delicious-eats/"
            > 
              <i class="fab fa-pinterest icon"></i>
            </a>
            <a href="...">
              <i class="fab fa-github icon"></i>
            </a>
          </section>
          <section className="footer-info__email">group3.wbs@gmail.com</section>
          <section className="footer-info__terms">
            Contact Us via <a href="/pages/contactus"> email </a> !
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
          <span>© 2021 by Group 3. </span>
            <br />
            <span>All rights reserved.</span>
            <br />
            
          </section>
          <section className="footer-info__contact">
            <span>
            Design by Ivis, Dominique and Chris.
            </span>
          </section>
        </section>
      </section>
    </section>
  );
}


