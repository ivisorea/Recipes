import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './styles.css';
import { Row } from "react-bootstrap";

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_oz8be3m', 'template_jixccee', form.current, 'user_UiGmiy7v8kDD7gToJz1do')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          //Clear form
            form.current.reset();
         alert('Your message has been sent!')
      };

    return (
        <div className="section" style={{marginTop: "120px", marginBottom: "40px"}}>
            <div className="container">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Contact Us</h2>
                            <p>Let us know what you think! In order to provide better service,
                                 please do not hesitate to give us your feedback. Thank you.</p><hr/>
                            <div className="container">
                                <form ref={form} className="form" onSubmit={sendEmail}>
                                    <div className="row-contact" >
                                        <input className="input-form form-control" placeholder = "Name"  name="user_name" type="text" required />
                                        <input className="input-form form-control" placeholder = "Email"  name="user_email" type="email" required/>
                                        <textarea className="textarea-form form-control" placeholder = "Message"  name="message" rows="10" required></textarea>
                                    <input type="submit" className="btn primary-btn submit" value="Send"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
  
