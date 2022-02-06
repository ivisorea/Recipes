import React from "react";


export const ContactUs = () => {

    return (
        <div className="section" style={{marginTop: "120px", marginBottom: "40px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Contact Us</h2>
                            <p>Let us know what you think! In order to provide better service,
                                 please do not hesitate to give us your feedback. Thank you.</p><hr/>
                            <form id="contact-form"  
                                method="POST">
                            <div className="form-group">
                            <div className="row">
                            <div className="col-md-6" style={{marginBottom: "10px"}}>
                                <input placeholder = "Name"  id="name" type="text" 
                                   className="form-control" required 
                                   />
                            </div>
                            <div className="col-md-6">
                                <input placeholder = "Email"  id="email" type="email"
                                  className="form-control" aria-describedby="emailHelp"
                                  required  />
                            </div>
                            </div>
                            </div>
                            <div className="form-group" style={{marginBottom: "10px"}}>
                                <input placeholder = "Subject"  id="subject" type="text"
                                  className="form-control" required rows= "10"
                                  />
                            </div>
                            <div className="form-group">
                                <textarea placeholder = "Message"  id="message" 
                                   className="form-control" rows="10" 
                                   required 
                                   />
                            </div>
                            <button type="submit" className="primary-btn submit">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
  
