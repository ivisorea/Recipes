import React from 'react'


const Signin = () => {
    return (
        <div>
            <div className="section" style={{marginTop: "250px", margin: "200px", marginBottom: "250px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Log In</h2>
                            <hr/>
                            <form id="contact-form"  
                                method="POST">
                            <div className="form-group">
                            <div className="row">
                            <div className="col-md-6">
                                <input placeholder = "Email"  id="name" type="text" 
                                   className="form-control" required 
                                   />
                            </div>
                            <div className="col-md-6">
                                <input placeholder = "Password"  id="email" type="email"
                                  className="form-control" aria-describedby="emailHelp"
                                  required  />
                            </div>
                            </div>
                            </div>
                            
                            <button type="submit" className="primary-btn submit">Submit</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </div>
    )

}

export default Signin;
